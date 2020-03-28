import {
  truthy,
  first,
  last,
  head,
  tail,
  objects,
  vals,
  plain,
  instances,
  bools,
  nums,
  strings,
} from "./index";

const o0 = Object.create(null);
const o1 = {};
const o2 = { param: {} };
const o3 = { arg: { param: {} } };
const o4 = { arg1: [1, 2, 3], arg2: ["123", ""] };
const o5 = { param: "1234", param2: [{ arg: 1 }] };

const npo1 = Object.setPrototypeOf({}, { arg: "123" });
const npo2 = Object.setPrototypeOf({ param: {} }, { arg: "123" });
const npo3 = Object.setPrototypeOf(
  { arg: { param: {} } },
  { arg: "123", param: null }
);
const npo4 = Object.setPrototypeOf(
  { arg1: [1, 2, 3], arg2: ["123", ""] },
  { arg: "123", val: undefined }
);
const npo5 = Object.setPrototypeOf(
  { param: "1234", param2: [{ arg: 1 }] },
  { arg: "123", test: [] }
);

// truthy

describe("truthy tests", () => {
  test("empty array", () => {
    expect(truthy([])).toStrictEqual([]);
  });

  test("undefined arg", () => {
    expect(truthy(undefined)).toEqual(undefined);
  });

  test("null arg", () => {
    expect(truthy(null)).toEqual(undefined);
  });

  test("non array arg", () => {
    expect(truthy({})).toEqual(undefined);
  });

  test("mixed vals", () => {
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
      new Set([1, 2, 3]),
      new Map(),
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
    const result = truthy(arr);
    const expected = [
      1,
      20000000,
      Infinity,
      {},
      1234,
      -1234,
      new Set([1, 2, 3]),
      new Map(),
      true,
      "non empty",
      { param: 1 },
      -Infinity,
      () => {},
      (val) => val + 1,
      12345.12345,
    ];
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
    for (const val of result) {
      expect(val).not.toBe(null);
      expect(val).not.toBe(undefined);
      expect(val).not.toBe(0);
      expect(val).not.toBe(false);
      expect(val).not.toBe("");
    }
  });
});

// first

describe("first tests", () => {
  test("empty array", () => {
    expect(first([])).toStrictEqual(undefined);
  });

  test("undefined arg", () => {
    expect(first(undefined)).toEqual(undefined);
  });

  test("null arg", () => {
    expect(first(null)).toEqual(undefined);
  });

  test("non array arg", () => {
    expect(first({})).toEqual(undefined);
  });

  test("sunny cases", () => {
    const obj = { param: {} };
    expect(first([1234, {}, "", null])).toBe(1234);
    expect(first([{}, "", null, 1234])).toStrictEqual({});
    expect(first(["", null, {}, 1234])).toBe("");
    expect(first([null, "", {}, 1234])).toBe(null);
    expect(first([undefined, "", null, {}, 1234])).toBe(undefined);
    expect(first([obj, 1234])).toBe(obj);
  });
});

// last

describe("last tests", () => {
  test("empty array", () => {
    expect(last([])).toStrictEqual(undefined);
  });

  test("undefined arg", () => {
    expect(last(undefined)).toEqual(undefined);
  });

  test("null arg", () => {
    expect(last(null)).toEqual(undefined);
  });

  test("non array arg", () => {
    expect(last({})).toEqual(undefined);
  });

  test("sunny cases", () => {
    const obj = { param: {} };
    expect(last([1234, {}, "", null])).toBe(null);
    expect(last(["", null, 1234, {}])).toStrictEqual({});
    expect(last([null, {}, 1234, ""])).toBe("");
    expect(last(["", {}, 1234, null])).toBe(null);
    expect(last(["", null, {}, 1234, undefined])).toBe(undefined);
    expect(last([12345, "", null, obj])).toBe(obj);
  });
});

// head

