/* 
    Exercise #1
*/
// Part 1
let peoples = ['Sofia','David','Juan']; 
console.log(peoples); // ['Sofia', 'David', 'Juan']
// Part 2
peoples.push('Sara','Augustin');
console.log(peoples); // ['Sofia', 'David', 'Juan', 'Sara', 'Augustin']
// The first person in line is called to the teller
peoples.shift();
// Part 3
peoples.splice(1,0,'Elena');
console.log(peoples); // ['Sofia', 'David', 'Elena', 'Juan', 'Sara', 'Augustin']

/* 
    Exercise #2
*/
// Variable stars for input *
let stars = '';
// Loop end where i < 5
for (let i = 0; i < 5; i++) {
    // append star + 1 per round *, **, ***
    stars += '*';
    console.log(stars); 
}
/* 
    Output
*
**
***
****
*****
*/

/* 
    Exercise #3
*/
// - Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,as long as xValue remains positive
// create function decreasingValue & xValue is argument in call function
const decreasingValue = (xValue) => {
    // Loop end where i < xValue
    for (let i = 0; i <= xValue;) {
        console.log(xValue);
        xValue -= 0.5; // xValue - 0.5 || 5-0.5 = 4.5, 4.5-0.5 = 4
    }
}
decreasingValue(5); // 5, 4.5, 4, ...0

// - Print all the odd numbers between 1 - 100.
// Loop end where i < or = 100 
for (let i = 1; i <= 100; i++) {
    // if i % 2 not equal 0
    if (i%2 !== 0) {
        console.log(i); // 1 3 5 7 9 ...99
    }    
}
// Write a method with a while loop to print 1 through n in square brackets.
// function zeroToEnd
const zeroToEnd = (nNumber) => {
    // variable i equal 1
    let i = 1;
    // if i < or equal nNumber run loop
    while (i <= nNumber) {
        console.log(`[${i}]`); // [1] [2] ...[n]
        i++; // i + 1
    }
}
// call function zeroToEnd
zeroToEnd(6);
// Write a method with a while loop that computes the sum of first n positive integers: 
// function sumToEnd
const sumToEnd = (n) => {
    // Variable i for count
    let i = 1;
    // Variable sum id total summary
    let sum = 0;
    // if i < or equal n run loop
    while (i <= n) {
        // sum equal sum + i
        sum += i;
        i++; // i + 1 
    }
    console.log(sum); // case n = 5 output: 15
}
// Call function sumToEnd
sumToEnd(5);