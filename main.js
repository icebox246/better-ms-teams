const {systemPreferences, app, BrowserWindow} = require('electron');

const createWindow = () => {
    app.userAgentFallback = 'Chrome/95.0.4638.69 Safari/537.36';

    const win = new BrowserWindow({
        autoHideMenuBar: true,
        webPreferences: {
            devTools: true,
            webviewTag: true,
            allowRunningInsecureContent: true,
            webSecurity: false
        }
    });

    win.loadURL('https://teams.microsoft.com/')
};

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
