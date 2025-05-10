for (let num = 1; num <= 10; num++) {
    console.log(num ** 2);
}







for (let num = 1; num <= 50; num++) {
    console.log(num);
}








const names = ['ana', 'ben', 'carl', 'dana', 'eva'];
for (let name of names) {
    console.log(`Hello, ${name}!`);
}









for (let num = 100; num >= 0; num -= 10) {
    console.log(num);
}













const numbers = [10, 15, 20, 25, 30, 35, 40];
let evenSum = 0;
for (let num of numbers) {
    if (num % 2 === 0) {
        evenSum += num;
    }
}
console.log("Sum of even numbers:", evenSum);















































