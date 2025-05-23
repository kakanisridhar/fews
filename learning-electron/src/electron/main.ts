import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';


async function getSettings(event: any, args: any) {
  function timeout(ms: number | undefined) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  await timeout(1000);

  return "hello kakani";
}

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });
  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123');
  } else {
    mainWindow.loadFile(getUIPath());
  }

  ipcMain.handle("get-settings", getSettings);
});


function getPreloadPath() {
  return path.join(
    app.getAppPath(),
    isDev() ? '.' : '..',
    '/dist-electron/preload.cjs'
  );
}

function getUIPath() {
  return path.join(app.getAppPath(), '/dist-react/index.html');
}

function getAssetPath() {
  return path.join(app.getAppPath(), isDev() ? '.' : '..', '/src/assets');
}

function isDev(): boolean {
  return process.env.NODE_ENV === 'development';
}