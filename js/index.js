// Iteration 1: Names and Input
let hacker1 = "Anabela";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ana";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));

let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName);

let firstHacker = "";

for (j = 0; j < hacker1.length; j++) {
    if (hacker1[j] < hacker2[j]) {
        firstHacker = "The driver's name goes first.";
        break;
    } else if (hacker1[j] > hacker2[j]) {
        firstHacker = "Yo, the navigator goes first definitely";
        break;
    } else if (hacker1[j + 1] == null) {
        firstHacker = "The driver's name goes first.";
        break;
    } else if (hacker2[j + 1] == null) {
        firstHacker = "Yo, the navigator goes first definitely";
        break;
    } else if (hacker1[j] == hacker2[j]) {
        firstHacker = "What?! You both have the same name?";
    }
}

console.log(firstHacker);