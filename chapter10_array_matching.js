
// function getConfig() {
//     return [
//         true,
//         10,
//         1,
//         2,
//         3,
//         4,
//         5
//     ]
// }

// const [isOn, amount, ...rest] = getConfig();
// isOn; // true
// amount; // 10
// rest; // ​​​​​[ 1, 2, 3, 4, 5 ]​​​​​

var isOn = false;
var amount = 10;

function setConfig([_isOn, _amount]) {
    isOn = _isOn;
    amount = _amount;
}

setConfig([true, 20]);

isOn;
amount;