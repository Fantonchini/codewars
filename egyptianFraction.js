function decompose(n) {
	function rational(x) {
		let exp = x.length-(parseInt(x).toString().length + 1)
		return [Number(x)*Math.pow(10,(exp)),Math.pow(10,(exp))]
	}
	function negativeMod(x,y) { //X=a*Y+b, 0<=b<Y, a = Math.ceil(x/y)
		while (x<0) x += y
		return x % y
	}	
	let [a,b] = isNaN(n) ? n.split('/').map(Number) : rational(n), result = []
	if (a > b) {
		result.push(`${Math.floor(a/b)}`)
		a %= b
	}
	while (a > 0) {
		let divider = Math.ceil(b/a)
		result.push('1/'+divider);
		[a,b] = [negativeMod(-b,a), b*divider]
	}
	return result
}