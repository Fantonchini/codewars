function flatter(arr) {
	return arr.reduce((flatArr, element) => {
		return Array.isArray(element) ? 
		  [...flatArr, ...flatter(element)] : [...flatArr, element]
	}, [])
}