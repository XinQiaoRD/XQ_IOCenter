var cv={};
var cvtw = createjs.Tween;

function CanvasCreate(dom) {

    this.$m = dom;
    this.m = dom[0];
    //图片
    this.img = [];
    //遮罩
    this.mark = [];
    //精灵图
    this.sprite = [];
    this.sprite_webgl = [];
    this.SpriteSheet = [];
    //其他节点
    this.dom = [];
    //容器
    this.cc = [];
    //默认帧数
    this.framerate = 24;
    //拖动产生
    this.ifDrag = [];

    //createJs舞台
    this.stage = new createjs.Stage(this.m);
    createjs.Touch.enable(this.stage);

    createjs.Ticker.addEventListener("tick", this.stage);
}

CanvasCreate.prototype.ccv = function(key, pa){

    if(this.cc[key]) return;

    this.cc[key] = new createjs.Container();

    if(pa) {
        for(var it in pa){
            this.cc[id][it] = pa[it];
        }
    }

};

//画图
//id:加载的id
//pa:配置图片的x,y,透明度等
CanvasCreate.prototype.drawImg = function(id, cc, pa, img, mark){

    if(!this.img[id]) {
        if(!img) img = Loads.loaded[id];
        this.img[id] = new createjs.Bitmap(img);
        if(mark) {
            console.log(this.mark[mark]);
            this.img[id].mark = this.mark[mark];
        }
    }

    if(pa) {
        for(var it in pa){
            this.img[id][it] = pa[it];
        }
    }

    if(cc) {
        if(cc=="stage") this.stage.addChild(this.img[id]);
        else this.cc[cc].addChild(this.img[id]);
    }

};
CanvasCreate.prototype.drawImgMark = function(id, cc, pa, img){

    if(!this.img[id]) {
        if(!img) img = Loads.loaded[id];
        this.img[id] = new createjs.Bitmap(img);
        this.img[id].mask = this.mark[id];
    }

    if(pa) {
        for(var it in pa){
            this.img[id][it] = pa[it];
        }
    }

    if(cc) {
        if(cc=="stage") this.stage.addChild(this.img[id]);
        else this.cc[cc].addChild(this.img[id]);
    }

};

//画图遮蔽
//id:加载的id
//pa:配置图片的x,y,透明度等
CanvasCreate.prototype.drawMark = function(id, gra, pa) {

    if (!this.mark[id]) {
        this.mark[id] = new createjs.Shape(gra);
    }

    if (pa) {
        for (var it in pa) {
            this.mark[id][it] = pa[it];
        }
    }
};

//精灵图
//id:加载的id
//pa.json:对应flash-zoe导出的json(width,height,x,y)
//pa.mov:对应sprite的spriteSheet->animations
//pa.conf:配置canvas.sprite的属性
CanvasCreate.prototype.drawSprite = function(id, cc, pa, img, json){
    if(!this.sprite[id]) {

        if(!pa) pa = {};
        if(!pa.framerate) pa.framerate = this.framerate;

        if(!json) json = id;

        var es;
        var framesKey = [];
        var frames = [];
        var img_arr = [];

        if(pa.img_num){

            frames = [];
            for(var i=1; i<=pa.img_num; i++){

                es = spriteJson[json+"_"+i];
                if(!es) console.log("spriteJson["+id+"_"+i+"]不存在");
                framesKey = [];

                for ( var p in es.frames ){
                    if ( typeof ( es.frames[p]) == "function" ){
                        continue;
                    } else {
                        framesKey.push(p);
                    }
                }
                for (var k in framesKey){
                    var est = es.frames[framesKey[k]];
                    frames.push([est.x, est.y, est.w, est.h, 0, -est.offX, -est.offY])
                }

                img_arr.push(Loads.loaded[id+"_"+i])
            }

            if(!img) img = img_arr;

        }else{

            es = spriteJson[json];
            if(!es) console.log("spriteJson["+id+"]不存在");
            framesKey = [];
            frames = [];
            for ( var p in es.frames ){
                if ( typeof ( es.frames[p]) == "function" ){
                    continue;
                } else {
                    framesKey.push(p);
                }
            }
            for (var k in framesKey){
                var est = es.frames[framesKey[k]];
                frames.push([est.x, est.y, est.w, est.h, 0, -est.offX, -est.offY])
            }

            if(!img) img = [Loads.loaded[id]];
        }

        var spriteSheet = new createjs.SpriteSheet({
            "framerate": pa.framerate,
            "images": img,
            "frames": frames,
            // define two animations, run (loops, 1.5x speed) and jump (returns to run):
            //pa.mov 格式{"ini":[0,0]}
            "animations": pa.mov
        });
        this.SpriteSheet[id] = spriteSheet;

        this.sprite[id] = new createjs.Sprite(spriteSheet, "ini");

    }

    if(pa.conf){
        for(var it in pa.conf){
            this.sprite[id][it] = pa.conf[it];
        }
    }

    if(cc) {
        if(cc=="stage") this.stage.addChild(this.sprite[id]);
        else this.cc[cc].addChild(this.sprite[id]);
    }
};

