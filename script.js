// Exercise 1: maxOfTwoNumbers()

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

// Exercise 2: isAdult()

function isAdult(age) {
  if (typeof age !== "number") {
    return "Not a number";
  } else if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log("Exercise 2 Result:", isAdult(21));

// Exercise 3: isCharVowel()

function isCharAVowel(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  } else {
    return false;
  }
}

console.log("Exercise 3 Result:", isCharAVowel("a"));

// Exercise 4: generateEmail()

function generateEmail(string1, string2) {
  let email = string1 + "@" + string2;
  return email;
}

console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

// Exercise 5: greetUser()

function greetUser(name, time) {
  if (time === "morning") {
    return "Good morning, " + name + "!";
  } else if (time === "afternoon") {
    return "Good afternoon, " + name + "!";
  } else {
    return "Good evening, " + name + "!";
  }
}

console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

// Exercise 6: maxOfThree()

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

// Exercise 7: calculateTip()

function calculateTip(num1, num2) {
  return (num1 * num2) / 100;
}

console.log("Exercise 7 Result:", calculateTip(50, 20));

// Exercise 8: convertTemperature()

function convertTemperature(number, string) {
  if (string === "C") {
    return (number * 9) / 5 + 32 + " (Fahrenheit)";
  } else {
    return ((number - 32) * 5) / 9 + " (Celcius)";
  }
}

console.log("Exercise 8 Result:", convertTemperature(32, "C"));

// Exercise 9: basicCalculator()

function basicCalculator(num1, num2, string) {
  if (string === "multiply") {
    return num1 * num2;
  } else if (string === "divide") {
    return num1 / num2;
  } else if (string === "add") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
}

console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));
