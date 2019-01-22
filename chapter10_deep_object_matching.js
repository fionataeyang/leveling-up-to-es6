function getConfig() {
    return {
        isOn: true,
        amount: 20,
        servers: {
            a: false,
            b: 123
        }
    }
}

const { 
    isOn: mySpeaceBool,
    amount: resetTimeOut,
    servers: {
        a: serverA,
        b: serverB
    }
} = getConfig();

mySpeaceBool; // true
resetTimeOut; // 10
serverA; // false
serverB; // 123