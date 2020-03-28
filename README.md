# nanofilters

Simple array filters for ES6

```javascript

const arr = [1, '2', { arg: 3 }, [4], null, undefined];

truthy(arr); // excludes false, 0, null, undefined, ''

head(arr, 1); // gets N head elements

tail(arr, 2); // gets N tail elements

objects(arr); // selects objects
objects.plain(arr); // selects only plain objects (null proto or Object.prototype)

vals(arr); // excludes null and undefined 

instances(arr, C); // selects only instances of C

bools(arr); // selects only true, false and instances of Boolean

nums(arr); // selects numbers excluding Infinites and NaN

strings(arr); // selects strings only

// Some functions have 'not' postfix buddy:

truthy.not(arr); // excludes truthy
nums.not(arr); // excludes numbers
// etc...


```

https://www.npmjs.com/package/nanofilters

