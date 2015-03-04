module.exports = function(last, curr, next) {
	if (!last) return
	var lastChar = last[last.length - 1]
	var isEnd = -1 != ']}'.indexOf(curr[0])
	if (isEnd) return -1
	var isStart = -1 != '[{'.indexOf(lastChar)
	if (isStart) return 1
}
