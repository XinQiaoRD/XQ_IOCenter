var ini = {};
ini.loader = function(){

    ws = new ws_client("ws://localhost:3001", {id:"Guide"});
    ws.connect( function(){

        libs.create();
        libs.setTicker(25);
        libs.iniDom();

        Dom.Film1Ctrl = new VideoCtrl({id:"#VideoCtrl1" , to:"Video1"});
        Dom.Film1Ctrl.ini({vol:30});

        Dom.Film2Ctrl = new VideoCtrl({id:"#VideoCtrl2" , to:"Video2"});
        Dom.Film2Ctrl.ini({vol:30});

        Dom.Film3Ctrl = new VideoCtrl({id:"#VideoCtrl3" , to:"Video3"});
        Dom.Film3Ctrl.ini({vol:30});

        setTimeout(Room.Loader.ppt, 300);

    } );



};