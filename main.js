const { app, BrowserWindow, nativeImage } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 960,
    minHeight: 400,
    icon: nativeImage.createFromPath(__dirname + "/app/img/favicon.ico"),
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.removeMenu();
  win.loadFile(__dirname + "/app/index.html");
}


app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow();
  })
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin")
  	app.quit();
});