describe("head tests", () => {
  test("empty array", () => {
    expect(head([])).toStrictEqual([]);
  });

  test("undefined arg", () => {
    expect(head(undefined)).toEqual([]);
  });

  test("null arg", () => {
    expect(head(null)).toEqual([]);
  });

  test("non array arg", () => {
    expect(head({})).toEqual([]);
  });

  test("wrong second arg 1", () => {
    expect(head([], {})).toEqual([]);
  });

  test("wrong second arg 2", () => {
    expect(head([], true)).toEqual([]);
  });

  test("wrong second arg 3", () => {
    expect(head([], [])).toEqual([]);
  });

  test("wrong second arg 4", () => {
    expect(head([], -123)).toEqual([]);
  });

  test("wrong second arg 5", () => {
    expect(head([], 0)).toEqual([]);
  });

  test("wrong second arg 6", () => {
    expect(head([], null)).toEqual([]);
  });

  test("default second arg", () => {
    expect(head([1, "123", true, NaN], undefined)).toStrictEqual(
      head([1, "123", true, NaN], 1)
    );
  });

  test("head sunny cases", () => {
    expect(head([1, "123", true, NaN], 1)).toStrictEqual([1]);
    expect(head([1, "123", true, NaN], 2)).toStrictEqual([1, "123"]);
    expect(head([1, "123", true, NaN], 3)).toStrictEqual([1, "123", true]);
    expect(head([1, "123", true, NaN], 4)).toStrictEqual([1, "123", true, NaN]);
    expect(head([1, "123", true, NaN], 5)).toStrictEqual([1, "123", true, NaN]);
  });
});

// tail

describe("tail tests", () => {
  test("empty array", () => {
    expect(tail([])).toStrictEqual([]);
  });

  test("undefined arg", () => {
    expect(tail(undefined)).toEqual([]);
  });

  test("null arg", () => {
    expect(tail(null)).toEqual([]);
  });

  test("non array arg", () => {
    expect(tail({})).toEqual([]);
  });

  test("wrong second arg 1", () => {
    expect(tail([], {})).toEqual([]);
  });

  test("wrong second arg 2", () => {
    expect(tail([], true)).toEqual([]);
  });

  test("wrong second arg 3", () => {
    expect(tail([], [])).toEqual([]);
  });

  test("wrong second arg 4", () => {
    expect(tail([], -123)).toEqual([]);
  });

  test("wrong second arg 5", () => {
    expect(tail([], 0)).toEqual([]);
  });

  test("wrong second arg 6", () => {
    expect(tail([], null)).toEqual([]);
  });

  test("default second arg", () => {
    expect(tail([1, "123", true, NaN], undefined)).toStrictEqual(
      tail([1, "123", true, NaN], 1)
    );
  });

  test("head sunny cases", () => {
    expect(tail([1, "123", true, NaN], 1)).toStrictEqual([NaN]);
    expect(tail([1, "123", true, NaN], 2)).toStrictEqual([true, NaN]);
    expect(tail([1, "123", true, NaN], 3)).toStrictEqual(["123", true, NaN]);
    expect(tail([1, "123", true, NaN], 4)).toStrictEqual([1, "123", true, NaN]);
    expect(tail([1, "123", true, NaN], 5)).toStrictEqual([1, "123", true, NaN]);
  });
});

// objects

describe("objects tests", () => {
  test("empty array", () => {
    expect(objects([])).toStrictEqual([]);
  });

  test("undefined arg", () => {
    expect(objects(undefined)).toEqual(undefined);
  });

  test("null arg", () => {
    expect(objects(null)).toEqual(undefined);
  });

  test("non array arg", () => {
    expect(objects({})).toEqual(undefined);
  });

  test("sunny cases", () => {
    expect(
      objects([123, o1, true, o2, o3, NaN, undefined, o4, null, o5, []])
    ).toStrictEqual([o1, o2, o3, o4, o5]);
  });
});

// vals

describe("vals tests", () => {
  test("empty array", () => {
    expect(vals([])).toStrictEqual([]);
  });

  test("undefined arg", () => {
    expect(vals(undefined)).toEqual(undefined);
  });

  test("null arg", () => {
    expect(vals(null)).toEqual(undefined);
  });

  test("non array arg", () => {
    expect(vals({})).toEqual(undefined);
  });

  test("sunny cases", () => {
    expect(
      vals([123, "123", null, o1, undefined, o2, null, o3, o4])
    ).toStrictEqual([123, "123", o1, o2, o3, o4]);
  });
});

// plain

