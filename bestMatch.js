function bestMatch(ALAHLYGoals, zamalekGoals) {
	let arr = []
	for (let i = 0; i < ALAHLYGoals.length; i++) {
		let temp = ALAHLYGoals[i] - zamalekGoals[i]
		arr.push(temp)
	}
	let min = Math.min(...arr), minIndexes = []
	if (arr.indexOf(min) === arr.lastIndexOf(min)) {
		return arr.indexOf(Math.min(...arr))
	} else {
		while (~arr.indexOf(min)) {
  			minIndexes.push(arr.indexOf(min))
  			delete arr[arr.indexOf(min)]
		}
		let result = minIndexes.map(a=> zamalekGoals[a])
		return minIndexes[result.indexOf(Math.max(...result))]
	}
}