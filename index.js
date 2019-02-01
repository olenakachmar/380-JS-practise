// function solveQuadrEq(a, b, c) {
//     const result = [];
//
//     if(a !== Number & b !== Number & c !== Number){
//         console.log('Please, enter number')
//     }else if(a===null & b===null & c===null){
//         console.log('Something went wrong')
//     }else if(a===0 & b===0 & c===0){
//         console.log('Please, don\'t put everywhere 0')
//     } else if (a===0){
//         console.log('Not a quadratic equation')
//     }else {
//         const diskr = calkDisk(a, b, c);
//
//         result.push(((-1 * b + diskr) / 2 * a));
//         result.push(((-1 * b - diskr) / 2 * a));
//         return result;
//     }
// }
//
// function calkDisk(a, b, c) {
//     return b * b - 4 * a * c;
// }
//  console.log(solveQuadrEq(null, 0, null));



const a = parseFloat(prompt('Enter A', 1));
const b = parseFloat(prompt('Enter B', 5));
const c = parseFloat(prompt('Enter C', 2));

if(a !== Number & b !== Number & c !== Number){
    alert('Please, enter number')
}else if(a===0 & b===0 & c===0){
    alert('Please, don\'t put everywhere 0')
} else if (a===0){
    alert('Not a quadratic equation')
}else {
    function solveQuadrEq(a, b, c) {
        const diskr = calkDisk(a, b, c);
        const result1 = (((-1 * b + diskr) / 2 * a));
        const result2 = (((-1 * b - diskr) / 2 * a));

        alert(result1 + " ;" + result2);
    }
}


function calkDisk(a, b, c) {
    return b * b - 4 * a * c;
}