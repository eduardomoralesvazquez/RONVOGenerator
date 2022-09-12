const { app,  BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1600,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'js/preloads.js')
        }
    });

    win.removeMenu();
    win.loadFile('index.html');
    win.webContents.openDevTools();
};
app.whenReady().then(()=>{
    createWindow();
});

app.on('window-all-closed', ()=>{
    console.log("closing...");
    app.quit();
});
