//?cheetsheet for type script
//?all i learn and take note
//! recommended to install prettier extention

let Name: string = "parham"; //!defin type for varibale-STRING

let Booolean: Boolean = true; //!BOOLEAN

let aRRy: string[]; //!defin ARRY in typeScrip

//!when we one to defin varible that have accept tow type like one number and string
let Roles: [number, string]; //?[5,students]

//! OBJECT
//?for object we have to defibe interface for that-->NOTIC=>we have to define all off the subject under ubject
type Person = {
  name: string;
  age: number;
};
//? then
let Person: Person = {
  name: "parham",
  age: 0,
};
//?if on if the subject of object is not requierd defin interface like that
type Person2 = {
  name: string;
  age?: number; //age is not requird to defind in this object
};
let Person2: Person2 = {
  name: "parham",
};

//? arry of object
let alotOfPerson: Person[];

//!Accept number OR string
let age: number | string;

//!FUNCTION

//? 1
let printName: Function;

//? 2
let printName2: (name: string) => void; //return undefind
let printName3: (name: string) => never; //return anything

//!Any and Unknown
//?when we dont know the type of variable
let PersonAge: unknown; //*recommended
let PersonAge2: any;

//!Type & Interface
//?both of them are useFull

type X = {
  a: string;
  b: number;
};
type Y = X & {
  c: boolean;
  d: number;
}; //? now type Y have all property of X and Y

interface Z {
  a: string;
  b: number;
}
interface G extends Z {
  f: string;
  h: number;
} //?now interface G eztends from Z and have Z properties
