ViewSize();
//控制器

Views.TPHM = function(){
    // var ul,Box,rs;
    //
    // var tarr = [];
    // Dom.TPSPV = {};
    //
    // rs = Base.screen.subject;
    // ul="";
    // Box = $(".TPHM-container .swiper-wrapper");
    //
    // for(var i in rs){
    //     if(i%5==0) {
    //         ul = $('<div class="swiper-slide"><ul></ul></div>');
    //         Box.append(ul);
    //     }
    //     var li , img , nm, css;
    //     if(rs[i].type=="k0") {
    //         css = ".TPHM-index";
    //         img = "src/img/icon0.png";
    //         nm = "临展管理";
    //     }else{
    //         css = ".TPHM-video";
    //         img = Url.server+'/uploads/screen/'+rs[i].pic;
    //         nm = rs[i].tcn;
    //     }
    //     li = '<img class="'+css+'" src="'+img+'" data-id="'+i+'">';
    //     li+= '<div class="txt"><p class="txt_cn">'+nm+'</p></div>';
    //     ul.find("ul").append('<li data-id="'+i+'">'+li+'</li>');
    //
    //     if(i!=0){
    //         var section = $('<section class="cc TPHM_Video" id="TPHM_Video'+i+'"></section>');
    //
    //         var view  = _.template($("#TPHM_Video").html());
    //         var html = view({ten:rs[i].ten , tcn:rs[i].tcn , src:Url.server+'/uploads/screen/'+rs[i].pic , info:rs[i].conc});
    //         section.html(html);
    //
    //         tarr[i] = i;
    //         $("#CC").append(section);
    //     }
    // }
    //
    // setTimeout(function(){
    //     Dom.TPHMSwiper = new Swiper('.TPHM-container', {
    //         pagination: '.TPHM-pagination',
    //         paginationClickable: true
    //     });
    //
    //     for(var i in tarr){
    //         Dom.TPSPV["v"+i] = new VideoCtrl({id:"#TPHM_Video"+i+" .TPHMCtrl" , io:"TPHM", vid:i, group:"V"});
    //         Dom.TPSPV["v"+i].ini({vol:10});
    //     }
    //
    // } , 500);


};

Views.History = function(){

    // var rs = Base.history.page;
    //
    // Dom.History_li = [];
    // for(var i in rs){
    //     Dom.History_li.push({time:rs[i].time, tp:"p"});
    //     if(rs[i].photo && rs[i].photo.length){
    //         for(var j in rs[i].photo){
    //             Dom.History_li.push({time:rs[i].time, title:rs[i].photo[j].title ,tp:"f"});
    //         }
    //     }
    // }
    //
    // var ul;
    // var i=0;
    // var Box = $(".History-container .swiper-wrapper");
    // for(var id in Dom.History_li){
    //     if(Dom.History_li[id].tp=="f"){
    //         if(i%10==0) {
    //             ul = $('<div class="swiper-slide"><ul></ul></div>');
    //             Box.append(ul);
    //         }
    //
    //         ul.find("ul").append('<li data-id="'+id+'"><span>［'+Dom.History_li[id].time+'］ ——  '+Dom.History_li[id].title+'</span></li>');
    //
    //         i++;
    //     }
    // }
    //
    // setTimeout(function(){
    //     Dom.HistorySwiper = new Swiper('.History-container', {
    //         pagination: '.History-pagination',
    //         paginationClickable: true
    //     });
    // } , 500);


};

