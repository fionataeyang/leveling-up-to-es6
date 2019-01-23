
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
        }, 100)    
    })
}

Promise.all([getName(), getAge()]).then( ([name, age]) => {
    console.log(name, age); // bob 10
})

// Race will get the first result and show the first result.
Promise.race([getName(), getAge()])
       .then( (value) => { 
           console.log(value);  // 10
        } );