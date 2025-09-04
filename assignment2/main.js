console.log("1.Variables and Data Types");
console.log("-------------------------");
const name = "Greg";
const age = 78;
const isStudent = false;

console.log("Name:", name);
console.log("Age:", age);   
console.log("Is Student:", isStudent);
console.log("Type of Name:", typeof name);
console.log("Type of Age:", typeof age);
console.log("Type of Is Student:", typeof isStudent);

console.log("-------------------------");
console.log("2. Basic Arithmetic Operations");
console.log("-------------------------");

const x=5;
const y=8;
console.log("x:", x);
console.log("y:", y);
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);

console.log("-------------------------");
console.log("3. Working with Strings");
console.log("-------------------------");

const strng1 = "This is an example of a string";
console.log("String: ", strng1);
console.log("Length of String:", strng1.length);
console.log("First Character:", strng1.charAt(0));
console.log("Last Character:", strng1.charAt(strng1.length - 1));

console.log("-------------------------");
console.log("4. Math Objects");
console.log("-------------------------");

const negnumber = -10;
console.log("Negative Number:", negnumber);
console.log("Absolute Value:", Math.abs(negnumber));
console.log("Square root:", Math.sqrt(negnumber * -1));
console.log("Number Squared:", Math.pow(negnumber * -1, 2));

console.log("-------------------------");
console.log("5. Boolean Logic and Comparison Operators");
console.log("-------------------------");
const a = 10;
const b = 5;
console.log("a:", a);
console.log("b:", b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("Therefor, a is greater than b");

console.log("-------------------------");
console.log("6. Logical Operators");
console.log("-------------------------");

const t = true;
const f = false;
console.log("t:", t);
console.log("f:", f);
console.log("t AND f:", t && f);
console.log("t OR f:", t || f);
console.log("NOT t:", !t);
console.log("NOT f:", !f);

console.log("-------------------------");
console.log("7. Using Template Literals");
console.log("-------------------------");

const fname = "Susie";
const lname = "Smith";
const fullname = `${fname} ${lname}`;
console.log("First Name:", fname);
console.log("Last Name:", lname);
console.log("Thank you for viewing my assignment 2,", fullname);

