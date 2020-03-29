declare module "nanofilters";

/**
 * Excludes false, 0, null, undefined, ''
 * @param arr
 * @return output array
 */
declare function truthy(arr: Array<any>): Array<any> | undefined;

declare namespace truthy {
  /**
   * Opposite for truthy()
   * @param arr
   * @return output array
   */
  function not(arr: Array<any>): Array<any> | undefined;
}

/**
 * Selects N head elements
 * @param arr - input array
 * @param n - number of items to include (defaults to 1)
 * @return output array
 */
declare function head(arr: Array<any>, n: number): Array<any> | undefined;

/**
 * Selects N tail elements
 * @param arr - input array
 * @param n - number of items to include (defaults to 1)
 * @return output array
 */
declare function tail(arr: Array<any>, n: number): Array<any> | undefined;

/**
 * Selects objects only
 * @param arr
 * @return output array
 */
declare function objects(arr: Array<any>): Array<any> | undefined;

declare namespace objects {
  /**
   * Selects only plain objects (null proto or Object.prototype)
   * @param arr
   * @return output array
   */
  function not(arr: Array<any>): Array<any> | undefined;

  /**
   * Get plain objects only (prototype is Object or null)
   * @param arr
   * @return output array
   */
  function plain(arr: Array<any>): Array<any> | undefined;

  namespace plain {
    /**
     * Opposite for plain()
     * @param arr
     * @return output array
     */
    function not(arr: Array<any>): Array<any> | undefined;
  }
}

/**
 * Excludes null and undefined
 * @param arr
 * @return output array
 */
declare function vals(arr: Array<any>): Array<any> | undefined;

declare namespace vals {
  /**
   * Opposite for vals()
   * @param arr
   * @return output array
   */
  function not(arr: Array<any>): Array<any> | undefined;
}

/**
 * Selects only instances of C
 * @param arr
 * @param c
 * @return output array
 */
declare function instances(arr: Array<any>, c: any): Array<any> | undefined;

declare namespace instances {
  /**
   * Opposite for instances()
   * @param arr
   * @param c
   * @return output array
   */
  function not(arr: Array<any>, c: any): Array<any> | undefined;
}

/**
 * Selects only true, false and instances of Boolean
 * @param arr
 * @return output array
 */
declare function bools(arr: Array<any>): Array<any> | undefined;

declare namespace bools {
  /**
   * Opposite for bools()
   * @param arr
   * @return output array
   */
  function not(arr: Array<any>): Array<any> | undefined;
}

/**
 * Selects numbers excluding Infinites and NaN
 * @param arr
 * @return output array
 */
declare function nums(arr: Array<any>): Array<any> | undefined;

declare namespace nums {
  /**
   * Opposite for nums()
   * @param arr
   * @return output array
   */
  function not(arr: Array<any>): Array<any> | undefined;

  /**
   * Selects integer numbers only
   * @param arr
   * @return output array
   */
  function int(arr: Array<any>): Array<any> | undefined;
}

/**
 * Selects strings only
 * @param arr
 * @return output array
 */
declare function strings(arr: Array<any>): Array<any> | undefined;

declare namespace strings {
  /**
   * Opposite for strings()
   * @param arr
   * @return output array
   */
  function not(arr: Array<any>): Array<any> | undefined;
}
