function HammerPage(id, h, y) {

    this.$dom  = $(id);
    this.body = this.$dom[0];

    this.height = this.$dom.height();
    this.width = this.$dom.width();

    this.$box = this.$dom.find("._box");
    this.box  = this.$box[0];
    this.$box.css("width", this.width);
    this.$box.css("height", h);

    this.boxW = this.width;
    this.boxH = h;
    this.py = parseInt(this.boxH)/10;

    //目前box框处于的位置情况
    if(!y) y=0;
    this.y = y;

    //超出区域是否马上停止，默认false
    this.overstop = false;

    //建立$hammer类
    this.hammer = new Hammer.Manager(this.body);


    //可移动的最大区域
    if(parseInt(this.boxH)>parseInt(this.height))
        this.h = parseInt(this.boxH)-parseInt(this.height);
    else this.h = 0;

    this.direction = Hammer.DIRECTION_VERTICAL;
    this.hammer.add(new Hammer.Pan({ direction: this.direction, threshold: 10 }));
    this.hammer.on("panstart", Hammer.bindFn(this.onPanStartY, this));
    this.hammer.on("panmove", Hammer.bindFn(this.onPanMoveY, this));
    this.hammer.on("panend", Hammer.bindFn(this.onPanEndY, this));



}

//竖向Pan
HammerPage.prototype.onPanStartY = function(){
    this.box.style.transition = "";
    this.box.style.webkitTransition = "";

};
HammerPage.prototype.onPanMoveY = function(ev){
    var y = parseInt(ev.deltaY)+parseInt(this.y);

    if(this.overstop){
        if(y>0 || y<-this.y) return;
    }

    var translate = 'translate(0, ' + y + 'px)';
    this.box.style.transform = translate;
    this.box.style.webkitTransform = translate;

};
HammerPage.prototype.onPanEndY = function(ev){
    var y , p;
    // //计算缓动距离
    // p = parseInt(this.py)*(Math.abs(parseInt(ev.velocity))+1);
    //
    p = 0;
    if(parseInt(ev.deltaY)<0) y = parseInt(this.y) + parseInt(ev.deltaY)-p;
    else if(parseInt(ev.deltaY)>0) y = parseInt(this.y)+ parseInt(ev.deltaY)+p;

    if(!y) return;

    if(y>0) {
        y = 0;
        this.y = 0;
    }else if(y<-this.h) {
        y=-this.h;
        this.y = y;
    }else{
        this.y = y;
    }

    this.box.style.transition = "transform .4s ease-out";
    this.box.style.webkitTransition = "transform .4s ease-out";
    var translate = 'translate(0, ' + y + 'px)';
    this.box.style.transform = translate;
    this.box.style.webkitTransform = translate;


};