Views.Film1 = function(){
    Dom.Film1Ctrl = new VideoCtrl({id:"#Film1Ctrl" , io:"Film1"});
    Dom.Film1Ctrl.ini({vol:30});
};
Views.Film2 = function(){
    Dom.Film2Ctrl = new VideoCtrl({id:"#Film2Ctrl" , io:"Film2"});
    Dom.Film2Ctrl.ini({vol:30});
};
Views.Film3 = function(){
    Dom.Film3Ctrl = new VideoCtrl({id:"#Film3Ctrl" , io:"Film3"});
    Dom.Film3Ctrl.ini({vol:30});
};
Views.Film4 = function(){
    Dom.Film4Ctrl = new VideoCtrl({id:"#Film4Ctrl" , io:"Film4"});
    Dom.Film4Ctrl.ini({vol:30});
};
Views.Film5 = function(){
    Dom.Film5Ctrl = new VideoCtrl({id:"#Film5Ctrl" , io:"Film5"});
    Dom.Film5Ctrl.ini({vol:30});
};
Views.Film6 = function(){
    Dom.Film6Ctrl = new VideoCtrl({id:"#Film6Ctrl" , io:"Film6"});
    Dom.Film6Ctrl.ini({vol:30});
};
Views.Film7 = function(){
    Dom.Film7Ctrl = new VideoCtrl({id:"#Film7Ctrl" , io:"Film7"});
    Dom.Film7Ctrl.ini({vol:30});
};
Views.Film8 = function(){
    Dom.Film8Ctrl = new VideoCtrl({id:"#Film8Ctrl" , io:"Film8"});
    Dom.Film8Ctrl.ini({vol:30});
};
// Views.Film2 = function(){
    // Dom.Film2Ctrl = new VideoCtrl({id:"#Film2Ctrl" , io:"Film2"});
    // Dom.Film2Ctrl.ini({vol:10});
    // if(Base.film2){
    //     $("#Film2 .MainTP .icon img").attr("src" , Url.server+"/uploads/film2/"+Base.film2.icon);
    //     $("#Film2 .MainTP .container").html(Base.film2.read);
    // }
// };
//Views.Film3 = function(){
    // Dom.Film3Ctrl = new VideoCtrl({id:"#Film3Ctrl" , io:"Film3"});
    // Dom.Film3Ctrl.ini({vol:10});
    // if(Base.film3){
    //     $("#Film3 .MainTP .icon img").attr("src" , Url.server+"/uploads/film3/"+Base.film3.icon);
    //     $("#Film3 .MainTP .container").html(Base.film3.read);
    // }
//};

Views.TPSP = function(){

    // var ul,Box,rs;
    //
    // rs = Base.tpsp.p1;
    // ul="";
    // Box = $(".P1-container .swiper-wrapper");
    // for(var i in rs.img){
    //     if(i%5==0) {
    //         ul = $('<div class="swiper-slide"><ul></ul></div>');
    //         Box.append(ul);
    //     }
    //     ul.find("ul").append('<li data-p="1" data-id="'+i+'"><span>［'+rs.tp[rs.img[i].tp].nm+'］'+rs.img[i].title+'</span></li>');
    // }
    //
    // rs = Base.tpsp.p2;
    // ul="";
    // Box = $(".P2-container .swiper-wrapper");
    // for(var i in rs.img){
    //     if(i%5==0) {
    //         ul = $('<div class="swiper-slide"><ul></ul></div>');
    //         Box.append(ul);
    //     }
    //     ul.find("ul").append('<li data-p="2" data-id="'+i+'"><span>［'+rs.tp[rs.img[i].tp].nm+'］'+rs.img[i].title+'</span></li>');
    // }
    //
    // rs = Base.tpsp.p3;
    // ul="";
    // Box = $(".P3-container .swiper-wrapper");
    // for(var i in rs.img){
    //     if(i%5==0) {
    //         ul = $('<div class="swiper-slide"><ul></ul></div>');
    //         Box.append(ul);
    //     }
    //     ul.find("ul").append('<li data-p="3" data-id="'+i+'"><span>［'+rs.tp[rs.img[i].tp].nm+'］'+rs.img[i].title+'</span></li>');
    // }
    //
    // rs = Base.tpsp.p4;
    // ul="";
    // Box = $(".P4-container .swiper-wrapper");
    // for(var i in rs.img){
    //     if(i%5==0) {
    //         ul = $('<div class="swiper-slide"><ul></ul></div>');
    //         Box.append(ul);
    //     }
    //     ul.find("ul").append('<li data-p="4" data-id="'+i+'"><span>［'+rs.tp[rs.img[i].tp].nm+'］'+rs.img[i].title+'</span></li>');
    // }
    //
    // rs = Base.tpsp.p5;
    // ul="";
    // Box = $(".P5-container .swiper-wrapper");
    // for(var i in rs.img){
    //     if(i%5==0) {
    //         ul = $('<div class="swiper-slide"><ul></ul></div>');
    //         Box.append(ul);
    //     }
    //     ul.find("ul").append('<li data-p="5" data-id="'+i+'"><span>［'+rs.tp[rs.img[i].tp].nm+'］'+rs.img[i].title+'</span></li>');
    // }
    //
    // setTimeout(function(){
    //     Dom.P1Swiper = new Swiper('.P1-container', {
    //         pagination: '.P1-pagination',
    //         paginationClickable: true
    //     });
    //
    //     Dom.P2Swiper = new Swiper('.P2-container', {
    //         pagination: '.P2-pagination',
    //         paginationClickable: true
    //     });
    //
    //     Dom.P3Swiper = new Swiper('.P3-container', {
    //         pagination: '.P3-pagination',
    //         paginationClickable: true
    //     });
    //
    //     Dom.P4Swiper = new Swiper('.P4-container', {
    //         pagination: '.P4-pagination',
    //         paginationClickable: true
    //     });
    //
    //     Dom.P5Swiper = new Swiper('.P5-container', {
    //         pagination: '.P5-pagination',
    //         paginationClickable: true
    //     });
    //
    //     setTimeout(function(){
    //         $(".P1-container").hide();
    //         $(".P2-container").hide();
    //         $(".P3-container").hide();
    //         $(".P4-container").hide();
    //         $(".P5-container").hide();
    //     } , 200);
    //
    //
    // } , 500);

};



