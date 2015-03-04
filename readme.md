reindent
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/reindent.svg?style=flat-square
[npm-url]: https://npmjs.org/package/reindent
[downloads-image]: http://img.shields.io/npm/dm/reindent.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/reindent
[david-image]: http://img.shields.io/david/chunpu/reindent.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/reindent


Reindent and trim code

Installation
---

```sh
npm i reindent -g
```

Usage
---

```sh
reindent *.js *.json
```

complex usage

```sh
find . -name '*.js' -exec reindent {} +
```

Option
---

```sh
  Usage: reindent [options] <file ...>

  Options:

    -h, --help      output usage information
    -V, --version   output the version number
    -i, --in-place  edit files in place like sed -i
    -v, --verbose   verbose info
    --indent [val]  code indent, default is tab
```

Support
---

- javascript
- json

Don't support below

```js
if ()
	code
```

use

```js
if () code
```

or 

```js
if () {
	code
}
```

Don't write open bracket at the end of comment

```js
// something {
// it will be indented
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/reindent.svg?style=flat-square
[license-url]: #
