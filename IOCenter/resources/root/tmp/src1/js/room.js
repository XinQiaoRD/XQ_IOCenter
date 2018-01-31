///////////////////////////////////// Room ///////////////////////////////////////////

////房间规范
// (Room)go房间离开，come房间进来，ppt同步离开和进来
// (Room)hide暂时隐藏，会关闭run程序（stop程序）; show开始显示，会运行run程序
// (Rooms)come_before:进来前，coming：进来时，come_after:进来后；go_before：离开前，going：离开时,go_after：离开后;
// (Rooms)ppt同步后的循序 1.come_before , 2.go_before , 3.going , 4.coming , 5.come_after , 6.go_after
// (Rooms)run运行的程序，stop停止的程序
// (Rooms)act点击等事件，io事件


///////////////////////////////////// rooms ///////////////////////////////////////////

//天蓬集团
Rooms.Index = {};
Rooms.Index.dom = function(){
    Dom.Index = $("#Index .swiper-slide li");

    new Swiper('.Index-container', {
        pagination: '.Index-pagination',
        paginationClickable: true
    });

};
Rooms.Index.act = function(){

    Dom.Index.eq(0).click(function(){
        Room.ppt({id:[Room.id , "A1"] , mov:["mv-move-left-out" , "mv-move-left-in"]});
    });
    Dom.Index.eq(1).click(function(){
        Room.ppt({id:[Room.id , "A2"] , mov:["mv-move-left-out" , "mv-move-left-in"]});
    });
    Dom.Index.eq(2).click(function(){
        Room.ppt({id:[Room.id , "A3"] , mov:["mv-move-left-out" , "mv-move-left-in"]});
    });
    Dom.Index.eq(3).click(function(){
        Room.ppt({id:[Room.id , "A4"] , mov:["mv-move-left-out" , "mv-move-left-in"]});
    });
    Dom.Index.eq(4).click(function(){
        Room.ppt({id:[Room.id , "A5"] , mov:["mv-move-left-out" , "mv-move-left-in"]});
    });
    Dom.Index.eq(5).click(function(){
        Room.ppt({id:[Room.id , "A6"] , mov:["mv-move-left-out" , "mv-move-left-in"]});
    });
    Dom.Index.eq(6).click(function(){
        Room.ppt({id:[Room.id , "A7"] , mov:["mv-move-left-out" , "mv-move-left-in"]});
    });
    Dom.Index.eq(7).click(function(){
        Room.ppt({id:[Room.id , "A8"] , mov:["mv-move-left-out" , "mv-move-left-in"]});
    });

    var ioBtn1 = $(".Hardware .box1").find(".btn");
    ioBtn1.tap(function(e){
        e.stopPropagation();

        if(ioBtn1.hasClass("act")){
            ioBtn1.removeClass("act");
            ws.emit('{"type":"hand", "to":"door", "val":"02"}');
            //IO.emit({to:"door1" , key:"close"});
        }else{
            ioBtn1.addClass("act");
            ws.emit('{"type":"hand", "to":"door", "val":"01"}');
            //IO.emit({to:"door1" , key:"open"});
        }
    });

    var ioBtn2 = $(".Hardware .box2").find(".btn");
    ioBtn2.tap(function(e){
        e.stopPropagation();

        if(ioBtn2.hasClass("act")){
            ioBtn2.removeClass("act");
            ws.emit('{"type":"hand", "to":"door", "val":"04"}');
            //IO.emit({to:"door2" , key:"close"});
        }else{
            ioBtn2.addClass("act");
            ws.emit('{"type":"hand", "to":"door", "val":"03"}');
            //IO.emit({to:"door2" , key:"open"});
        }
    })

    var AllPlayLoop = $("#AllPlayLoop").find(".btn");
    AllPlayLoop.tap(function(e){
        e.stopPropagation();

        if(AllPlayLoop.hasClass("act")){
            AllPlayLoop.removeClass("act");
            IO.emit({to:"Film1" , key:"MediaEnd"});
            IO.emit({to:"Film2" , key:"MediaEnd"});
            IO.emit({to:"Film3" , key:"MediaEnd"});
            IO.emit({to:"Film4" , key:"MediaEnd"});
            IO.emit({to:"Film5" , key:"MediaEnd"});
            IO.emit({to:"Film6" , key:"MediaEnd"});
            IO.emit({to:"Film7" , key:"MediaEnd"});
            IO.emit({to:"Film8" , key:"MediaEnd"});
            //IO.emit({to:"door2" , key:"close"});
        }else{
            AllPlayLoop.addClass("act");
            IO.emit({to:"Film1" , key:"MediaPlayLoop"});
            IO.emit({to:"Film2" , key:"MediaPlayLoop"});
            IO.emit({to:"Film3" , key:"MediaPlayLoop"});
            IO.emit({to:"Film4" , key:"MediaPlayLoop"});
            IO.emit({to:"Film5" , key:"MediaPlayLoop"});
            IO.emit({to:"Film6" , key:"MediaPlayLoop"});
            IO.emit({to:"Film7" , key:"MediaPlayLoop"});
            IO.emit({to:"Film8" , key:"MediaPlayLoop"});
            //IO.emit({to:"door2" , key:"open"});
        }
    })

};


