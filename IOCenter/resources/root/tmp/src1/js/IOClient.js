var ws;

function ioHard(){
    // console.log(1);
    // ioBtn(".Hardware .box", "h0play", "h0stop");

}

function ioBtn(key, io1, io2){
    var ioBtn = $(key).find(".btn");
    ioBtn.tap(function(e){
        e.stopPropagation();

        if(ioBtn.hasClass("act")){
            ioBtn.removeClass("act");
            if(io2) ws.emit("CP3IPADCMD:"+io2);
        }else{
            ioBtn.addClass("act");
            if(io1) ws.emit("CP3IPADCMD:"+io1);
        }
    })
}

function ioPlay(key, key2, io1, io2){
    var ioBtn = $(key).find(".btn");
    var ioBtn2 = $(key2).find(".btn");
    ioBtn.tap(function(e){
        e.stopPropagation();

        if(ioBtn.hasClass("act")){
            ioBtn.removeClass("act");
            ioBtn2.removeClass("act");
            if(io2) ws.emit("CP3IPADCMD:"+io2);
        }else{
            ioBtn.addClass("act");
            if(io1) ws.emit("CP3IPADCMD:"+io1);
        }
    })
}

function ioStop(key, key2, io1, io2){
    var ioBtn = $(key).find(".btn");
    var ioBtn2 = $(key2).find(".btn");
    ioBtn.tap(function(e){
        e.stopPropagation();

        if(!ioBtn2.hasClass("act")) return;

        if(ioBtn.hasClass("act")){
            ioBtn.removeClass("act");
            if(io2) ws.emit("CP3IPADCMD:"+io2);
        }else{
            ioBtn.addClass("act");
            if(io1) ws.emit("CP3IPADCMD:"+io1);
        }
    })
}

// IOClient
function IOClient(url, pa){
    if(!pa) pa = {};
    this.ws = "";//websocket主类
    this.redo = "";//重复连接句柄
    this.redoTime = 0;//重复连接次数
    this.url = url;
    this.redoTimeMax = pa.max?pa.max:3;
    if(pa.redo===0) this.ifRedo =0;
    else this.ifRedo = 1;
    this.id = "";
    this.fnIfRun = 0;//注册和运行函数，仅1次

    this.msg_emit = {};//注册保存emit的on
    this.msg_next = {};//注册保存link回调的函数
    this.err = 0;
    this.readWs = "";
}
IOClient.prototype.conn = function(){
    try{
        this.conn_connect();
    }catch (e){
        Log("生成WebSocket错误，try获得",e);
    }
};
IOClient.prototype.conn_connect = function(){

    this.ws = new WebSocket(this.url);

    this.ws.onopen = function(e){
        this.mk = 1;
        Log("硬件socket连接成功", e);
        ioHard();
    }.bind(this);

    // var wsHandNum = 0;
    // var wsHand = setInterval(function(){
    //     if(_this.ws.readyState==1) {
    //         clearInterval(wsHand);
    //         wsHandNum = 0;
    //         fn();
    //     }else{
    //         wsHandNum++;
    //         if(wsHandNum>40 || _this.ws.readyState>1){
    //             clearInterval(wsHand);
    //             wsHandNum = 0;
    //             Log("websocket 无法连接到"+_this.url);
    //             _this.err = 1;
    //             fn();
    //
    //             _this.readWs = setInterval(function(){
    //                 var TempRead = new WebSocket(_this.url);
    //
    //                 setTimeout(function(){
    //                     if(TempRead.readyState==1) {
    //                         this.conn_connect(pa, fn);
    //                         clearInterval(_this.readWs);
    //                     }
    //
    //                 }, 3000);
    //
    //             },8000);
    //
    //         }
    //     }
    //
    // }, 200);

    // this.ws.onclose = function(e){
    //
    //     if(!this.err){
    //
    //         this.redo = setTimeout(function(){
    //
    //             this.redoTime++;
    //             if(this.err || this.redoTime > this.redoTimeMax){
    //                 clearTimeout(this.redo);
    //                 Log("无法链接到ws服务器");
    //                 return;
    //             }
    //
    //             Log("参数重连", this.redoTime);
    //
    //             this.conn_connect(pa, fn);
    //         }.bind(this) , 3000);
    //
    //     }
    // }.bind(this);



    // this.ws.onmessage = function(req){
    //     var json;
    //     try{
    //         json = JSON.parse(req.data);
    //     }catch (err){
    //         Log("onmessage接收错误-格式错误", req.data, err);
    //         return;
    //     }
    //
    //     if(!json.type) {
    //         Log("onmessage接收提醒-type没有，以msg格式处理", json);
    //         return;
    //     }
    //
    //     //Log("onmessage", json);
    //
    //     switch (json.type){
    //         case "conn":
    //             if(json.val=="conn-ok-clear") Log("注册成功！clear提示", json);
    //             else Log("注册成功！", json);
    //             this.id = json.id;
    //
    //             if(this.fnIfRun) return;
    //             this.fnIfRun = 1;
    //             fn();
    //             break;
    //
    //         case "emit":
    //
    //             if(this.msg_emit[json.key]) {
    //                 Log("msg信息" , json);
    //                 // var next = this.next(json.key, json.from);
    //                 this.msg_emit[json.key](json);
    //             }else Log("on没有定义，msg-key没有" , json);
    //             break;
    //
    //         case "next":
    //
    //             if(this.msg_next[json.key]) {
    //                 Log("next信息" , json);
    //                 this.msg_next[json.key](json);
    //             }else Log("响应函数没有定义，next-key没有" , json);
    //             break;
    //
    //     }
    //
    // }.bind(this);

};

IOClient.prototype.emit = function(msg){
    try{
        Log("emit发送", msg);
        this.ws.send(msg);
    }catch (e){
        this.conn_connect();
        Log("emit发送错误！", msg, e);
    }
};

//基础发送
// IOClient.prototype.next = function(key, to){
//
//     try {
//         if (!key) {
//             Log("link回执next没有key");
//             return;
//         }
//         var json = {};
//         json.type = "next";
//         json.key = key;
//         json.from = this.id;
//         json.to = to;
//
//         var emit = JSON.stringify(json);
//         Log("next发送", json);
//         this.ws.send(emit);
//
//     }catch (e){
//         Log("next发送错误！", msg, e);
//     }
//
// };

// IOClient.prototype.on = function(key, fn) {
//     this.msg_emit[key] = fn;
// };


function Log(t, o1, o2) {
    if(!o1) o1 = "";
    if(!o2) o2 = "";
    console.log("Log-"+t , o1, o2);
}