import {nums, objects, strings} from './index.js';

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

console.log(nums(arr));
console.log(objects(arr));
console.log(strings(arr));
console.log(nums.not(arr));
console.log(objects.not(arr));
console.log(strings.not(arr));
