// function getConfig() {
//     return {
//         isOn: false,
//         amount: 10
//     }
// }

// const { isOn, amount } = getConfig();
// isOn;
// amount;

var config = {};
function setConfig({isOn, amount}) {
    config = {
        isOn,
        amount
    }
}

setConfig({isOn: true, amount:20});

config;