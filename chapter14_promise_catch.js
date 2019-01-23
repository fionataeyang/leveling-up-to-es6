function getName() {
    return new Promise((resolve, reject)=> {
        // reject('an error is occurred');
        // throw new Error('an error is occurred'); 
        // throw new Exception('an error is occurred'); 
        const obj = {};
        obj.x.y.d;
    })
}

getName()
    .then( 
        name => {
            console.log(name) 
        } 
    )
    .catch( 
        err => {
            // console.log(err)  // ​​​​​1. an error is occurred]​​​​​
            // console.log(err)  // ​​​​​2. [Error: an error is occurred]​​​​​
            // console.log(err)  // ​​​​​3. ​​​​​[ReferenceError: Exception is not defined]​​​​​
            console.log(err)  // ​​​​​4. [​​​​​[TypeError: Cannot read property 'y' of undefined]​​​​​]​​​​​
        }
    );


/* 
   * Write a Promise
   * Implement a function which returns a promise which 
   * resolve when the parameter passed in it true, 
   * and rejects when the parameter passed in is falls
*/
function getIdentityPromise(shouldResolve) {
    // TODO: Implement me to return a resolved project when shouldResolve is true, 
    // and return a rejected promise when shouldResolve is false
    return new Promise( (resolve, reject) => {
        shouldResolve ? resolve(true) : reject(false);
    })
}

getIdentityPromise(true)
    .then(result => {
        console.log(result);
    })