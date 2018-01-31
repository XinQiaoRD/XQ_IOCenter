Room.Loader = {};
Room.Loader.ppt = function(){
    var Start = "Index";
    cc.ppt(["Loader", Start] , function(after , callback){
        cc.m["Loader"].velocity({ opacity: 0}, { duration: 500, display: "none" });
        cc.m[Start].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 500, complete:function(){
            //after.come();
        }});
    })
};


Room.Index = {};
Room.Index.dom = function(){
    Dom.Index = $("#Index .swiper-slide li");
    Dom.Index.eq(0).tap(function(e){
        cc.tap(e);
        Room.Index.ppt(1);
    });
    Dom.Index.eq(1).tap(function(e){
        cc.tap(e);
        Room.Index.ppt(2);
    });
    Dom.Index.eq(2).tap(function(e){
        cc.tap(e);
        Room.Index.ppt(3);
    });

};
Room.Index.come_before = function(next){
    cc.m["Index"].velocity({ translateX: 0}, { duration: 0});
    next();
};
Room.Index.ppt = function(i){
    Dom._unable.show();
    var Video = "Video"+i;
    cc.ppt(["Index", Video, "", "Video"] , function(after , callback){
        cc.m["Index"].velocity({ translateX: -1024}, { delay:10, duration: 400, display: "none" });
        cc.m[Video].velocity({ translateX: 0}, { duration: 400, complete:function(){
                Dom._unable.hide();
            }});
    })
};

//Video
Room.Video = {};
Room.Video.come_before = function(next){
    cc.m[cc.id].show().velocity({ translateX: 1024}, { duration: 0});
    next();
};