"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strings = exports.nums = exports.bools = exports.instances = exports.vals = exports.objects = exports.tail = exports.head = exports.truthy = void 0;
// exclude all falsy values
var truthy = function (arr) {
  return Array.isArray(arr) ? arr.filter(Boolean) : undefined;
};
exports.truthy = truthy;
exports.truthy.not = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return !Boolean(item);
      })
    : undefined;
};
// get first n elems
var head = function (arr, n) {
  return Array.isArray(arr) &&
    arr.length &&
    ((Number.isInteger(n) && n > 0) || n === undefined)
    ? arr.slice(0, n || 1)
    : [];
};
exports.head = head;
// get last n elems
var tail = function (arr, n) {
  return Array.isArray(arr) &&
    arr.length &&
    ((Number.isInteger(n) && n > 0) || n === undefined)
    ? arr.slice(-1 * (n || 1))
    : [];
};
exports.tail = tail;
// get objects only
var objects = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return (
          item !== null && typeof item === "object" && !Array.isArray(item)
        );
      })
    : undefined;
};
exports.objects = objects;
exports.objects.not = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return item === null || typeof item !== "object" || Array.isArray(item);
      })
    : undefined;
};
// get plain objects only (prototype is Object or null)
exports.objects.plain = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return (
          typeof item === "object" &&
          item !== null &&
          [null, Object.prototype].includes(Object.getPrototypeOf(item))
        );
      })
    : undefined;
};
exports.objects.plain.not = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return (
          typeof item !== "object" ||
          item === null ||
          (Object.getPrototypeOf(item) !== null &&
            Object.getPrototypeOf(item) !== Object.prototype)
        );
      })
    : undefined;
};
// remove null and undefined
var vals = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return item !== null && item !== undefined;
      })
    : undefined;
};
exports.vals = vals;
exports.vals.not = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return item === null || item === undefined;
      })
    : undefined;
};
// leave instances of the constructor
var instances = function (arr, c) {
  return Array.isArray(arr) && typeof c === "function"
    ? arr.filter(function (item) {
        return item instanceof c;
      })
    : undefined;
};
exports.instances = instances;
exports.instances.not = function (arr, c) {
  return Array.isArray(arr) && typeof c === "function"
    ? arr.filter(function (item) {
        return !(item instanceof c);
      })
    : undefined;
};
// leave booleans only
var bools = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return item === true || item === false || item instanceof Boolean;
      })
    : undefined;
};
exports.bools = bools;
exports.bools.not = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return item !== true && item !== false && !(item instanceof Boolean);
      })
    : undefined;
};
// leave numbers only (exclude NaN, Infinity)
var nums = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return typeof item === "number" && Number.isFinite(item);
      })
    : undefined;
};
exports.nums = nums;
exports.nums.not = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return typeof item !== "number" || !Number.isFinite(item);
      })
    : undefined;
};
exports.nums.int = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return typeof item === "number" && Number.isInteger(item);
      })
    : undefined;
};
// leave strings only
var strings = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return typeof item === "string";
      })
    : undefined;
};
exports.strings = strings;
exports.strings.not = function (arr) {
  return Array.isArray(arr)
    ? arr.filter(function (item) {
        return typeof item !== "string";
      })
    : undefined;
};
