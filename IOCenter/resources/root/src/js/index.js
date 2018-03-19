Room.Loader = {};
Room.Loader.ppt = function(){
    var Start = "Video1";
    cc.ppt(["Loader", Start] , function(after , callback){
        cc.m["Loader"].velocity({ opacity: 0}, { duration: 500, display: "none" });
        //after.come();
        cc.m[Start].show();
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
    cc.m["Index"].show().velocity({ translateX: -1024}, { duration: 0});
    next();
};
Room.Index.come_after = function(){
    cc.m["Index"].velocity({ translateX: 0}, { duration: 0});
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
Room.Video.dom = function(){
    $(".MainTP .return").tap(function(e){
        cc.tap(e);
        Room.Video.ppt();
    });
    $(".MainTP .title").on("taphold",function(e){
        cc.tap(e);
        var to = $(this).data("id");
        ws.emit({to:to , key:"reload"});
    });
};
Room.Video.come_before = function(next){
    cc.m[cc.id].show().velocity({ translateX: 1024}, { duration: 0});
    next();
};
Room.Video.ppt = function(){
    Dom._unable.show();
    cc.ppt([cc.id, "Index", "Video"] , function(after , callback){
        cc.m[cc.old].velocity({ translateX: 1024}, { delay:10, duration: 400, display: "none" });
        cc.m["Index"].velocity({ translateX: 0}, { duration: 400, complete:function(){
                Dom._unable.hide();
            }});
    })
};