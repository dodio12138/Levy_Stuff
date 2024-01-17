function closewindow(button) {
    var window = button.parentNode.parentNode;
    window.remove();
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

    winclose.setAttribute('onclick', 'closewindow(this)');


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

    windowDiv.style.width = width + 'px';
    windowDiv.style.height = height + 'px';
    windowDiv.style.top = `calc(40% - ${height/2}px)`;
    windowDiv.style.left = `calc(50% - ${width/2}px)`;

    TitlebarImg.src = icon;
    TitlebarImg.style.width = '16px';
    TitlebarImg.style.height = '16px';
    TitlebarImg.style.marginLeft = '2px';

    winclose.style.margin = '0px 2px';
    minicon.style.backgroundImage = `url("../../res/icon/minimize.svg")`;
    minicon.style.backgroundPosition = "bottom";
    maxicon.style.backgroundImage = `url("../../res/icon/maximize.svg")`;
    closeicon.style.backgroundImage = `url("../../res/icon/close.svg")`;

    Title.innerHTML = title;
    
    return windowDiv;
}