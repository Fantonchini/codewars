function scramble(str1, str2) {
	lettersObj = str1.split('').reduce((accum,el)=> (accum[el] = 1 + (accum[el] || 0), accum),{})
	str2 = str2.split('')
	console.log('str1', str1)
	for (let i = 0, length = str2.length; i < length; i++) {
		if (lettersObj[str2[i]]) {
			lettersObj[str2[i]] -= 1
		} else {
			return false
		}
	}
	return true
}