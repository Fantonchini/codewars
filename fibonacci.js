function fibSum(n) {
	let a = 1, b = 1, c, sum = a + b

	for (let i = 2; i < n; i++) {
		c = a + b
		a = b
		b = c
		sum += c
	}
	return sum
}
function fib(n) {
	let sqrt = Math.sqrt(5), a = (1 + sqrt) / 2, b = (1 - sqrt) / 2
	return Math.ceil((Math.pow(a,n) - Math.pow(b,n)) / sqrt)
}