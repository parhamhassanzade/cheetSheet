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

interface G extends Y {} //?combination of interface and type Y into G
type X2 = G & {}; //?combination of interface and type G Into X2

//? when we defin functional component in TS for set Type
const buttonGlobal:React.FC =()=>{}  //? React.FC for functional component React.Node import or accept all of them

//? for set type to state
const [todo,setTodo]=useState<string>(" ") //? it accept every thing of type that i say in above

//! if we have props and set type for props we cant use React.FC for that because its not assignable to react.fc
//! and another reasun is props and parametrs are in Compatible

//? we can set type for function  in 2 way:
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodos: (e: React.FormEvent) => void;
}
const Input:React.FC<Props> =()=>{} //? ....<props>.... -> its type or interface that we defin 
const Input2 =({todo}:Props)=>{}

//? cerate Array of interface or Type:

interface todo{
  id:number;
  content:string;
  idDone:boolean;
}
const [Todo,setTodo]=useState<todo[]>([])

//?defin type for Ref
const InputRef = useRef<HTMLInputElement>(null);
//? for type of ref see what element that we want to set it to that and then set type for that 
