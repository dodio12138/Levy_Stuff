function docwindow() {
    const docwin = createWindow('docwin',500, 400,'Document','../../res/img/directory_closed_cool-0.png');
    document.getElementById('windows').appendChild(docwin);
    leftInfoPanel(docwin);
}