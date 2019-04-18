function powerSumDigTerm(n) {
	let powerValue, arr = []
	let digitSum = (a) => a.toString().split('').reduce((a,b)=> Number(a) + Number(b))
	for (let i = 2; i < 200; i++) {
		powerValue = i;
		for (let exp = 2; exp < 40; exp++) {
			powerValue *= i
			if (digitSum(powerValue) == i) {
				arr.push(powerValue)
			}
			if (arr.length > 40) break;
		}
		if (arr.length > 40) break;
	}
	arr.sort((a,b)=>a-b)
	console.log(arr)
	return arr[n-1]
}