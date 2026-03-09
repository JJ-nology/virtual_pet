/*Goal: Write a program that simulates a day in the life of a virtual pet! You will set up the rules for how your pet behaves, and then run a sequence of events to see what happens.
Requirements:
Set up your pet's stats: Create variables for petName, energy, hunger, and happiness. Give them starting number values (e.g., 50). Note: For hunger, a higher number means they are more hungry!
Create your action functions:
feed(): Should decrease hunger and increase energy. Rule: Use an if/else statement to check if hunger is already less than 10. If it is, console.log that the pet refuses to eat!
play(): Should increase happiness and hunger, but decrease energy. Rule: Use an if/else statement to check if energy is less than 20. If it is, console.log that the pet is too tired to play.
sleep(): Should greatly increase energy and slightly increase hunger.
checkStatus(): Should console.log all of the pet's current stats so you can read them.
Simulate the Day: * At the very bottom of your code, call your functions in whatever order you want to create a story for the day. (e.g., check stats, feed, play, play again, sleep, check stats).
Open your terminal and run your program!*/

const petName = "Poppy";
let energy = Math.ceil(Math.random() * 100);
let hunger = Math.ceil(Math.random() * 100);
let happiness = Math.ceil(Math.random() * 100);

const feed = () => {
  if (hunger < 10) {
    return `\n${petName} refuses to eat`;
  } else {
    hunger -= 200;
    energy += 10;
    return `\n${petName} ate some delicious food.`;
  }
};

const play = () => {
  if (energy < 20) {
    return `\n${petName} is too tired to play.`;
  } else {
    happiness += 10;
    hunger += 10;
    energy -= 20;
    return `\n${petName} had a great time playing.`;
  }
};

const sleep = () => {
  energy += 50;
  hunger += 20;
  return `\n${petName} is well rested now.`;
};

const checkStatus = () => {
  return `\n${petName}'s current status:\nHunger is at ${hunger},\nEnergy is at ${energy},\nand Happiness is at ${happiness}`;
};
console.log(
  checkStatus(),
  feed(),
  play(),
  feed(),
  play(),
  play(),
  sleep(),
  checkStatus()
);
