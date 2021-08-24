const { app, BrowserWindow } = require('electron');

function createWindow() {
	// 创建浏览器窗口
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false
		}
	})

	// 并且为你的应用加载index.html
	win.loadFile('index.html')

	// 打开开发者工具
	win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if(BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})