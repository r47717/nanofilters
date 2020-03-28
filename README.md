# nanofilters

Simple array filters for ES6

```javascript

const arr = [
  1,
  20000000,
  Infinity,
  {},
  "",
  0,
  null,
  1234,
  -1234,
  undefined,
  [123, 456],
  true,
  "non empty",
  false,
  NaN,
  { param: 1 },
  -Infinity,
  void 0,
  () => {},
  (val) => val + 1,
  12345.12345,
];

truthy(arr); // excludes false, 0, null, undefined, ''
head(arr, 1); // [1]
tail(arr, 2); // [(val) => val + 1, 12345.12345]
objects(arr); // [{}, { param: 1 }]
vals(arr); // excludes null and undefined 
plain(arr); // selects only plain objects (no proto or Object.prototype proto)
instances(arr, C); // selects only array items which are instances of C
bools(arr); // selects only true, false and instances of Boolean
nums(arr); // selects numbers excluding Infinites and NaN
strings(arr); // selects strings only

```

https://www.npmjs.com/package/nanofilters

