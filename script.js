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
// print ค่าของตัวแปรออกมาเรื่อยๆโดยลดลงทีละ 0.5 ทำตลอดที่มีค่ายังเป้น +
const decreasingValue = (xValue) => {
    for (let i = 0; i <= xValue;) {
        console.log(xValue);
        xValue -= 0.5;
    }
}
decreasingValue(5);