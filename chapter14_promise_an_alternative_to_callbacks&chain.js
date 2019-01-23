// function getName(cb) {
//     setTimeout(()=>{
//         cb('bob')
//     }, 1000)
// }
// function getAge(cb) {
//     setTimeout(()=>{
//         cb(10)
//     }, 1000)
// }

// getName((name)=>{
//     console.log(name);
//     getAge((age)=>{
//         console.log(age);
//     })
// })
function getName() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve('bob')
        }, 1000)    
    })
}
function getAge() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10)
        }, 4000)    
    })
}

getName()
    .then(name => { 
            console.log(name); // bob
            return getAge();
    })
    .then(age => {
        console.log(age); // 10
        return 'lol';
    })
    .then(text => {
        console.log(text);
    })

