var Port = 3001;

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: Port });

var IOW= {};
IOW.id  = {};
IOW.room = {};
IOW.run = {};
IOW.num = 1;

wss.on('connection', function(ws) {
    //console.log("connection wss", ws);
    Log("请求连入", IOW.num++);
    let iows = new IOServer(ws,wss);

    ws.on('message', function(req) {
        Log("接收信息", req);

        let json = {};
        try{
            json = JSON.parse(req);
        }catch (e){
            Log("接收错误消息", req);
        }

        switch (json.type){
            case "conn":
                iows.conn(json);
                break;
            case "emit":
                iows.emitRun(json);
                break;
            case "back":
                iows.backRun(json);
                break;
            case "log":
                break;
            case "run":
                iows.run(json);
                break;
        }

    });

});



class IOServer {
    constructor(ws, wss) {

        this.ws = ws;
        this.wss = wss;
        this.id = "";
        this.room = "";

    }

    connection(ws){
        Log('连接信息', ws);
        this.ws = ws;
    }

    conn(pa) {
        this.id = pa.id;
        //多id兼容
        if(this.id.indexOf("@")){
            this.id = this.id.replace("@" , new Date().getTime() );
        }

        this.room = pa.room?pa.room:"room";

        let val = "conn-ok";

        if(IOW.id[this.id]){
            this.clearById(this.id);
            val+= "-clear";
        }

        //注册id
        IOW.id[this.id] = {};
        IOW.id[this.id].ws = this.ws;
        IOW.id[this.id].room = this.room;

        //注册房间
        if(!IOW.room[this.room]) IOW.room[this.room] = [];
        IOW.room[this.room].push(this.id);

        Log("IO创建完成,ID:"+this.id, IOW);

        this.emit({type:"conn", key:"conn", val:val, id:this.id, room:this.room});
    }

    emitRun(pa) {
        Log("接收到emit类消息", pa);
        this.emit(pa);
    }

    backRun(pa) {

        if(!pa.to){
            Log("back类消息没有 - to", pa);
            return;
        }
        //
        Log("接收到back类消息", pa);
        this.emit(pa);
    }

    //核心发送
    emit(pa) {
        let str = JSON.stringify(pa);
        Log("emit发送",str);

        if(pa.to){
            if(IOW.id[pa.to] && IOW.id[pa.to].ws) IOW.id[pa.to].ws.send(str);
        }else{
            this.ws.send(str);
        }
    }

    run(pa) {
        if(IOW.run[pa.key]) {
            Log("run信息" , pa);
            IOW.run[pa.key](pa, this);
        }else Log("响应函数没有定义，run-key没有" , pa);
    }

    on(key, fn) {
        IOW.run[key] = fn;
    }

    clearById(id) {
        if(IOW.id[id].ws) IOW.id[id].ws.close();
        if(IOW.id[id].room) IOW.room[IOW.id[id].room].remove(id);
        delete IOW.id[id];
    }

}

//Log函数
function Log(t, o1, o2) {
    if(!o1) o1 = "";
    if(!o2) o2 = "";
    console.log("Log:"+t , o1, o2);
}


//数组操作
Array.prototype.indexOf = function(val) { for (var i = 0; i < this.length; i++) { if (this[i] == val) return i; } return -1; };
Array.prototype.remove = function(val) { var index = this.indexOf(val); if (index > -1) { this.splice(index, 1); } };