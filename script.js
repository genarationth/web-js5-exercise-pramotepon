/* 
    Exercise #1
*/
// Part 1
let peoples = ['Sofia','David','Juan']; 
console.log(peoples); // ['Sofia', 'David', 'Juan']
// Part 2
peoples.push('Sara','Augustin');
console.log(peoples); // ['Sofia', 'David', 'Juan', 'Sara', 'Augustin']
// Part 3
peoples.splice(2,0,'Elena');
console.log(peoples); // ['Sofia', 'David', 'Elena', 'Juan', 'Sara', 'Augustin']

/* 
    Exercise #2
*/
let stars = '';
for (let i = 0; i < 5; i++) {
    stars += '*';
    console.log(stars); 
}

/* 
    Exercise #3
*/
// - Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,as long as xValue remains positive
const decreasingValue = (xValue) => {
    for (let i = 0; i <= xValue;) {
        console.log(xValue);
        xValue -= 0.5;
    }
}
decreasingValue(5);

// - Print all the odd numbers between 1 - 100.
for (let i = 1; i <= 100; i++) {
    if (i%2 !== 0) {
        console.log(i);
    }    
}