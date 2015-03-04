module.exports = function(last, curr, next) {
	if (!last) return
	var lastChar = last[last.length - 1]
	var isEnd = -1 != ')]}'.indexOf(curr[0])
	if (isEnd) return -1
	var isStart = -1 != '([{'.indexOf(lastChar)
	if (isStart) return 1
	/*
	if (')' == last[last.length - 1]) {
		if (/^(if|switch|else|while|with|catch|for|for each)\s*\(/.test(last)) {
			if (!/\(.*\).*\(.*\)/.test(last)) {
				// remove `if (x) cb(x)`
				return 1
			}
		}
	}*/
}
