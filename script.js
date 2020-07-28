"use strict";
let name = "Brandon Robinson";
let age = 32;
let birthday = "July 2nd 1988";
let detroitGC = true;
let lifeEvents = [
  "I was born in Portland, OR",
  "I went to Oakland Community College for two years",
  "I have been a skateboarder for 20 years",
  "I have lived in Hamtramck, MI for 5 years",
];

if (detroitGC) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[0]);
}
let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);
  if (randomNumber !== 5) {
    counter++;
    console.log(randomNumber !== 5);
  } else {
    counter++;
    console.log(
      `5 === 5 it took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
  let hours = 20;
  let wage = 10;
  let totalPaycheck = 0;

  if (hours <= 40) {
    totalPaycheck = hours * wage;
  } else {
    let regularhours = 40 * wage;
    let overtime = (hours - 40) * (wage * 1.5);
    totalPaycheck = regularhours + overtime;
  }
  console.log(totalPaycheck);
}
// let hours = 20;
// let wage = 10;
// let totalPaycheck = wage * hours;

// if (hours <=40) {
//     totalPaycheck = hours * wage;
