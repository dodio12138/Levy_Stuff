function closewindow(button) {
    var window = button.parentNode.parentNode;
    window.remove();
}

function minwindow(button) {
    var window = button.parentNode.parentNode;
    if (window.getElementsByClassName('wincontent')[0].style.display != 'none') {
        window.getElementsByClassName('wincontent')[0].style.display = 'none';
    } else {
        window.getElementsByClassName('wincontent')[0].style.display = 'flex';
    }
}

// let isMax = false;

//TODO
function maxwindow(button) {
    // var window_ = button.parentNode.parentNode;
    // if(!isMax){
    //     console.log(window.innerWidth/parseInt(window_.getElementsByClassName('wincontent')[0].style.width,10));
    //     window_.style.transformX = `scale(${window.innerWidth/parseInt(window_.getElementsByClassName('wincontent')[0].style.width,10)})`;
    //     window_.style.transformY = `scale(${window.innerHeight/parseInt(window_.getElementsByClassName('wincontent')[0].style.height,10)})`;
    //     isMax = true;
    // }else{
    //     window_.style.transform = "scale(1)";
    //     isMax = false;
    // }
}

function createWindow(id, width, height, title, icon) {
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
    winmax.setAttribute('onclick', 'maxwindow(this)');

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
    windowTitlebar.style.width = (width + 2 * (5)) + 'px';
    wincontent.style.height = height + 'px';
    windowDiv.style.top = `calc(40% - ${height / 2}px)`;
    windowDiv.style.left = `calc(50% - ${width / 2}px)`;

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

    makeDraggable(windowTitlebar, windowDiv);

    return windowDiv;
}


function filelistPanel(window) {
    const panel = document.createElement('div');
    panel.className = 'filelistPanel';
    fetch('../../filelist.json')
        .then(response => response.json())
        .then(data => {
            data.docProject.forEach(project => {
                // 在这里可以访问每个用户的属性
                //console.log(`ID: ${project.id}, Name: ${project.name}, Email: ${project.email}`);
                createFile(panel, project.name);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
    window.appendChild(panel);

    return panel;
}

function leftInfoPanel(window) {
    const panel = document.createElement('div');
    panel.className = 'leftInfoPanel';

    const h3 = document.createElement('h3');
    h3.innerHTML = 'Mini Stuffs';
    const p = document.createElement('p');
    p.innerHTML = "These are some interesting projects I've been working on in my spare time.";

    const line = document.createElement('div');
    line.className = 'dividingLine';

    const InfoName = document.createElement('p');
    InfoName.className = 'infoName';
    InfoName.style.marginTop = '20px';
    const InfoDesc = document.createElement('p');
    InfoDesc.className = 'infoDesc';



    const contect = window.getElementsByClassName('wincontent')[0];
    panel.appendChild(h3);
    panel.appendChild(p);
    panel.appendChild(InfoName);
    panel.appendChild(InfoDesc);
    contect.appendChild(panel);
    contect.appendChild(line);

    return panel;
}

function makeDraggable(element, moveE) {
    var isDown = false;
    var offsetX, offsetY;

    element.addEventListener('mousedown', function (e) {
        isDown = true;
        offsetX = moveE.offsetLeft - e.clientX;
        offsetY = moveE.offsetTop - e.clientY;
        // 添加一个类或样式以指示拖动状态
        element.classList.add('dragging');
    }, true);

    document.addEventListener('mouseup', function () {
        isDown = false;
        // 移除拖动状态的类或样式
        element.classList.remove('dragging');
    }, true);

    document.addEventListener('mousemove', function (e) {
        e.preventDefault(); // 防止默认事件，如选中文本等
        if (isDown) {
            moveE.style.left = e.clientX + offsetX + 'px';
            moveE.style.top = e.clientY + offsetY + 'px';
        }
    }, true);
}

function createFile(window, name) {
    const file = document.createElement('div');
    file.className = 'file';
    const fileIcon = document.createElement('img');
    fileIcon.className = 'fileIcon';
    fileIcon.src = '../../res/img/web_file-2.png';
    const fileName = document.createElement('div');
    fileName.className = 'fileName';
    file.id = name;
    fileName.innerHTML = name;
    file.appendChild(fileIcon);
    file.appendChild(fileName);
    window.appendChild(file);
}

function showFileInfo(panel, infopanel) {
    panel.addEventListener('click', function (event) {
        var target = event.target;
        // 检查点击的元素是否是文件夹名称
        if (target.classList.contains('fileIcon')) {
            // 获取文件夹元素
            var folderElement = target.parentNode;

            // 获取文件夹的 ID
            var folderId = folderElement.id;

            // 在这里添加激活文件夹的逻辑，例如添加一个类来表示激活状态
            folderElement.classList.toggle('active');


            var styledName = '<span style="font-weight: bold;margin: 5px 0px 5px 0px;">Name: </span>';
            var styledDesc = '<span style="font-weight: bold;margin: 5px 0px;">Desc: </span>';

            infopanel.getElementsByClassName('infoName')[0].innerHTML = styledName + folderId;
            fetch('../../filelist.json')
                .then(response => response.json())
                .then(data => {
                    infopanel.getElementsByClassName('infoDesc')[0].innerHTML = styledDesc + data.docProject.find(project => project.name === folderId).desc;
                })
                .catch(error => console.error('Error fetching data:', error));
        }else{
            infopanel.getElementsByClassName('infoName')[0].innerHTML = '';
            infopanel.getElementsByClassName('infoDesc')[0].innerHTML = '';
        }
    });
    panel.addEventListener('dblclick', function (event) {
        var target = event.target;
        // 检查点击的元素是否是文件夹名称
        if (target.classList.contains('fileIcon')) {
            // 获取文件夹元素
            var folderElement = target.parentNode;

            // 获取文件夹的 ID
            var folderId = folderElement.id;
            fetch('../../filelist.json')
                .then(response => response.json())
                .then(data => {
                    link = data.docProject.find(project => project.name === folderId).link;
                    window.open(link, '_blank');
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    });
}