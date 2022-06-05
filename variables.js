//string, boolean, number,null, undefined
var myName;
myName = 'test';
myName = 7;
myName = true;
var someStr = 'hello world';
//someStr = 5;
//With '|' we can add multiple data types to variable
var multipleDataTypes = null;
multipleDataTypes = 'test';
//Arrays
var items = ['test', 'luis'];
//Like that the array will be able to hold only strings or single number
var mixedItems = [];
mixedItems = ['trif', 'test'];
mixedItems = 5;
//Like that the array will be able to hold only strings or only numbers 
var mixedArr = ['trif', 'test'];
mixedArr = [10, 20];
//Like that the array will be able to hold mix of values
var mixes = [5, 'luis', false];
//Objects
var account = {
    name: 'trif',
    balance: 10
};
//We can set the types of the property in object like that and with '?' we can make some property optional
var anotatedAccount = {
    name: 'Pesho',
    balance: 20
};
// this array will take objects
var accounts;
var anotatedAccount2 = {
    name: 'Pesho',
    balance: 20
};
//it will say that the objects in the array should be of a type IAccount
var theAccounts;
//Classes
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
