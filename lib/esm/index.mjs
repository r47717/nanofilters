// exclude all falsy values
export var truthy = function (arr) {
    return Array.isArray(arr) ? arr.filter(Boolean) : undefined;
};
truthy.not = function (arr) {
    return Array.isArray(arr) ? arr.filter(function (item) { return !Boolean(item); }) : undefined;
};
// get first n elems
export var head = function (arr, n) {
    return Array.isArray(arr) &&
        arr.length &&
        ((Number.isInteger(n) && n > 0) || n === undefined)
        ? arr.slice(0, n || 1)
        : [];
};
// get last n elems
export var tail = function (arr, n) {
    return Array.isArray(arr) &&
        arr.length &&
        ((Number.isInteger(n) && n > 0) || n === undefined)
        ? arr.slice(-1 * (n || 1))
        : [];
};
// get objects only
export var objects = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) {
            return item !== null && typeof item === "object" && !Array.isArray(item);
        })
        : undefined;
};
objects.not = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) {
            return item === null || typeof item !== "object" || Array.isArray(item);
        })
        : undefined;
};
// get plain objects only (prototype is Object or null)
objects.plain = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) {
            return typeof item === "object" &&
                item !== null &&
                [null, Object.prototype].includes(Object.getPrototypeOf(item));
        })
        : undefined;
};
objects.plain.not = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) {
            return typeof item !== "object" ||
                item === null ||
                (Object.getPrototypeOf(item) !== null &&
                    Object.getPrototypeOf(item) !== Object.prototype);
        })
        : undefined;
};
// remove null and undefined
export var vals = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) { return item !== null && item !== undefined; })
        : undefined;
};
vals.not = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) { return item === null || item === undefined; })
        : undefined;
};
// leave instances of the constructor
export var instances = function (arr, c) {
    return Array.isArray(arr) && typeof c === "function"
        ? arr.filter(function (item) { return item instanceof c; })
        : undefined;
};
instances.not = function (arr, c) {
    return Array.isArray(arr) && typeof c === "function"
        ? arr.filter(function (item) { return !(item instanceof c); })
        : undefined;
};
// leave booleans only
export var bools = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) { return item === true || item === false || item instanceof Boolean; })
        : undefined;
};
bools.not = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) { return item !== true && item !== false && !(item instanceof Boolean); })
        : undefined;
};
// leave numbers only (exclude NaN, Infinity)
export var nums = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) { return typeof item === "number" && Number.isFinite(item); })
        : undefined;
};
nums.not = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) { return typeof item !== "number" || !Number.isFinite(item); })
        : undefined;
};
nums.int = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) { return typeof item === "number" && Number.isInteger(item); })
        : undefined;
};
// leave strings only
export var strings = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) { return typeof item === "string"; })
        : undefined;
};
strings.not = function (arr) {
    return Array.isArray(arr)
        ? arr.filter(function (item) { return typeof item !== "string"; })
        : undefined;
};
