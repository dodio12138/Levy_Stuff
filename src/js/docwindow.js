function docwindow() {
    document.getElementById('windows').appendChild(createWindow(500, 400,'Document'))
}

function createWindow(width, height,title) {
    const windowDiv = document.createElement('window');
    const windowTitlebar = document.createElement('windowTitlebar');
    const TitlebarImg = document.createElement('img');
    const Title = document.createElement('div');
    Title.className = 'windows-title';


    windowDiv.appendChild(windowTitlebar);
    windowTitlebar.appendChild(TitlebarImg);
    windowTitlebar.appendChild(Title);

    windowDiv.style.width = width + 'px';
    windowDiv.style.height = height + 'px';
    windowDiv.style.top = `calc(40vh - ${height/2}px)`;
    windowDiv.style.left = `calc(40vw - ${width/2}px)`;

    TitlebarImg.src = "../../res/img/directory_closed_cool-0.png";
    TitlebarImg.style.width = '16px';
    TitlebarImg.style.height = '16px';
    TitlebarImg.style.marginLeft = '2px';

    Title.innerHTML = title;

    
    return windowDiv;
}