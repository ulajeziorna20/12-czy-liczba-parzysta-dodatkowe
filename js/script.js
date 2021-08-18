const evenOrOdd = (number) => {


    let result = Boolean;
    if (number % 2 === 0) {
        result = true;
    } else {
        result = false;
    }

    return result;

}

console.log(evenOrOdd(3));
console.log(evenOrOdd(4));
console.log(evenOrOdd(5));
console.log(evenOrOdd(6));
