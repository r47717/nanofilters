// exclude all falsy values

module.exports.truthy = (arr) =>
  Array.isArray(arr) ? arr.filter(Boolean) : undefined;

module.exports.truthy.not = (arr) =>
  Array.isArray(arr) ? arr.filter((item) => !Boolean(item)) : undefined;

// get first n elems

module.exports.head = (arr, n) =>
  Array.isArray(arr) &&
  arr.length &&
  ((Number.isInteger(n) && n > 0) || n === undefined)
    ? arr.slice(0, n || 1)
    : [];

// get last n elems

module.exports.tail = (arr, n) =>
  Array.isArray(arr) &&
  arr.length &&
  ((Number.isInteger(n) && n > 0) || n === undefined)
    ? arr.slice(-1 * (n || 1))
    : [];

// get objects only

module.exports.objects = (arr) =>
  Array.isArray(arr)
    ? arr.filter(
        (item) =>
          item !== null && typeof item === "object" && !Array.isArray(item)
      )
    : undefined;

module.exports.objects.not = (arr) =>
  Array.isArray(arr)
    ? arr.filter(
        (item) =>
          item === null || typeof item !== "object" || Array.isArray(item)
      )
    : undefined;

// get plain objects only (prototype is Object or null)

module.exports.objects.plain = (arr) =>
  Array.isArray(arr)
    ? arr.filter(
        (item) =>
          typeof item === "object" &&
          item !== null &&
          [null, Object.prototype].includes(Object.getPrototypeOf(item))
      )
    : undefined;

module.exports.objects.plain.not = (arr) =>
  Array.isArray(arr)
    ? arr.filter(
        (item) =>
          typeof item !== "object" ||
          item === null ||
          (Object.getPrototypeOf(item) !== null &&
            Object.getPrototypeOf(item) !== Object.prototype)
      )
    : undefined;

// remove null and undefined

module.exports.vals = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => item !== null && item !== undefined)
    : undefined;

module.exports.vals.not = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => item === null || item === undefined)
    : undefined;

// leave instances of the constructor

module.exports.instances = (arr, c) =>
  Array.isArray(arr) && typeof c === "function"
    ? arr.filter((item) => item instanceof c)
    : undefined;

module.exports.instances.not = (arr, c) =>
  Array.isArray(arr) && typeof c === "function"
    ? arr.filter((item) => !(item instanceof c))
    : undefined;

// leave booleans only

module.exports.bools = (arr) =>
  Array.isArray(arr)
    ? arr.filter(
        (item) => item === true || item === false || item instanceof Boolean
      )
    : undefined;

module.exports.bools.not = (arr) =>
  Array.isArray(arr)
    ? arr.filter(
        (item) => item !== true && item !== false && !(item instanceof Boolean)
      )
    : undefined;

// leave numbers only (exclude NaN, Infinity)

module.exports.nums = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => typeof item === "number" && Number.isFinite(item))
    : undefined;

module.exports.nums.not = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => typeof item !== "number" || !Number.isFinite(item))
    : undefined;

module.exports.nums.int = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => typeof item === "number" && Number.isInteger(item))
    : undefined;

// leave strings only

module.exports.strings = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => typeof item === "string")
    : undefined;

module.exports.strings.not = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => typeof item !== "string")
    : undefined;
