//change array's length
// let data = [4, 7, 1, 4, 9, 2, 4, 1];
// data.length = 5;
// console.warn(data);

//+, x, - by function
// let data = [4, 7, 1, 4, 9, 2, 4, 1];
// let sum=data.reduce((x, y) =>  x + y);
// console.warn(sum);

//remove duplicate values from array
// let data = [4, 7, 1, 4, 9, 2, 4, 1];
// let unique = new Set(data); //it returns values within object
// console.warn([...unique]); // use destruct to show value in array

//comma operator
// let x = 2;
// x = (x += 10, x);
// console.warn(x);

//swapping with destructuring
// let x = 10;
// let y = 30;
// [x, y] = [y, x];
// console.warn(x, y);

//Nullish Coalescing operator
let users = {
    student: {
        // undefine and null value check ?? operator
        name: '',
        age:0
    }
}
console.warn(users.student.name ?? 'unknown'); // 'unknown' will print if name not define