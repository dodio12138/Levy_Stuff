function closewindow(button) {
    var window = button.parentNode.parentNode;
    window.remove();
}

function minwindow(button) {
    var window = button.parentNode.parentNode;
    if(window.getElementsByClassName('wincontent')[0].style.display != 'none'){
        window.getElementsByClassName('wincontent')[0].style.display = 'none';
    }else{
        window.getElementsByClassName('wincontent')[0].style.display = 'flex';
    }
}


//TODO
function maxwindow(button){
    // var window = button.parentNode.parentNode;
    // if(isMax){
    //     window.style.width = '400px';
    //     window.style.height = ''
    // }
}

function createWindow(id,width, height,title,icon) {
    const windowDiv = document.createElement('window');
    windowDiv.id = id;
    const windowTitlebar = document.createElement('windowTitlebar');
    const TitlebarImg = document.createElement('img');
    const Title = document.createElement('div');
    Title.className = 'windows-title';
    const winmin = document.createElement('button');
    winmin.className = 'winbarbutton';
    const winmax = document.createElement('button');
    winmax.className = 'winbarbutton';
    const winclose = document.createElement('button');
    winclose.className = 'winbarbutton';

    const minicon = document.createElement('span');
    minicon.className = 'winbaricon';
    const maxicon = document.createElement('span');
    maxicon.className = 'winbaricon';
    const closeicon = document.createElement('span');
    closeicon.className = 'winbaricon';

    const wincontent = document.createElement('div');
    wincontent.className = 'wincontent';

    //链接功能
    winclose.setAttribute('onclick', 'closewindow(this)');
    winmin.setAttribute('onclick', 'minwindow(this)');
    winmax.setAttribute('onclick','maxwindow(this)');

    windowDiv.appendChild(windowTitlebar);
    windowTitlebar.appendChild(TitlebarImg);
    windowTitlebar.appendChild(Title);
    winmin.appendChild(minicon);
    winmax.appendChild(maxicon);
    winclose.appendChild(closeicon);
    windowTitlebar.appendChild(winmin);
    windowTitlebar.appendChild(winmax);
    windowTitlebar.appendChild(winclose);
    windowDiv.appendChild(wincontent);

    //初始化窗口位置
    wincontent.style.width = width + 'px';
    windowTitlebar.style.width = (width + 2* (5)) +  'px';
    wincontent.style.height = height + 'px';
    windowDiv.style.top = `calc(40% - ${height/2}px)`;
    windowDiv.style.left = `calc(50% - ${width/2}px)`;

    TitlebarImg.src = icon;
    TitlebarImg.style.width = '16px';
    TitlebarImg.style.height = '16px';
    TitlebarImg.style.marginLeft = '2px';

    //右上角图片
    winclose.style.margin = '0px 2px';
    minicon.style.backgroundImage = `url("../../res/icon/minimize.svg")`;
    minicon.style.backgroundPosition = "bottom";
    maxicon.style.backgroundImage = `url("../../res/icon/maximize.svg")`;
    closeicon.style.backgroundImage = `url("../../res/icon/close.svg")`;

    Title.innerHTML = title;

    makeDraggable(windowTitlebar,windowDiv);
    
    return windowDiv;
}

//TODO
function filelistPanel() {

}

function leftInfoPanel(window) {
    const panel = document.createElement('div');
    panel.className = 'leftInfoPanel';
    
    const h3 = document.createElement('h3');
    h3.innerHTML = 'INFO';
    const p = document.createElement('p');
    p.innerHTML = "These are some interesting projects I've been working on in my spare time.";

    const line = document.createElement('div');
    line.className = 'dividingLine';



    const contect = window.getElementsByClassName('wincontent')[0];
    panel.appendChild(h3);
    panel.appendChild(p);
    contect.appendChild(panel);
    contect.appendChild(line);

}

function makeDraggable(element,moveE) {
    var isDown = false;
    var offsetX, offsetY;

    element.addEventListener('mousedown', function(e) {
        isDown = true;
        offsetX = moveE.offsetLeft - e.clientX;
        offsetY = moveE.offsetTop - e.clientY;
        // 添加一个类或样式以指示拖动状态
        element.classList.add('dragging');
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
        // 移除拖动状态的类或样式
        element.classList.remove('dragging');
    }, true);

    document.addEventListener('mousemove', function(e) {
        e.preventDefault(); // 防止默认事件，如选中文本等
        if (isDown) {
            moveE.style.left = e.clientX + offsetX + 'px';
            moveE.style.top = e.clientY + offsetY + 'px';
        }
    }, true);
}