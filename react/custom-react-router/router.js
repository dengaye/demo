function Router() {
	this.routers = {};    //存储路由回调函数,以传入的路径为key,callback为value
	this.currentUrl = ''; //当前路由
}
// 注册路由路径和存储回调函数
Router.prototype.route = function(path,callback) {
	this.routers[path] = callback || function() {}
}
// 更新页面，其实就是执行注册的回调函数
Router.prototype.refresh = function() {
	this.currentUrl = location.hash.slice(1) || '/';
	this.routers[this.currentUrl]();
}
Router.prototype.init = function() {
	window.addEventListener('load',this.refresh.bind(this),false);
	window.addEventListener('hashchange',this.refresh.bind(this),false);
}

window.Router = new Router();
window.Router.init();