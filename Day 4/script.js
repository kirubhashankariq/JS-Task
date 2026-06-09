// Task 1: Age Category Finder
let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

// Task 2: Salary Hike Calculator

let salary = Number(prompt("Enter salary:"));
let newSalary;

if (salary < 20000) {
    newSalary = salary + (salary * 20 / 100);
} else if (salary <= 50000) {
    newSalary = salary + (salary * 10 / 100);
} else {
    newSalary = salary + (salary * 5 / 100);
}

console.log("Old Salary: ₹" + salary);
console.log("New Salary: ₹" + newSalary);

// Task 3: Electricity Department

let units = Number(prompt("Enter units consumed:"));
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Total Bill: ₹" + bill);

// Task 4: Simple ATM
let balance = 10000;
let amount = Number(prompt("Enter withdrawal amount:"));

if (amount <= balance) {
    balance = balance - amount;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" + balance);
} else {
    console.log("Insufficient Funds");
}
// Task 5: Login Validation

let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

// Task 6: Mobile Recharge Offer
let recharge = Number(prompt("Enter recharge amount:"));

if (recharge >= 499) {
    console.log("Netflix Offer");
} else if (recharge >= 299) {
    console.log("2GB Extra Data");
} else {
    console.log("No Offer");
}

// Task 7: Traffic Signal System

let color = prompt("Enter signal color:");

switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

// Task 8: Employee Attendance

let workingDays = Number(prompt("Enter working days:"));
let presentDays = Number(prompt("Enter present days:"));

let attendance = (presentDays / workingDays) * 100;

console.log("Attendance Percentage: " + attendance + "%");

if (attendance >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// Task 9: Bus Ticket Booking
let ticketPrice = 500;
let tickets = Number(prompt("Enter number of tickets:"));

let total = ticketPrice * tickets;
let gst = total * 5 / 100;
let finalAmount = total + gst;

console.log("Total Amount: ₹" + total);
console.log("GST: ₹" + gst);
console.log("Final Amount: ₹" + finalAmount);

// Task 10: Restaurant Bill

let bill = Number(prompt("Enter food cost:"));
let finalBill;

if (bill > 2000) {
    finalBill = bill - (bill * 10 / 100);
} else {
    finalBill = bill;
}

console.log("Final Bill: ₹" + finalBill);

// Task 11: Police Recruitment
let age = Number(prompt("Enter Age:"));
let height = Number(prompt("Enter Height (cm):"));
let weight = Number(prompt("Enter Weight (kg):"));

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Selected for Police Recruitment");
        } else {
            console.log("Rejected: Weight should be at least 55 kg");
        }
    } else {
        console.log("Rejected: Height should be at least 160 cm");
    }
} else {
    console.log("Rejected: Age should be at least 18 years");
}

// Task 12: Student Result

let mark1 = Number(prompt("Enter Subject 1 Marks:"));
let mark2 = Number(prompt("Enter Subject 2 Marks:"));
let mark3 = Number(prompt("Enter Subject 3 Marks:"));
let mark4 = Number(prompt("Enter Subject 4 Marks:"));
let mark5 = Number(prompt("Enter Subject 5 Marks:"));

let total = mark1 + mark2 + mark3 + mark4 + mark5;
let percentage = total / 5;

console.log("Total Marks: " + total);
console.log("Percentage: " + percentage + "%");

if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// Task 13: Employee Shift Finder
let time = Number(prompt("Enter Time (0-23):"));

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
} else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} else if ((time >= 22 && time <= 23) || (time >= 0 && time < 6)) {
    console.log("Night Shift");
} else {
    console.log("Invalid Time");
}

// Task 14: Loan Eligibility

let age = Number(prompt("Enter Age:"));
let salary = Number(prompt("Enter Salary:"));
let experience = Number(prompt("Enter Experience (Years):"));

if (age >= 21 && salary >= 25000 && experience >= 2) {
    console.log("Eligible for Loan");
} else {
    console.log("Not Eligible for Loan");
}

// Task 15: Cab Fare Calculator

let distance = Number(prompt("Enter Distance (KM):"));
let fare;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Total Fare: ₹" + fare);

// Task 16: Multiplication Table Generator

let num = Number(prompt("Enter a Number:"));

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// Task 17: Password Checker

let length = Number(prompt("Enter Password Length:"));

if (length < 6) {
    console.log("Weak Password");
} else if (length <= 10) {
    console.log("Medium Password");
} else {
    console.log("Strong Password");
}

// Task 18: Company Bonus System

let salary = Number(prompt("Enter Salary:"));
let experience = Number(prompt("Enter Experience (Years):"));

let bonus;

if (experience >= 0 && experience <= 2) {
    bonus = salary * 5 / 100;
} else if (experience >= 3 && experience <= 5) {
    bonus = salary * 10 / 100;
} else {
    bonus = salary * 20 / 100;
}

console.log("Bonus Amount: ₹" + bonus);
console.log("Total Salary: ₹" + (salary + bonus));

// Task 19: Countdown Timer
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

console.log("Happy New Year");

// Task 20: Interview Selection System
let degree = prompt("Degree Completed? (yes/no)");
let communication = prompt("Communication Skill (good/poor)");
let technicalScore = Number(prompt("Enter Technical Score:"));

if (degree.toLowerCase() === "yes") {

    if (communication.toLowerCase() === "good") {

        if (technicalScore >= 70) {
            console.log("Selected for Interview");
        } else {
            console.log("Rejected: Technical Score should be at least 70");
        }

    } else {
        console.log("Rejected: Communication Skill is not Good");
    }

} else {
    console.log("Rejected: Degree Not Completed");
}