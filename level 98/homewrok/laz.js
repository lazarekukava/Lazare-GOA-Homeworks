function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;


  this.getDescription = function () {
    return `${this.make} ${this.model} (${this.year})`;
  };


  this.age = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  };
}


const car1 = new Car("Toyota", "Corolla", 2015);
const car2 = new Car("Ford", "Mustang", 2020);
const car3 = new Car("Tesla", "Model 3", 2023);

console.log(car1.getDescription());
console.log(car2.getDescription()); 
console.log(car3.getDescription()); 

console.log(`Car 1 is ${car1.age()} years old.`);
console.log(`Car 2 is ${car2.age()} years old.`);
console.log(`Car 3 is ${car3.age()} years old.`);


function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.getArea = function () {
    return this.width * this.height;
  };

  this.getPerimeter = function () {
    return 2 * (this.width + this.height);
  };
}

const rect = new Rectangle(5, 10);
console.log(`Area: ${rect.getArea()}`);
console.log(`Perimeter: ${rect.getPerimeter()}`);