function isA(n) {
	if(Number(n)) {
		if(n % 1 === 0) {
			return true;
		}
	}
	return false;
}
