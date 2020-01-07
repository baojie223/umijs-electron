const { app, BrowserWindow } = require('electron');
const path = require('path');
// const isDev = require('electron-is-dev');

function createWindow() {
  let win = new BrowserWindow({
    width: 1600,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // win.loadFile("index.html");
  win.loadURL('http://localhost:8001');
  win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });
}

app.on('ready', createWindow);
