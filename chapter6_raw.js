function tag(strings, ...values) {
    console.log(strings.raw[0]); // ​​​​​Hello my name is\n, and my age is\n.​​​​​
}

const message = tag`Hello my name is\n, and my age is\n.`;


function sumItUp (strings, ...values) {
    // TODO: sum up all interpolated values into a sum variable
    let sum = 0;

    values.forEach( value => sum += value );

    return `the total sum was ${sum}`;
}

const user = "Fiona";
const code = "JavaScript";
const texts = sumItUp`Hello ${user}, happy to coding with ${code}`;

console.log(texts);