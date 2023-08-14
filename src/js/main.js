var BunnyGame = document.getElementById('BunnyGame');

var stuff = document.getElementById('Stuff');

var FunPages = document.getElementById('FunPages');

var Meterminal = document.getElementById('Meterminal');

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

BunnyGame.addEventListener('dblclick', function(event) {
    //event.preventDefault();
    window.open(BunnyGame.href, '_blank'); // 在新窗口中打开链接
  });
BunnyGame.onclick = function(event) {
    if(isMobile)
    {
        //window.open(BunnyGame.href, '_blank')
    }
    else
    {
        event.preventDefault(); // 阻止默认行为
        return false; // 取消事件传播
    }
};

FunPages.addEventListener('dblclick', function(event) {
    //event.preventDefault();
    window.open(FunPages.href, '_blank'); // 在新窗口中打开链接
  });
  FunPages.onclick = function(event) {
    if(isMobile)
    {
        //window.open(BunnyGame.href, '_blank')
    }
    else
    {
        event.preventDefault(); // 阻止默认行为
        return false; // 取消事件传播
    }
};

stuff.addEventListener('dblclick', function(event) {
    //event.preventDefault();
    window.open(stuff.href, '_blank'); // 在新窗口中打开链接
  });
  stuff.onclick = function(event) {
    if(isMobile)
    {
        //window.open(stuff.href, '_blank')
    }
    else
    {
        event.preventDefault(); // 阻止默认行为
        return false; // 取消事件传播
    }
};

Meterminal.addEventListener('dblclick', function(event) {
    //event.preventDefault();
    window.open(Meterminal.href, '_blank'); // 在新窗口中打开链接
  });
  Meterminal.onclick = function(event) {
    if(isMobile)
    {
        //window.open(Meterminal.href, '_blank')
    }
    else
    {
        event.preventDefault(); // 阻止默认行为
        return false; // 取消事件传播
    }
};