declare type FilterFunction = {
    (arr: Array<any>, param?: any): Array<any> | undefined;
    not?: (arr: Array<any>, param?: any) => Array<any> | undefined;
    plain?: {
        (arr: Array<any>, param?: any): Array<any> | undefined;
        not?: (arr: Array<any>, param?: any) => Array<any> | undefined;
    };
    int?: (arr: Array<any>, param?: any) => Array<any> | undefined;
};
export declare const truthy: FilterFunction;
export declare const head: FilterFunction;
export declare const tail: FilterFunction;
export declare const objects: FilterFunction;
export declare const vals: FilterFunction;
export declare const instances: FilterFunction;
export declare const bools: FilterFunction;
export declare const nums: FilterFunction;
export declare const strings: FilterFunction;
export {};
