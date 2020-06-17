function absoluteValuesSumMinimization(a: number[]): number { // median number

    const isEven = a.length % 2 === 0; // first, we need to check if number of elements in the arrays is even

    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]; // if even we take one on the left as median, else the one in the middle
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));