// const myPromise = new Promise( (resolve, reject) => {
//     resolve('bob');
// })

// async function main() {
//     const a = await myPromise;
//     console.log(a);
// }

// function getName() {
//     return Promise.resolve('bob');
// }
// function getAge() {
//     return Promise.resolve(10);
// }

// async function main() {
//     const name = await getName();
//     const age = await getAge();
    
//     console.log(name); // bob
//     console.log(age); // 10
// }

function getName() {
    return Promise.resolve('bob');
}
function getAge() {
    // return Promise.reject('an error occurred');
    return Promise.resolve(10);
}

async function main() {
    try {
        const [name, age] = await Promise.all( [getName(), getAge()] );
        console.log(name); // bob
        console.log(age); // 10
    } catch (err) {
        console.log(err); // an error occurred
    }
}

main();