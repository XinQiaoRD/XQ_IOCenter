Room.Loader = {};
Room.Loader.ppt = function(){
    var Start = "Index";
    cc.ppt(["Loader", Start, "", "X"] , function(after , callback){
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
        Room.Index.ppt_person();
    });

    // Dom.Index.eq(2).tap(function(e){
    //     cc.tap(e);
    //     Room.Index.ppt(3);
    // });

    Dom.Person = $("#Person .btn");
    Dom.Person.eq(0).tap(function(e){
        cc.tap(e);
        Room.Index.ppt_video(2);
    });
    Dom.Person.eq(1).tap(function(e){
        cc.tap(e);
        Room.Index.ppt_video(3);
    });
    Dom.Person.eq(2).tap(function(e){
        cc.tap(e);
        Room.Index.ppt_video(4);
    });
    Dom.Person.eq(3).tap(function(e){
        cc.tap(e);
        Room.Index.ppt_video(5);
    });
    Dom.Person.eq(4).tap(function(e){
        cc.tap(e);
        Room.Index.ppt_video(6);
    });
    Dom.Person.eq(5).tap(function(e){
        cc.tap(e);
        Room.Index.ppt_video(7);
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
Room.Index.ppt_person = function(){
    Dom._unable.show();
    var Video = "Person";
    cc.ppt(["Index", Video, "", "Video"] , function(after , callback){
        cc.m["Index"].velocity({ translateX: -1024}, { delay:10, duration: 400, display: "none" });
        cc.m[Video].velocity({ translateX: 0}, { duration: 400, complete:function(){
                Dom._unable.hide();
            }});
    })
};
Room.Index.ppt_video = function(id){
    Dom._unable.show();
    var Video = "Video"+id;
    cc.ppt([cc.id, Video, "", "Video"] , function(after , callback){
        cc.m[cc.old].velocity({ translateX: -1024}, { delay:10, duration: 400, display: "none" });
        cc.m[Video].velocity({ translateX: 0}, { duration: 400, complete:function(){
                Dom._unable.hide();
            }});
    })
};

//Video
Room.Video = {};
Room.Video.dom = function(){
    $("#Video1 .MainTP .return").tap(function(e){
        cc.tap(e);
        Room.Video.ppt();
    });
    $("#Person .MainTP .return").tap(function(e){
        cc.tap(e);
        Room.Video.ppt();
    });

    $("#Video2 .MainTP .return").tap(function(e){
        cc.tap(e);
        Room.Video.person_ppt(2);
    });
    $("#Video3 .MainTP .return").tap(function(e){
        cc.tap(e);
        Room.Video.person_ppt(3);
    });
    $("#Video4 .MainTP .return").tap(function(e){
        cc.tap(e);
        Room.Video.person_ppt(4);
    });
    $("#Video5 .MainTP .return").tap(function(e){
        cc.tap(e);
        Room.Video.person_ppt(5);
    });
    $("#Video6 .MainTP .return").tap(function(e){
        cc.tap(e);
        Room.Video.person_ppt(6);
    });
    $("#Video7 .MainTP .return").tap(function(e){
        cc.tap(e);
        Room.Video.person_ppt(7);
    });
    // $(".MainTP .title").on("taphold",function(e){
    //     cc.tap(e);
    //     var to = $(this).data("id");
    //     ws.emit({to:to , key:"reload"});
    // });
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
Room.Video.person_ppt = function(id){
    Dom["Film"+id+"Ctrl"].end();
    Dom._unable.show();
    cc.ppt([cc.id, "Person", "Video"] , function(after , callback){
        cc.m[cc.old].velocity({ translateX: 1024}, { delay:10, duration: 400, display: "none" });
        cc.m["Person"].velocity({ translateX: 0}, { duration: 400, complete:function(){
                Dom._unable.hide();
            }});
    })
};

Room.Person = {};
Room.Person.come_before = function(next){
    cc.m[cc.id].show().velocity({ translateX: -1024}, { duration: 0});
    next();
};