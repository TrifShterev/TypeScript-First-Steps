//We can use any function as decorator like that
function MenuItem(target: Function){
target.prototype.id = "menu"
}

//Its recomended to use decorator functions with CLOSURE

function MenuItemClosure(itemID: string){
    return (target: Function) => {
        target.prototype.id = itemID;
    }
}

@MenuItem
class Pizza{
id: string;
}

@MenuItemClosure('someValue')
class Hamburger{
id: string;
}

console.log(new Pizza().id)
console.log(new Hamburger().id)