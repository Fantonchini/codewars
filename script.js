const palindrome = str => {
	return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}
const pluck = (array, keyField) => {
	return array.map(a => a[keyField])
}

const whatMyType = variable => {
	if (Array.isArray(variable)) {
		return 'array'
	} else if (!!variable && 
			   typeof(variable) === 'object' && 
			   (!isNaN(variable.length) || !isNaN(variable.size)) &&
			   !variable.hasOwnProperty('push')) {
		return 'array-like'
	} else if (variable === null) {
		return 'null'
	} else return typeof(variable)
}
