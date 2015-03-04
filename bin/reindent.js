#!/usr/bin/env node

var program = require('commander')
var pkg = require('../package.json')
var async = require('async')
var reindent = require('../')
var _ = require('min-util')

program
	.version(pkg.version)
	.usage('[options] <file ...>')
	.option('-i, --in-place', 'edit files in place like sed -i')
	.option('-v, --verbose', 'verbose info', increaseVerbosity, 0)
	.option('--indent [val]', 'code indent, default is tab', convertIndent)
	.parse(process.argv)

//console.log(program)
var files = program.args
return console.log(files)
async.eachLimit(files, 5, function(file, cb) {
	reindent(file, _.only(program, 'inPlace indent'), function(err, val) {
		if (err) return cb(err)
		if (!program.inPlace) {
			console.log(val)
		}
		cb(null)
	})
}, function(err) {
	if (err) console.error(err.stack)
})

function increaseVerbosity(v, total) {
	return total + 1
}

function convertIndent(val) {
	return eval('"' + val + '"')
}
