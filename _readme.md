Usage
---

> God! it is too complex, close this project!

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