describe("plain tests", () => {
  test("empty array", () => {
    expect(plain([])).toStrictEqual([]);
  });

  test("undefined arg", () => {
    expect(plain(undefined)).toEqual(undefined);
  });

  test("null arg", () => {
    expect(plain(null)).toEqual(undefined);
  });

  test("non array arg", () => {
    expect(plain({})).toEqual(undefined);
  });

  test("sunny cases", () => {
    const arr = [
      o1,
      npo1,
      npo2,
      123,
      o2,
      null,
      "",
      npo3,
      o3,
      o0,
      NaN,
      null,
      npo4,
      o4,
      o5,
    ];

    expect(plain(arr)).toStrictEqual([o1, o2, o3, o0, o4, o5]);
  });
});

// instances

describe("instances tests", () => {
  test("empty array", () => {
    expect(instances([])).toStrictEqual(undefined);
  });

  test("undefined arg", () => {
    expect(instances(undefined)).toEqual(undefined);
  });

  test("null arg", () => {
    expect(instances(null)).toEqual(undefined);
  });

  test("non array arg", () => {
    expect(instances({})).toEqual(undefined);
  });

  test("wrong second arg 1", () => {
    expect(instances({}, null)).toEqual(undefined);
  });

  test("wrong second arg 2", () => {
    expect(instances({}, 123)).toEqual(undefined);
  });

  test("wrong second arg 3", () => {
    expect(instances({}, "123")).toEqual(undefined);
  });

  class C1 {}
  class C2 {}
  class C3 extends C1 {}
  class C4 extends C3 {}
  class C5 {}

  const i1 = new C1();
  const i2 = new C2();
  const i3 = new C3();
  const i4 = new C4();
  const i5 = new C5();

  test("sunny cases", () => {
    expect(instances([i1, i2, i3, i4, i5], C1)).toStrictEqual([i1, i3, i4]);
    expect(instances([i1, i2, i3, i4, i5], C2)).toStrictEqual([i2]);
    expect(instances([i1, i2, i3, i4, i5], C3)).toStrictEqual([i3, i4]);
    expect(instances([i1, i2, i3, i4, i5], C4)).toStrictEqual([i4]);
    expect(instances([i1, i2, i3, i4, i5], C5)).toStrictEqual([i5]);
  });
});

// bools

describe("bools tests", () => {
  const v1 = true;
  const v2 = false;
  const v3 = new Boolean(true);
  const v4 = new Boolean(false);

  test("empty array", () => {
    expect(bools([])).toStrictEqual([]);
  });

  test("undefined arg", () => {
    expect(bools(undefined)).toEqual(undefined);
  });

  test("null arg", () => {
    expect(bools(null)).toEqual(undefined);
  });

  test("non array arg", () => {
    expect(bools({})).toEqual(undefined);
  });

  test("sunny cases", () => {
    expect(
      bools([
        null,
        v1,
        undefined,
        "",
        v2,
        new Set(),
        v3,
        NaN,
        Infinity,
        v4,
        null,
      ])
    ).toStrictEqual([v1, v2, v3, v4]);
  });
});

// nums

describe("nums tests", () => {
  test("empty array", () => {
    expect(nums([])).toStrictEqual([]);
  });

  test("undefined arg", () => {
    expect(nums(undefined)).toEqual(undefined);
  });

  test("null arg", () => {
    expect(nums(null)).toEqual(undefined);
  });

  test("non array arg", () => {
    expect(nums({})).toEqual(undefined);
  });

  test("sunny cases", () => {
    expect(
      nums([
        1,
        1234.12121,
        null,
        o0,
        NaN,
        o1,
        Infinity,
        -Infinity,
        npo4,
        2323,
        ["2323"],
        0,
        o4,
      ])
    ).toStrictEqual([1, 1234.12121, 2323, 0]);
  });
});

// strings

describe("strings tests", () => {
  test("empty array", () => {
    expect(strings([])).toStrictEqual([]);
  });

  test("undefined arg", () => {
    expect(strings(undefined)).toEqual(undefined);
  });

  test("null arg", () => {
    expect(strings(null)).toEqual(undefined);
  });

  test("non array arg", () => {
    expect(strings({})).toEqual(undefined);
  });

  test("sunny cases", () => {
    expect(
      strings([1, "", NaN, o1, 1234.0, "1234", o2, npo4, "NaN"])
    ).toStrictEqual(["", "1234", "NaN"]);
  });
});
