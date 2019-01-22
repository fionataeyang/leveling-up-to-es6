/* reference
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol
*/

const symbolA = Symbol.for('my unique key');
const symbolB = Symbol.for('my unique key');
console.log(symbolA === symbolB); // true

const capsSplitter = {
    [Symbol.split] (string) {
        return string
            .split(' ')
            .map( s => s.toUpperCase());
    }
}

const message = "Hello world";
const splits = message.split(capsSplitter);

splits;

const text = message.split(' ').map( s => s.toUpperCase());

text;