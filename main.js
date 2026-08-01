require('electron-reload')(__dirname) // electron-reload
const { app, BrowserWindow, ipcMain } = require('electron');


function createWindow() {
  const win = new BrowserWindow({
    width: 320,
    height: 420,
    title: 'Plant Buddy',
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    center: true,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html').then(() => {
    win.show();
    /* Window control ipc handlers - title bar buttons */
  ipcMain.on('window:minimize', () => win.minimize());
  ipcMain.on('window:close', () => win.close());
  });
};

app.whenReady().then(createWindow);