Views.index = function(){
	// Data.base = Base.subject;
	// alltime = 800;
	// thistime = 0;
	// proval = 0;
	// VolWidth = 83;
	// Vol = 50;
	// tvideo = "";
	// cVol = function (){
	// 	var tvol = $(".Controllers .button .voltext");
	// 	var wvol = $(".Controllers .button .volumes");
	// 	tvol.html(Vol+'%');
	// 	wvol.css("width",VolWidth);
	// }
	//
	// cVol_film = function (){
	// 	var tvol = $("#controlFilm .button .voltext");
	// 	var wvol = $("#controlFilm .button .volumes");
	// 	tvol.html(Vol+'%');
	// 	wvol.css("width",VolWidth);
	// }
	//
	// cVol_film2 = function (){
	// 	var tvol = $("#controlFilm2 .button .voltext");
	// 	var wvol = $("#controlFilm2 .button .volumes");
	// 	tvol.html(Vol+'%');
	// 	wvol.css("width",VolWidth);
	// }
	//
	// cVol_film3 = function (){
	// 	var tvol = $("#controlFilm3 .button .voltext");
	// 	var wvol = $("#controlFilm3 .button .volumes");
	// 	tvol.html(Vol+'%');
	// 	wvol.css("width",VolWidth);
	// }
	//
	// cVol();
	// cVol_film();
	// cVol_film2();
	// cVol_film3();
	// funtimes();
	// funtimes_film();
	// funtimes_film2();
	// funtimes_film3();
};

Views.ARC = function(){

//	var View_MapBg   = _.template($("#View_MapBg").html());
//var Html_MapBg = View_MapBg({map_cn:"xx", title:"zz"});
//"<sect id=''>"+Html_MapBg+
//$("#CC").append(Html_MapBg);

	// var Temp = $(".ARC_img").html();
	// var View_Temp = _.template(Temp);
	//
	// function ARC_img(i){
	// 	var downimg = "";
	// 	var downtext = "";
	// 	if(i>3){
	// 		downtext = "downtext";
	// 		downimg = "downimg";
	// 	}
	// 	var json = {
	// 		tcn:Data.base[i].tcn,
	// 		ten:Data.base[i].ten,
	// 		id:i+1,
	// 		downtext:downtext,
	// 		downimg:downimg,
	// 		pic:Data.base[i].pic
	// 	}
	// 	var Html_Temp = View_Temp(json);
	//
	// 	$("#ARC .main").append(Html_Temp);
	// }
    //
	//
	// for(var i = 0;i<Data.base.length;i++){
	// 	ARC_img(i);
	// }

}

Views.Controller = function(){

//	var View_MapBg   = _.template($("#View_MapBg").html());
//var Html_MapBg = View_MapBg({map_cn:"xx", title:"zz"});
//"<sect id=''>"+Html_MapBg+
//$("#CC").append(Html_MapBg);

	// var Temp = $(".Controller").html();
	// var View_Temp = _.template(Temp);
	//
	// function Controller(i){
	// 	var json = {
	// 		tcn:Data.base[i].tcn,
	// 		ten:Data.base[i].ten,
	// 		type:Data.base[i].type,
	// 		pic:Data.base[i].pic,
	// 		id:i+1,
	// 		cont:Data.base[i].cont,
	// 		conc:Data.base[i].conc,
	// 		pic:Data.base[i].pic
	// 	}
	// 	var Html_Temp = View_Temp(json);
	//
	// 	$("#CC").append(Html_Temp);
	// }
    //
	//
	// for(var i = 0;i<Data.base.length;i++){
	// 	Controller(i);
	// }

}