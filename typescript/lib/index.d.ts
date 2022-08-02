declare type newType = number | string;
declare let a: newType;
declare type funType = (str: string, num: number) => boolean;
declare const fun: funType;
declare const fun1: funType;
declare const fun2: (str: string, num: number) => boolean;
declare const fun3: (str: string, num: number) => boolean;
declare let aa: number;
declare let arr: (string | number | boolean)[];
declare let bb: {
    name: "adam";
} | [];
interface IPerson {
    name: string;
    age?: number;
    properties: string[];
    walk: () => void;
}
declare let obj: IPerson;
interface IEmployee extends IPerson {
    salary?: number;
}
declare let employee: IEmployee;
declare type sizeType = "small" | "medium" | "large";
declare const fun4: (size: sizeType) => void;
declare let size: string;
declare type funType1<T> = (str: T) => boolean;
declare const fun5: funType1<string>;
interface IEmployee1<T> {
    name: "adam";
    age: T;
}
declare const employee1: IEmployee1<string>;
declare const fun6: (arg: number) => void;
