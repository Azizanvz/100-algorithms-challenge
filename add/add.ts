function add(param1: number, param2: number): number {
    return param1 + param2;
}

function add2(...param1: number[]): number { //typescript allows us to declare arguments type, and we use spread operator

    let sum = 0;
    param1.forEach(num => { // we simply go through the array and sum the values
        sum += num;
    })
    return sum;
}
 console.log(add(1, 2));
// console.log(add(3, 2));

 console.log(add2(1,2,3,4,5));
// console.log(add2(2,3));
