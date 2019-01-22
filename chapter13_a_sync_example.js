// There would be using async() instead of yield

function getName() {
    setTimeout(()=>{
        iter.next('bob');
    }, 2000)
}

function getAge() {
    setTimeout(()=>{
        iter.next(10);
    }, 0) // timer is no matter to generator function
}

let iter = (function* (){
    let name = yield getName();
    console.log(name); // bob
    let age = yield getAge();
    console.log(age); // age
}())

iter.next();



