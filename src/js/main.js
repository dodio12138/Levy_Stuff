function time() {
    var date = new Date();
    hours = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    if (sec<10){
        document.getElementById('taskbar-time').innerHTML = hours + ':' + min + ':0' + sec;
    }else{
        document.getElementById('taskbar-time').innerHTML = hours + ':' + min + ':' + sec;
    }
    
}
setInterval("time()", 500);

var BunnyGame = document.getElementById('BunnyGame');

var stuff = document.getElementById('Stuff');

var FunPages = document.getElementById('FunPages');

var MeTerminal = document.getElementById('MeTerminal');

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

BunnyGame.addEventListener('dblclick', function (event) {
    //event.preventDefault();
    window.open(BunnyGame.href, '_blank'); // 在新窗口中打开链接
});
BunnyGame.onclick = function (event) {
    if (isMobile) {
        //window.open(BunnyGame.href, '_blank')
    }
    else {
        event.preventDefault(); // 阻止默认行为
        return false; // 取消事件传播
    }
};

FunPages.addEventListener('dblclick', function (event) {
    //event.preventDefault();
    window.open(FunPages.href, '_blank'); // 在新窗口中打开链接
});
FunPages.onclick = function (event) {
    if (isMobile) {
        //window.open(BunnyGame.href, '_blank')
    }
    else {
        event.preventDefault(); // 阻止默认行为
        return false; // 取消事件传播
    }
};

MeTerminal.addEventListener('dblclick', function (event) {
    //event.preventDefault();
    window.open(MeTerminal.href, '_blank'); // 在新窗口中打开链接
});
MeTerminal.onclick = function (event) {
    if (isMobile) {
        //window.open(MeTerminal.href, '_blank')
    }
    else {
        event.preventDefault(); // 阻止默认行为
        return false; // 取消事件传播
    }
};