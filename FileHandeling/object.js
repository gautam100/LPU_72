
let car = {
    color: "red",
    make: "Maruti",
    model: "2018"
}

console.log(Object.keys(car)); //['color','make','model']

// Hide Key
Object.defineProperty(car,'color',{
    enumerable:false
})
console.log(Object.keys(car)); //['make',model]
console.log(car.color); //red

//Make key read-only
Object.defineProperty(car,'color',{
    writable:false
})
car.color = "green";//This will not over write
console.log(car.color);//red

//prevent deletion
Object.defineProperty(car,'color',{
    configurable: false
})
delete car.color; // This will not delete
console.log(car.color); //red