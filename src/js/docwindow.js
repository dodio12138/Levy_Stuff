function docwindow() {
    const docwin = createWindow('docwin', 500, 400, 'Document', '../../res/img/directory_closed_cool-0.png');
    document.getElementById('windows').appendChild(docwin);
    const infop = leftInfoPanel(docwin);
    const filep = filelistPanel(docwin.getElementsByClassName('wincontent')[0]);
    showFileInfo(filep, infop);
}