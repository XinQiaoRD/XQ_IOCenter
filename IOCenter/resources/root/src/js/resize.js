var rez = {
    tt :0,//42
    w : 1024,
    h : 768,
    ww : $(window).width(),
    wh : $(window).height()
};

var app = $("#app");
var app_main = $(".cc>.main");
var app_bg = $(".cc>.bg");
var app_bg_center = $(".cc .bg.center");

setTimeout(function(){
    Loader_app(rez.w , rez.h, rez.ww, rez.wh);
},300);


function Loader_app(w , h, ww, wh){

    //app调整
    app.css({width:ww , height:wh });
    $(".cc").css({width:ww , height:wh });

    //app_main调整
    var wr = ww/wh;
    var nr = w/h;
    var nw,nh;

    if(wr>nr){
        nh = wh;
        nw = nh*nr
    }else{
        nw = ww;
        nh = nw/nr
    }
    var ss = nw/w;
    var sw = (ww-nw)/2;
    var sh = (wh-nh)/2;

    app_main.css({width:w , height:h });
    var origin = "top left";
    app_main.css("transformOrigin",origin);

    var translate = "scale("+ss+")";
    app_main.css("transform",translate);

    app_main.css({"margin-top":sh+"px" , "margin-left":sw+"px"});

    //app_bg调整
    app_bg.css({width:ww , height:wh });
    app_bg_center.css({"top":(wh-h)/2+"px"});


}


