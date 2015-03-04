var fs = require('fs')
var path = require('path')
var requireDir = require('require-dir')
var exts = requireDir('./exts')

module.exports = reindent

function getExt(name) {
	var ret = path.extname(name)
	return ret.substr(1)
}

function trimFile(str) {
	str = str.trim()
	return str.split('\n').map(function(line) {
		return line.trim()
	})
}

function isSupport(ext) {
	// json, js, lua, html
	return !!exts[ext]
}

function format(arr, indent) {
	return arr.map(function(one) {
		var ret = []
		for (var i = 0; i < one[0]; i++) {
			ret.push(indent)
		}
		ret.push(one[1])
		return ret.join('')
	}).join('\n')
}

function reindentLines(lines, ext, indent) {
	var fn = exts[ext]
	var arr = []
	var curr = 0
	for (var i = 0; i < lines.length; i++) {
		var ret = fn(lines[i - 1], lines[i], lines[i+1])
		if (ret) curr += ret
		if (curr < 0) curr = 0
		arr[i] = [curr, lines[i]]
	}
	return format(arr, indent)
	//return lines.join('\n')
}

function noop() {}

function reindent(file, opt, cb) {
	if ('function' == typeof opt) return reindent(file, {}, opt)
	cb = cb || noop
	opt = opt || {}
	var ext = getExt(file)
	if (!isSupport(ext)) return cb(null)
	fs.readFile(file, 'utf8', function(err, val) {
		if (err) return cb(err)
		var lines = trimFile(val)
		var ret = reindentLines(lines, ext, opt.indent || '\t')
		// write
		if (opt.inPlace) {
			fs.writeFile(file, ret, 'utf8', function(err) {
				if (err) return cb(err)
				return cb(null, ret)
			})
		} else {
			return cb(null, ret)
		}
	})
}