CanvasCreate.prototype.drawPhotos = function(id, cc, key, num, pa){
    if(!this.sprite[id]) {

        if(!pa) pa = {};
        if(!pa.framerate) pa.framerate = this.framerate;

        var img = [];
        var frames = [];
        for(var i=1; i<=num; i++){
            img.push(Loads.loaded[key+i]);
            frames.push([pa.frames[0], pa.frames[1], pa.frames[2], pa.frames[3], (i-1), 0, 0]);
        }

        var spriteSheet = new createjs.SpriteSheet({
            "framerate": pa.framerate,
            "frames": frames,
            "images": img,
            // define two animations, run (loops, 1.5x speed) and jump (returns to run):
            //pa.mov 格式{"ini":[0,0]}
            "animations": pa.mov
        });

        this.sprite[id] = new createjs.Sprite(spriteSheet, "ini");

    }

    if(pa.conf){
        for(var it in pa.conf){
            this.sprite[id][it] = pa.conf[it];
        }
    }

    if(cc) {
        if(cc=="stage") this.stage.addChild(this.sprite[id]);
        else this.cc[cc].addChild(this.sprite[id]);
    }
};

CanvasCreate.prototype.drawArea = function(id, cc, rect, color, pa){

    if(!this.dom[id]) {

        var gra = new createjs.Graphics().beginFill(color).drawRect(rect[0],rect[1],rect[2],rect[3]);
        this.dom[id] = new createjs.Shape(gra);
    }

    if(pa){
        for(var it in pa){
            this.dom[id][it] = pa[it];
        }
    }

    if(cc) {
        if(cc=="stage") this.stage.addChild(this.dom[id]);
        else this.cc[cc].addChild(this.dom[id]);
    }

};
CanvasCreate.prototype.drawImgBtn = function(id, cc, rect){

    if(!rect){
        rect = [this.img[id].x, this.img[id].y, this.img[id].image.width, this.img[id].image.height];
    }

    if(!this.dom[id]) {
        var gra = new createjs.Graphics().beginFill("#ffffff").drawRect(rect[0],rect[1],rect[2],rect[3]);
        this.dom[id] = new createjs.Shape(gra);
        this.dom[id].alpha = 0.01;
    }

    if(cc) {
        if(cc=="stage") this.stage.addChild(this.dom[id]);
        else this.cc[cc].addChild(this.dom[id]);
    }

};

CanvasCreate.prototype.drawCircle = function(id, cc, circle, color, pa){

    if(!this.dom[id]) {

        var gra = new createjs.Graphics().beginFill(color).drawCircle(circle[0],circle[1],circle[2]);
        this.dom[id] = new createjs.Shape(gra);
    }

    if(pa){
        for(var it in pa){
            this.dom[id][it] = pa[it];
        }
    }

    if(cc) {
        if(cc=="stage") this.stage.addChild(this.dom[id]);
        else this.cc[cc].addChild(this.dom[id]);
    }
};

CanvasCreate.prototype.drawShape = function(id, cc, gra, pa){

    if(!this.dom[id]) {
        this.dom[id] = new createjs.Shape(gra);
    }

    if(pa){
        for(var it in pa){
            this.dom[id][it] = pa[it];
        }
    }

    if(cc) {
        if(cc=="stage") this.stage.addChild(this.dom[id]);
        else this.cc[cc].addChild(this.dom[id]);
    }

};

//写字
//w:要写的字
//"Hello World", "20px Arial", "#ff7700"
//pa:配置的x,y,透明度等
CanvasCreate.prototype.drawFont = function(id, cc, w, font, color, pa){

    if(!this.dom[id]) {
        this.dom[id] = new createjs.Text(w, font, color);
    }

    if(pa) {
        for(var it in pa){
            this.dom[id][it] = pa[it];
        }
    }

    if(cc) {
        if(cc=="stage") this.stage.addChild(this.img[id]);
        else this.cc[cc].addChild(this.img[id]);
    }

};


CanvasCreate.prototype.draw = function(cc , img, fn){

    var dom;
    if(cc) dom = this.cc[cc];
    else dom = this.stage;

    for(var i in img){
        dom.addChild(img[i]);
    }

    if(fn) fn();
};

//清理
CanvasCreate.prototype.clsDom = function(cc , dom){
    if(cc=="stage") this.stage.removeChild(dom);
    else this.cc[cc].removeChild(dom);
};

//动画
CanvasCreate.prototype.mov = function(dom, pa, time, fn, ease){
    if(ease){
        var target = createjs.Tween.get(dom).to(pa, time, ease);
    }else{
        var target = createjs.Tween.get(dom).to(pa, time);
    }

    if(fn) target.call(fn);
};


