function Person(name, age, location, sayHello) {
    this.name = name;
    this.age = age;
    this.location = location;

    // this.sayHello = function() {
    //     console.log(`Hi, my name is ${this.name}`)};
} 

Person.prototype.sayHello = function() {
    console.log(`Hi, my name is ${this.name}`);
}

function Student(age, name, location, studentId) {
    Person.call(this, age, name, location);
    this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
    console.log("I'm learning more every day!")
}

function Educator(age, name, location, wage) {
    Person.call(this, age, name, location );
    this.wage = wage;

}

Educator.prototype.work = function() {
    console.log("I have the best job in the world!")
}


module.exports = { Person, Student, Educator }