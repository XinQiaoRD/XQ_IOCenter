////////菜单模块 plug-VideoCtrl
function VideoCtrl(pa){

    if(!pa.id){
        alert("plug-VideoCtrl,参数id未设置！");
        return;
    }
    if(!pa.to){
        alert("plug-VideoCtrl,参数远程要控制的视频名称！");
        return;
    }

    this.id = pa.id;
    this.nm = pa.id.replace('#', '');
    this.to = pa.to;
    if(!pa.vs) this.vs = "";
    else this.vs = pa.vs;

    this.m = $(pa.id);

    var VideoCtrl_View  = _.template($("#VideoCtrl_View").html());
    var VideoCtrl_Html = VideoCtrl_View();
    this.m.html(VideoCtrl_Html);

    this.VLen = 0;
    this.playTime = 0;
    this.time_css = 868;

}

VideoCtrl.prototype.ini = function(pa){

    if(!pa.vol) this.vol = 10;
    else this.vol = pa.vol;

    this.dom = {};
    this.dom.play = $(this.id+" .play .btn");
    this.dom.replay = $(this.id+" .replay .btn");
    this.dom.end = $(this.id+" .end .btn");
    this.dom.vol_up = $(this.id+" .vol_up .btn");
    this.dom.vol_down = $(this.id+" .vol_down .btn");

    this.dom.vol_pot = $(this.id+" .vol_pot");
    this.dom.vol_num = $(this.id+" .vol_num");

    this.dom.play_txt = $(this.id+" .play .txt_cn");

    this.dom.time_math = $(this.id+" .time_math");
    this.dom.time_progress = $(this.id+" .time_progress");
    this.dom.time_now = $(this.id+" .time_now");
    this.dom.time_len = $(this.id+" .time_len");

    this.dom.play.tap(function(e){
        e.stopPropagation();
        if(this.dom.play.hasClass("act")){
            this.dom.play.removeClass("act");
            this.dom.play_txt.html("点击播放");
            this.stop();

        }else{
            this.dom.play.addClass("act");
            this.dom.play_txt.html("点击暂停");
            this.play();

        }
    }.bind(this));

    this.dom.replay.tap(function(e){
        e.stopPropagation();
        this.replay();
    }.bind(this));
    this.dom.end.tap(function(e){
        e.stopPropagation();
        this.end();
    }.bind(this));
    this.dom.vol_up.tap(function(e){
        e.stopPropagation();

        this.volume(this.vol+5);

    }.bind(this));
    this.dom.vol_down.tap(function(e){
        e.stopPropagation();

        this.volume(this.vol-5);
    }.bind(this));

    this.volume(this.vol);
    this.videoLength();

    ws.on(this.nm+"MediaEnd", function(){
        this.stop(0);
    }.bind(this));

    ws.on(this.nm+"MediaLoop", function(json){
        this.playTime = parseInt(json.val);
    }.bind(this));

};

//获取片场
VideoCtrl.prototype.videoLength = function(){
    if(this.VLen) return;
    ws.emit({to:this.to , key:"MediaLength"+this.vs});
    ws.on(this.nm+"MediaLength", function(json){
        var vlen = parseInt(json.val);
        if(vlen) {
            this.VLen = vlen;
            var t = formatTime(vlen);
            this.dom.time_len.html(t);
        }
    }.bind(this));

};

//控制声音
VideoCtrl.prototype.volume = function(vol){

    if(vol>100) vol = 100;
    if(vol<0) vol = 0;

    this.vol = vol;
    var num = 70*(vol/100);
    this.dom.vol_pot.css("width", num+"%");
    this.dom.vol_num.html(vol+"%");

    ws.emit({to:this.to , key:"MediaVol"+this.vs , val:this.vol });

};

VideoCtrl.prototype.progress = function(){

    if(!this.VLen) {
        this.dom.time_math.css("left" , "0px").html("0%");
        this.dom.time_progress.val(0);
        return;
    }

    if(this.playTime<0) this.playTime = 0;
    if(this.playTime>this.VLen) {
        this.playTime = 0;
    }

    this.dom.time_now.html(formatTime(this.playTime));

    var num = this.playTime/this.VLen;
    var left = parseInt(num*this.time_css);
    var per = num*100;
    this.dom.time_math.css("left" , (left-15)+"px").html(parseInt(per)+"%");
    this.dom.time_progress.val(per);
};

//播放
VideoCtrl.prototype.play = function(start){
    if(!this.VLen) {
        this.videoLength();
        clearInterval(this.playHand);
        this.dom.play.removeClass("act");
        this.dom.play_txt.html("点击播放");
        this.progress();
        return;
    }

    this.dom.play.addClass("act");
    this.dom.play_txt.html("点击暂停");

    if(start || start===0) {
        this.playTime = start;
        ws.emit({to:this.to , key:"MediaTime"+this.vs , val:this.playTime});
    }

    ws.emit({to:this.to , key:"MediaPlay"+this.vs, val:this.vol});

    this.playHand = setInterval(function(){
        this.playTime++;
        this.progress();
    }.bind(this) , 1000);

};

//暂停
VideoCtrl.prototype.stop = function(end){

    if(end || end===0) {
        this.playTime = end;
        ws.emit({to:this.to , key:"MediaTime"+this.vs, val:this.playTime});
    }

    this.dom.play.removeClass("act");
    this.dom.play_txt.html("点击播放");
    clearInterval(this.playHand);

    this.progress();

    ws.emit({to:this.to , key:"MediaStop"+this.vs});
};

//完成
VideoCtrl.prototype.end = function(){

    this.playTime = 0;
    this.dom.play.removeClass("act");
    this.dom.play_txt.html("点击播放");
    clearInterval(this.playHand);

    this.progress();

    ws.emit({to:this.to , key:"MediaEnd"+this.vs});
};

//重新开始
VideoCtrl.prototype.replay = function(){
    this.playTime = 0;
    this.progress();
    ws.emit({to:this.to , key:"MediaPlay"+this.vs, val:this.vol, time:0});
};

function formatTime(seconds) {
    var min = Math.floor(seconds / 60),
        second = seconds % 60,
        hour, newMin, time;

    if (min > 60) {
        hour = Math.floor(min / 60);
        min = min % 60;
    }else{
        hour = 0;
    }

    if (second < 10) { second = '0' + second;}
    if (min < 10) { min = '0' + min;}
    if (hour < 10) { hour = '0' + hour;}

    //return time = hour? (hour + ':' + newMin + ':' + second) : (min + ':' + second);
    return time = hour + ':' + min + ':' + second;
}
