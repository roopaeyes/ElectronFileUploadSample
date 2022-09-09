const { app, BrowserWindow,dialog } = require('electron')
app.commandLine.appendSwitch('ignore-certificate-errors');
app.commandLine.appendSwitch('allow-insecure-localhost',true);

var ipc = require('electron').ipcRenderer;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: ( './icon.png'),
    webPreferences: {
      devTools: true
    }
  })
  win.maximize();
  win.removeMenu();
  win.webContents.openDevTools();
  // and load the index.html of the app.
  //win.loadFile('./index.html')
  win.loadURL('http://localhost:8080/index')
 
  // Open the DevTools.
  // win.webContents.openDevTools()
 
  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}
 
app.whenReady().then(()=>{
  app.disableHardwareAcceleration();
  createWindow();
  app.on('activate', function(){
    if(BrowserWindow.getAllWindows().length === 0){
      createWindow();
    }
  });
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
 
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
 
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

app.on("browser-window-created", (e,win)=>{
e.preventDefault();
win.removeMenu();
win.maximize();
});