var ini = {};
ini.loader = function(){

    ws = new ws_client("ws://localhost:3001", {id:"Guide"});
    ws.connect( function(){

        libs.create();
        libs.setTicker(25);
        libs.iniDom();

        Dom.Film1Ctrl = new VideoCtrl({id:"#VideoCtrl1" , to:"Video1"});
        Dom.Film1Ctrl.ini({vol:30});

        Dom.Film2Ctrl = new VideoCtrl({id:"#VideoCtrl2" , to:"Person", vs:"_1"});
        Dom.Film2Ctrl.ini({vol:30});

        Dom.Film3Ctrl = new VideoCtrl({id:"#VideoCtrl3" , to:"Person", vs:"_2"});
        Dom.Film3Ctrl.ini({vol:30});

        Dom.Film4Ctrl = new VideoCtrl({id:"#VideoCtrl4" , to:"Person", vs:"_3"});
        Dom.Film4Ctrl.ini({vol:30});

        Dom.Film5Ctrl = new VideoCtrl({id:"#VideoCtrl5" , to:"Person", vs:"_4"});
        Dom.Film5Ctrl.ini({vol:30});

        Dom.Film6Ctrl = new VideoCtrl({id:"#VideoCtrl6" , to:"Person", vs:"_5"});
        Dom.Film6Ctrl.ini({vol:30});

        Dom.Film7Ctrl = new VideoCtrl({id:"#VideoCtrl7" , to:"Person", vs:"_6"});
        Dom.Film7Ctrl.ini({vol:30});

        setTimeout(Room.Loader.ppt, 300);

    } );



};