{
	function throttle(func, delay) {
		let last, delayTimer;
		return function() {
			const _this = this;
			const _args = arguments;
			const now = +new Date();
			
			if(last && now < last + delay) {
				clearTimeout(delayTimer);
				delayTimer = setTimeout(function() {
					last = now;
					func.apply(_this, _args);
				}, delay)
			} else {
				last = now;
				func.apply(_this, _args);
			}
		}
	}


	const throttleAjax = throttle(ajax, 1000)

	function ajax(value) {
		console.log('ajax request' + value)
	}

	const input1  = document.getElementById('throttle');
	input1.addEventListener('keyup', function(e) {
		throttleAjax(e.target.value)
	})
}