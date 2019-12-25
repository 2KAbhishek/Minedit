const { app, BrowserWindow } = require('electron')
const fs = require('fs')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('src/renderer.html')
})