CanvasCreate.prototype.set = function(id, pa, dom){
    if(!dom){
        dom = this.cc[id];
    }

    for(var it in pa){
        dom[it] = pa[it];
    }
};
CanvasCreate.prototype.show = function(id,  mov, time, z, fn){

    if(!z) z=0;
    //canvas.stage.removeChild(canvas.cc[id]);
    this.stage.addChildAt(this.cc[id], z);

    if(mov){
        this.mov(this.cc[id], mov, time, fn);
    }

};
CanvasCreate.prototype.hide = function(id, mov, time, fn){

    if(mov){
        this.mov(this.cc[id], mov, time, function(){
            this.stage.removeChild(this.cc[id]);
            if(fn) fn();
        });
    }else{
        this.stage.removeChild(this.cc[id]);
    }

};

CanvasCreate.prototype.spriteMovEnd = function(id, fn, loop){
    var _this = this;
    this.sprite[id].on("animationend", function(){
        if(!loop) _this.sprite[id].stop();
        if(fn) fn();
    });
};


CanvasCreate.prototype.play = function(id, key){
    if(this.sprite[id]) this.sprite[id].gotoAndPlay(key);
};

CanvasCreate.prototype.stop = function(id){
    if(this.sprite[id]) this.sprite[id].stop();
};

CanvasCreate.prototype.drag = function(id, dom, pa, fn){

    this.ifDrag[id] = 1;
    var _this = this;
    if(!pa) pa={};
    if(!pa.x) pa.x = 0;
    if(!pa.y) pa.y = 0;

    dom.addEventListener("pressmove", function (event) {
        if(!_this.ifDrag[id]) return;
        dom.x = event.stageX+pa.x;
        dom.y = event.stageY+pa.y;

    }, false);

    dom.addEventListener("pressup", function (event) {
        if(!_this.ifDrag[id]) return;
        if(fn) fn(event.stageX+pa.x, event.stageY+pa.y, event)
    });

};


//////////通用函数
////精灵图
cv.gotoAndPlay = function(id, sp, mov){
    if(Canvas[id].sprite[sp])
        Canvas[id].sprite[sp].gotoAndPlay(mov);
    else console.log("Canvas[id].sprite[sp]不存在", id, sp);
};
cv.stop = function(id, sp){
    if(Canvas[id].sprite[sp])
        Canvas[id].sprite[sp].stop();
    else console.log("Canvas[id].sprite[sp]不存在", id, sp);
};
//辅助生产精灵图动画帧
cv.mov = function(num, wait){
    var arr = [];
    for(var i=0; i<=num; i++) {
        arr.push(i)
    }
    if(wait){
        for(var i=0; i<=wait; i++) {
            arr.push(num+1)
        }
    }
    // console.log(arr);
    return  arr
};
cv.back = function(num){
    var arr = [];
    for(var i=num; i>=0; i--) {
        arr.push(i)
    }
    return  arr
};
cv.ping = function(num, wait){
    var arr = [];
    for(var i=0; i<=num; i++) {
        arr.push(i)
    }
    if(wait){
        for(var i=0; i<=wait; i++) {
            arr.push(num)
        }
    }
    for(var i=num; i>=0; i--) {
        arr.push(i)
    }
    // console.log(arr);
    return  arr
};

//获得精灵图第1帧位置，用于生成btn
cv.getArea = function(id){
    var es = spriteJson[id];
    var arr = [];
    for ( var p in es.frames ){
        arr.push(es.frames[p].offX);
        arr.push(es.frames[p].offY);
        arr.push(es.frames[p].w);
        arr.push(es.frames[p].h);
        // console.log(arr)
        return arr;
    }
};

////动画效果
//浮动效果
cv.movWiggle = function(img, ax, ay, time){
    var nx = img.x;
    var ny = img.y;
    if(!time) time=2000;

    return setInterval(function(){
        var x = cv.GetRandomNum(-ax, ax);
        var y = cv.GetRandomNum(-ay, ay);
        cvtw.get(img).to({x:nx+x, y:ny+y }, time);
    },time+10);
};
cv.GetRandomNum = function(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
};


////动作相关
cv.Clamp = function(num,nMin,nMax){
    if(num>=nMin && num<=nMax) return true;
    else return false;
};


function mp3_play(key, loop, vol){
    if(!Dom["mp3_"+key]){
        if(!loop) {
            Dom["mp3_"+key] = createjs.Sound.play("mp3_"+key, {interrupt: createjs.Sound.INTERRUPT_ANY});
        }else {
            Dom["mp3_"+key] = createjs.Sound.play("mp3_"+key, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
        }
    }
    //if(vol) Dom["mp3_"+key].volume = vol;
    Dom["mp3_"+key].play();

}
function mp3_stop(key){
    if(!Dom["mp3_"+key]) Dom["mp3_"+key] = createjs.Sound.play("mp3_"+key, {interrupt: createjs.Sound.INTERRUPT_ANY});
    if(!key) createjs.Sound.stop();
    else Dom["mp3_"+key].stop();
}