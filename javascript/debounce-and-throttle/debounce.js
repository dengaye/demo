function debounce(func, delay) {
	return function(args) {
		var _this = this;
		var _args = args;
		clearTimeout(func.id);
		func.id = setTimeout(function() {
			func.call(_this, _args);
		}, delay);
	}
}

function ajax(value) {
	console.log('ajax request' + value)
}

const input  = document.getElementById('search');
input.addEventListener('keyup', function(e) {

	debounce(ajax, 1000)(e.target.value)
})