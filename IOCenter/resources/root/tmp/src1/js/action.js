///////////////////////////////////// Action ///////////////////////////////////////////
Action.run = function(page, wait, fn){
    $("#Loader").css("visibility", "visible");
    setTimeout(function(){
        Room.ppt({id:["Loader" , page] , mov:["mv-move-up-out" , "mv-fade-in"]}, function(){
            if(fn) fn();
        });
    }, wait);
};

Action.Index = function(){
	Room.ppt({id:[Room.id  , "Index"] , mov:["mv-move-right-out" , "mv-move-right-in"]});
};
