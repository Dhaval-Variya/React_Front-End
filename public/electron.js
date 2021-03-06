const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
const url = require('url');
 
let mainWindow;
 
function createWindow() {
    mainWindow = new BrowserWindow({
        width:1200,
        height:700,
        show: false
    });
    mainWindow.removeMenu();
    
    const startURL = isDev ? 'http://localhost:3000/home' : `file://${path.join(__dirname, '../build/index.html')}`;
    mainWindow.loadURL(startURL);

    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
app.on('ready', createWindow);
/*
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });*/