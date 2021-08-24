var text = document.querySelector('.text');
Router.route('/', function() {
	text.innerHTML = '这里是首页';
});
Router.route('/page1', function() {
    text.innerHTML = '这里是page1';
});
Router.route('/page2', function() {
    text.innerHTML = '这里是page2';
});