Rooms.A1 = {};
Rooms.A1.dom = function(){
    Dom.A1 = {};
    Dom.A1.returns = $("#A1 .return");
    Dom.A1.title = $("#A1 .title");
};
Rooms.A1.act = function(){
    Dom.A1.returns.tap(function(e){
        e.stopPropagation();
        Action.Index();
    });
    Dom.A1.title.on("taphold",function(e){
        e.stopPropagation();
        IO.emit({to:"Film1" , key:"reload"});
    });
};

Rooms.A2 = {};
Rooms.A2.dom = function(){
    Dom.A2 = {};
    Dom.A2.returns = $("#A2 .return");
    Dom.A2.title = $("#A2 .title");
};
Rooms.A2.act = function(){
    Dom.A2.returns.tap(function(e){
        e.stopPropagation();
        Action.Index();
    });
    Dom.A2.title.on("taphold",function(e){
        e.stopPropagation();
        IO.emit({to:"Film2" , key:"reload"});
    });
};

Rooms.A3 = {};
Rooms.A3.dom = function(){
    Dom.A3 = {};
    Dom.A3.returns = $("#A3 .return");
    Dom.A3.title = $("#A3 .title");
};
Rooms.A3.act = function(){
    Dom.A3.returns.tap(function(e){
        e.stopPropagation();
        Action.Index();
    });
    Dom.A3.title.on("taphold",function(e){
        e.stopPropagation();
        IO.emit({to:"Film3" , key:"reload"});
    });
};

Rooms.A4 = {};
Rooms.A4.dom = function(){
    Dom.A4 = {};
    Dom.A4.returns = $("#A4 .return");
    Dom.A4.title = $("#A4 .title");
};
Rooms.A4.act = function(){
    Dom.A4.returns.tap(function(e){
        e.stopPropagation();
        Action.Index();
    });
    Dom.A4.title.on("taphold",function(e){
        e.stopPropagation();
        IO.emit({to:"Film4" , key:"reload"});
    });
};

Rooms.A5 = {};
Rooms.A5.dom = function(){
    Dom.A5 = {};
    Dom.A5.returns = $("#A5 .return");
    Dom.A5.title = $("#A5 .title");
};
Rooms.A5.act = function(){
    Dom.A5.returns.tap(function(e){
        e.stopPropagation();
        Action.Index();
    });
    Dom.A5.title.on("taphold",function(e){
        e.stopPropagation();
        IO.emit({to:"Film5" , key:"reload"});
    });
};

Rooms.A6 = {};
Rooms.A6.dom = function(){
    Dom.A6 = {};
    Dom.A6.returns = $("#A6 .return");
    Dom.A6.title = $("#A6 .title");
};
Rooms.A6.act = function(){
    Dom.A6.returns.tap(function(e){
        e.stopPropagation();
        Action.Index();
    });
    Dom.A6.title.on("taphold",function(e){
        e.stopPropagation();
        IO.emit({to:"Film6" , key:"reload"});
    });
};

Rooms.A7 = {};
Rooms.A7.dom = function(){
    Dom.A7 = {};
    Dom.A7.returns = $("#A7 .return");
    Dom.A7.title = $("#A7 .title");
};
Rooms.A7.act = function(){
    Dom.A7.returns.tap(function(e){
        e.stopPropagation();
        Action.Index();
    });
    Dom.A7.title.on("taphold",function(e){
        e.stopPropagation();
        IO.emit({to:"Film7" , key:"reload"});
    });
};

Rooms.A8 = {};
Rooms.A8.dom = function(){
    Dom.A8 = {};
    Dom.A8.returns = $("#A8 .return");
    Dom.A8.title = $("#A8 .title");
};
Rooms.A8.act = function(){
    Dom.A8.returns.tap(function(e){
        e.stopPropagation();
        Action.Index();
    });
    Dom.A8.title.on("taphold",function(e){
        e.stopPropagation();
        IO.emit({to:"Film8" , key:"reload"});
    });
};

