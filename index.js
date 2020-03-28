// filter all falsy values
export const truthy = (arr) =>
  Array.isArray(arr) ? arr.filter(Boolean) : undefined;

truthy.not = (arr) =>
  Array.isArray(arr) ? arr.filter((item) => !Boolean(item)) : undefined;

// get first n elems
export const head = (arr, n) =>
  Array.isArray(arr) &&
  arr.length &&
  ((Number.isInteger(n) && n > 0) || n === undefined)
    ? arr.slice(0, n || 1)
    : [];

// get last n elems
export const tail = (arr, n) =>
  Array.isArray(arr) &&
  arr.length &&
  ((Number.isInteger(n) && n > 0) || n === undefined)
    ? arr.slice(-1 * (n || 1))
    : [];


// get objects only

export const objects = (arr) =>
  Array.isArray(arr)
    ? arr.filter(
        (item) =>
          item !== null && typeof item === "object" && !Array.isArray(item)
      )
    : undefined;

objects.not = (arr) =>
  Array.isArray(arr)
    ? arr.filter(
        (item) =>
          item === null || typeof item !== "object" || Array.isArray(item)
      )
    : undefined;


// leave plain objects only (prototype is Object or null)

objects.plain = (arr) =>
  Array.isArray(arr)
    ? arr.filter(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      [null, Object.prototype].includes(Object.getPrototypeOf(item))
    )
    : undefined;

objects.plain.not = (arr) =>
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

export const vals = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => item !== null && item !== undefined)
    : undefined;

vals.not = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => item === null || item === undefined)
    : undefined;


// leave instances of the constructor

export const instances = (arr, c) =>
  Array.isArray(arr) && typeof c === "function"
    ? arr.filter((item) => item instanceof c)
    : undefined;

instances.not = (arr, c) =>
  Array.isArray(arr) && typeof c === "function"
    ? arr.filter((item) => !(item instanceof c))
    : undefined;


// leave booleans only

export const bools = (arr) =>
  Array.isArray(arr)
    ? arr.filter(
        (item) => item === true || item === false || item instanceof Boolean
      )
    : undefined;

bools.not = (arr) =>
  Array.isArray(arr)
    ? arr.filter(
    (item) => item !== true && item !== false && !(item instanceof Boolean)
    )
    : undefined;


// leave numbers only (exclude NaN, Infinity)

export const nums = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => typeof item === "number" && Number.isFinite(item))
    : undefined;

nums.not = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => typeof item !== "number" || !Number.isFinite(item))
    : undefined;

nums.int = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => typeof item === "number" && Number.isInteger(item))
    : undefined;


// leave strings only

export const strings = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => typeof item === "string")
    : undefined;

strings.not  = (arr) =>
  Array.isArray(arr)
    ? arr.filter((item) => typeof item !== "string")
    : undefined;

