console.log("hello World");

//Exercise 1: maxOfTwoNumbers()


const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

//Excercise 2:  isAdult()

function isAdult(age) {
    if (age >= 18) {
      return 'Adult';
    } else {
      return 'Minor';
    }
  }
  
  console.log(isAdult(21)); // Output: 'Adult'
  console.log(isAdult(17)); // Output: 'Minor'


  // Excercise 3; is char a vowel

  function isCharAVowel(char) {
      
    // Check if the character is one of the vowels: 'a', 'e', 'i', 'o', or 'u'
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return true;
    } else {
      return false;
    }
  }
  
  console.log('Exercise 3 Result:', isCharAVowel('a')); 


  // Excercise 4 ; generate email

  function generateEmail(name, domain) {
       return name + "@" + domain;
  }
  console.log('Exercise 4 Result:', generateEmail("jonsmith", "example.com")); // 
  

  // Excercise 5; GreetUser

  function greetUser(name, timeOfDay) {
        return "Good " + timeOfDay + ", " + name + "!";
  }

  console.log('Exercise 5 Result:', greetUser("Sam", "morning"));   
  console.log('Exercise 5 Result:', greetUser("Alice", "afternoon")); 
  console.log('Exercise 5 Result:', greetUser("Bob", "evening"));    


  // Excercise 6; Max of three

  function maxOfThree(num1, num2, num3) {
        return Math.max(num1, num2, num3);
  }
  console.log('Exercise 6 Result:', maxOfThree(5, 10, 8)); 
    console.log('Exercise 6 Result:', maxOfThree(17, 4, 9));  
  console.log('Exercise 6 Result:', maxOfThree(1, 1, 1));   
  console.log('Exercise 6 Result:', maxOfThree(-5, 0, 3));  
  
//   Excercise 7; calculate tip

function calculateTip(billAmount, tipPercentage) {
       return (billAmount * tipPercentage) / 100;
  }
  
  console.log('Exercise 7 Result:', calculateTip(50, 20)); // Output: 10
  
  console.log('Exercise 7 Result:', calculateTip(100, 15)); // Output: 15
  console.log('Exercise 7 Result:', calculateTip(200, 10)); // Output: 20
  console.log('Exercise 7 Result:', calculateTip(80, 18));  // Output: 14.4
  

  //Excercise 8 converttemperature
  function convertTemperature(temperature, scale) {
    if (scale === 'C') {
          return (temperature * 9) / 5 + 32;
    } else if (scale === 'F') {
      // Convert Fahrenheit to Celsius: (°F − 32) × 5/9 = °C
      return (temperature - 32) * 5 / 9;
    } else {
      return 'Invalid scale. Use "C" for Celsius or "F" for Fahrenheit.';
    }
  }
  
  // Test the function with the provided examples
  console.log('Exercise 8 Result:', convertTemperature(32, 'C')); 
  console.log('Exercise 8 Result:', convertTemperature(32, 'F')); 
  console.log('Exercise 8 Result:', convertTemperature(100, 'C')); 
  console.log('Exercise 8 Result:', convertTemperature(212, 'F')); /
  