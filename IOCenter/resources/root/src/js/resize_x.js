var SID = $("#sid").html();
if(!SID) alert("sid错误！");
var rez = {
    w : 1280,
    h : 720,
    ww : $(window).width(),
    wh : $(window).height(),
    //url : "http://localhost:813/index_x.html"
    url : "http://demo.maitianer.com/h5/akx/index.php?id="+SID
};
var Server = "http://demo.maitianer.com/h5/akx/";
var ReSizeCls = false;

var app = $("#app");
var resize = $("#_resize");
var wr = rez.ww/rez.wh;


resize.css({width:rez.w , height:rez.h });
app.css({width:rez.w , height:rez.h });

if(wr<1){
    resize.hide();
    app.show();
    Loader_app_all(rez.h , rez.w, rez.ww, rez.wh);
}else{
    app.hide();
    resize.show();
    Loader_resize_all(rez.w, rez.h, rez.ww, rez.wh);
}


var supportOrientation = (typeof window.orientation === 'number' && typeof window.onorientationchange === 'object');
var init = function(){
    var htmlNode = document.body.parentNode,
        orientation;
    var updateOrientation = function(){
        if(ReSizeCls) return;
        if(supportOrientation){
            orientation = window.orientation;
            switch(orientation){
                case 90:
                case -90:
                    orientation = 'landscape';
                    break;
                default:
                    orientation = 'portrait';
                    break;
            }
        }else{
            orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
        }
        htmlNode.setAttribute('class',orientation);

        if( (wr<1 && orientation == 'landscape') || (wr>1 && orientation == 'portrait') ) {
            window.location.href = rez.url + "?id="+10000*Math.random();
        }
    };
    if(supportOrientation){
        window.addEventListener('orientationchange',updateOrientation,false);
    }else{
        //监听resize事件
        window.addEventListener('resize',updateOrientation,false);
    }
    updateOrientation();
};
window.addEventListener('DOMContentLoaded',init,false);

function Loader_resize_all(w , h, ww, wh){
    var wr = ww/wh;
    var nr = w/h;
    var nw,nh;

    if(wr>nr){
        nh = wh;
        nw = nh*nr;
    }else{
        nw = ww;
        nh = nw/nr;
    }
    var ss = nw/w;
    var sw = (ww-nw)/2;
    var sh = (wh-nh)/2;

    var origin = "top left";
    resize.css("transformOrigin",origin);

    var translate = "scale("+ss+")";
    resize.css("transform",translate);

    resize.css({"margin-top":sh+"px" , "margin-left":sw+"px"});
}

function Loader_app_all(w , h, ww, wh){
    var wr = ww/wh;
    var nr = w/h;
    var nw,nh;

    if(wr>nr){
        nh = wh;
        nw = nh*nr;
    }else{
        nw = ww;
        nh = nw/nr;
    }
    var ss = nw/w;
    var sw = (ww-nw)/2;
    var sh = (wh-nh)/2;

    var origin = "top left";
    app.css("transformOrigin",origin);

    var translate = "scale("+ss+") rotate(90deg)";
    app.css("transform",translate);

    app.css({"margin-top":sh+"px" , "margin-left":sw+(w*ss)+"px"});

}