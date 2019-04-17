function multiply(a,b) {
	let aa = a.split('').reverse()
	let bb = b.split('').reverse()

	let calcArray = []

	for (let i = 0; i < aa.length; i++) {
		for (let j = 0; j < bb.length; j++) {
			let temp = aa[i] * bb[j]
			calcArray[i+j] = (calcArray[i+j]) ? calcArray[i+j] + temp : temp
		}
	}

	for (let i = 0; i < calcArray.length; i++) {
		let number = calcArray[i] % 10
		let shift = Math.floor(calcArray[i] /10)
		calcArray[i] = number
		if (calcArray[i+1]) {
			calcArray[i+1] += shift
		} else if (shift !== 0) {
			calcArray[i+1] = shift
		}
	}
	let result = calcArray.reverse().join('')
  if (+result === 0) return '0'
	return result.replace(/^0+/,'')
}