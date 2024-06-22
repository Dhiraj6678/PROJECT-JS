                      // Answer 1



class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.error("Invalid deposit amount. Amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else if (amount <= 0) {
      console.error("Invalid withdrawal amount. Amount must be positive.");
    } else {
      console.error("Insufficient funds.");
    }
  }

  getBalance() {
    console.log(`Current balance: $${this.balance}`);
  }
}


                    // Answer 2

class Student {
  constructor(name, studentId) {
    this.name = name;
    this.studentId = studentId;
    this.enrolledCourses = [];
  }

  enrollCourse(course) {
    this.enrolledCourses.push(course);
    console.log(`${this.name} enrolled in ${course}`);
  }

  displayEnrolledCourses() {
    if (this.enrolledCourses.length === 0) {
      console.log(`${this.name} is not enrolled in any courses.`);
    } else {
      console.log(`${this.name}'s enrolled courses:`);
      this.enrolledCourses.forEach(course => console.log(course));
    }
  }
}

class Admission {
  constructor() {
    this.students = [];
    this.courses = [];
  }

  addStudent(student) {
    this.students.push(student);
    console.log(`${student.name} has been added to the student list.`);
  }

  addCourse(course) {
    this.courses.push(course);
    console.log(`${course} has been added to the course list.`);
  }

  enrollStudent(studentId, course) {
    const student = this.students.find(s => s.studentId === studentId);
    if (student) {
      student.enrollCourse(course);
    } else {
      console.error(`Student with ID ${studentId} not found.`);
    }
  }

  displayEnrolledStudents(course) {
    const enrolledStudents = this.students.filter(s => s.enrolledCourses.includes(course));
    if (enrolledStudents.length === 0) {
      console.log(`No students are enrolled in ${course}.`);
    } else {
      console.log(`Students enrolled in ${course}:`);
      enrolledStudents.forEach(s => console.log(s.name));
    }
  }
}


                        // Answer 3


class Temperature {
  constructor() {
    this._celsius = 0;
    this._fahrenheit = 32;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (typeof value !== 'number') {
      console.error("Invalid Celsius temperature. Must be a number.");
      return;
    }
    this._celsius = value;
    this._fahrenheit = (value * 9 / 5) + 32;
  }

  get fahrenheit() {
    return this._fahrenheit;
  }

  set fahrenheit(value) {
    if (typeof value !== 'number') {
      console.error("Invalid Fahrenheit temperature. Must be a number.");
      return;
    }
    this._fahrenheit = value;
    this._celsius = (value - 32) * 5 / 9;
  }
}


                      // Answer 4

class Shape {
  constructor() {
    this.area = 0;
    this.perimeter = 0;
  }

  calculateArea() {
    // Default implementation: do nothing
    console.log("Area calculation not implemented for this shape.");
  }

  calculatePerimeter() {
    // Default implementation: do nothing
    console.log("Perimeter calculation not implemented for this shape.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    this.area = Math.PI * Math.pow(this.radius, 2);
    console.log(`Area of the circle: ${this.area.toFixed(2)}`);
  }

  calculatePerimeter() {
    this.perimeter = 2 * Math.PI * this.radius;
    console.log(`Perimeter of the circle: ${this.perimeter.toFixed(2)}`);
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    this.area = this.length * this.width;
    console.log(`Area of the rectangle: ${this.area}`);
  }

  calculatePerimeter() {
    this.perimeter = 2 * (this.length + this.width);
    console.log(`Perimeter of the rectangle: ${this.perimeter}`);
  }
}

class Triangle extends Shape {
  constructor(base, height, side1, side2) {
    super();
    this.base = base;
    this.height = height;
    this.side1 = side1;
    this.side2 = side2;
  }

  calculateArea() {
    this.area = (this.base * this.height) / 2;
    console.log(`Area of the triangle: ${this.area}`);
  }

  calculatePerimeter() {
    this.perimeter = this.base + this.side1 + this.side2;
    console.log(`Perimeter of the triangle: ${this.perimeter}`);
  }
}


                          // Answer 5


class Product {
  constructor(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
}

class Inventory {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    if (product instanceof Product) {
      this.products.push(product);
      console.log(`Product '${product.name}' added to inventory.`);
    } else {
      console.error("Invalid product object. Must be an instance of Product.");
    }
  }

  deleteProduct(productName) {
    const index = this.products.findIndex(product => product.name === productName);
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log(`Product '${productName}' deleted from inventory.`);
      return true;
    } else {
      console.error(`Product '${productName}' not found in inventory.`);
      return false;
    }
  }
}


                
                        