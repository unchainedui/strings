# Unchained UI

## Strings

[![NPM Version](https://img.shields.io/npm/v/uc-strings.svg?style=flat-square)](https://www.npmjs.com/package/uc-strings)
[![NPM Downloads](https://img.shields.io/npm/dt/uc-strings.svg?style=flat-square)](https://www.npmjs.com/package/uc-strings)

Various functions to work with strings

### Usage

Just import methods you need

```js
import { length } from 'uc-strings'
```

### Methods

#### length(str)

return the proper length of the string. Counts the actual characters and not unicode surrogate pairs

#### substring(str, begin, end)

return the proper substring from the string. Counts the actual characters and not unicode surrogate pairs

#### removeHash(str)

Removes `#` symbol from the beginig of the string

#### removeQuotes(str)

Removes `'` or `"` quotes form the begining and end of the string

#### toCamelCase(str)

Transfroms `_` or `-` cases into camelCase

#### pluralize(single, plural, opts)

Return the function that accepts a number and return a string with corresponded word.

Optios are:

* __zeroIsEmpty__ – boolean, default false. If true return empty string when number is zero.

#### slugify(str)

Returns slugified string

License MIT

© velocityzen

