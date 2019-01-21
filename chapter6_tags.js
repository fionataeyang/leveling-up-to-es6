function tag(strings, ...values) {
    // console.log(strings);
    let message = '';
    strings.forEach( (string, index) => {
        message += string;

        if(index < values.length) {
            message += `<b>${values[index]}</b>`;
        }
    })
    return message;
}

const name = "Bob";
const age = 20;
const message = tag`Hello my name is ${name}, and my age is ${age}.`;

console.log(message);
