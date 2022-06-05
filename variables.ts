//string, boolean, number,null, undefined
let myName;
myName = 'test';
myName = 7;
myName = true;

let someStr = 'hello world';
//someStr = 5;

//With '|' we can add multiple data types to variable
let multipleDataTypes: string | null = null;
multipleDataTypes = 'test';

//Arrays
let items:string[] = ['test', 'luis'];

//Like that the array will be able to hold only strings or single number
let mixedItems:string[] | number = [];
mixedItems = ['trif','test'];
mixedItems = 5;

//Like that the array will be able to hold only strings or only numbers 
let mixedArr:string[] | number[] = ['trif','test'];
mixedArr =[10,20];

//Like that the array will be able to hold mix of values
let mixes = [5,'luis', false];

//Objects
const account = {
name: 'trif',
balance:10
}
//We can set the types of the property in object like that and with '?' we can make some property optional
const anotatedAccount: {
    name:string,
    balance: number,
    status?:string
} = {
    name: 'Pesho',
    balance: 20
};

// this array will take objects
let accounts: {}[];

//Interfaces
interface IAccount {
    name:string,
    balance: number,
    status?:string,
    deposit?: () => void
}

const anotatedAccount2: IAccount = {
    name: 'Pesho',
    balance: 20
};

//it will say that the objects in the array should be of a type IAccount
let theAccounts: IAccount[];

//Classes
class InvestmentAccount implements IAccount {

    constructor(public name,
        public balance){

    }

    private withdraw(){

    }
}



