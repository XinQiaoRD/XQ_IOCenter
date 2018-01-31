function HammerMove(id,fn) {

    this.AnimationEndName = "webkitAnimationEnd";

    this.$dom  = $(id);
    this.body = this.$dom[0];
    this.w = this.$dom.width();
    this.h = this.$dom.height();
    this.fn = fn;
    if(!this.fn) this.fn = {};
    this.enable = true;

    this.hammer = new Hammer.Manager(this.body);
    this.hammer.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 10 }));
    this.hammer.on("panstart", Hammer.bindFn(this.onPanStart, this));
    this.hammer.on("panmove", Hammer.bindFn(this.onPanMove, this));
    this.hammer.on("panend", Hammer.bindFn(this.onPanEnd, this));

}

//竖向Pan
HammerMove.prototype.onPanStart = function(ev){

    if(!this.enable) return;
    var x = ev.pointers[0].pageX-this.w/2;
    var y = ev.pointers[0].pageY-this.h/2;
    if(this.fn.start) this.fn.start({x:x, y:y, dom:this.$dom});

    this.$dom.css({left:x, top:y});

};
HammerMove.prototype.onPanMove = function(ev){
    if(!this.enable) return;
    var x = ev.pointers[0].pageX-this.w/2;
    var y = ev.pointers[0].pageY-this.h/2;
    this.$dom.css({left:x, top:y});

};
HammerMove.prototype.onPanEnd = function(ev){
    if(!this.enable) return;
    var x = ev.pointers[0].clientX-this.w/2;
    var y = ev.pointers[0].clientY-this.h/2;
    if(this.fn.end) this.fn.end({x:x, y:y, dom:this.$dom});
};