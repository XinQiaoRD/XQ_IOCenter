Url.fs  = "";//fs的时候的相对地址
Url.server = "http://10.121.238.143:806";
Url.serverJson = Url.server+"/hf/ajax/guide.php";//服务器地址
Url.upload = Url.server+"/uploads/hf/";
Url.debug = 0;

var Progress = function(num){
    Log("$$$$【Server.loader】目前完成："+num+"%");
    //if(num==100) num=99;
    //Dom._loader.html("正在更新资料中，已完成："+num+"%");
};