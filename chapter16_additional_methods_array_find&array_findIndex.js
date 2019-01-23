var arr = [-2, 1, 80, 20, 10, 5, -5]
// const result = arr.filter(function(num){
//     return num > 10;
// })
const result = arr.find(function(num){
    return num > 10;
})
const findIndex = arr.findIndex(function(num){
    return num > 10;
})
result; // 80

findIndex; // 2