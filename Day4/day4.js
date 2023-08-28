alert('testing');
const userInfo = 'CodeCampUser';


function checkApplication(pAge, vision, writtenTestScore) {
    if (pAge&&vision&&writtenTestScore>60) {
        console.log('You can apply for drivers license')
    }
    // else if () 
    else {
        console.log('Sorry you can not apply')
    }
}

checkApplication(26);
checkApplication(12);

// Practice
/*
let userPrompt = prompt('Enter a variable')

function checkPrompt(userPrompt) {
    if (userPrompt == 1) {
        console.log('Your input is 1')
    }
    else if (userPrompt == 'a') {
        console.log('Your input is a')
    }
    else {
        console.log('Your input is ' + userPrompt)
    }
}
*/

// 2 + 3
//console.log((2>3)&&(3>2))
// ||
// !(isStu)

const checkUser = function(val1, val2) {
    console.log(`function expression example result-input1:${val1}, input2:${val2}`)
}

checkUser('Peter', 'Lucas')

const checkUser2 = () => console.log('Arrow FUNCTION result');
checkUser2();

const userBirthYear = [1990, 1996, 1992]
// const userBirthYear2 = new Array(1990, 1996, 1992)
console.log(userBirthYear.length)
userBirthYear.push(1992)

const stu1 = {
    firstName: 'Peter',
    lastName: 'Smith',
    email: 'Peter@gmail.com'
}

console.log(stu1.firstName)

// Loops
let score = 10;

while (score > 1) {
    console.log('Keep trying... your current score is: ', score);
    score--;
}

// for
for (i in userBirthYear) {
    console.log(i);
    console.log(userBirthYear[i]);
}

for (i = 1; i < userBirthYear.length; i++) {
    console.log(i);
}

// do()
// while()

// Practice
/*
for (i = 1; i < userBirthYear.length; i++) {
    temp = userBirthYear[i];
    console.log('Based on the index ' + userBirthYear[i] + ', the age of the user is ' + (2023 - temp)
}
*/
const userAge = []

function showUserAge() {
    for(let i = 0; i<userBirthYear; i++) {
        showUserAge.push(calAge(userBirthYear[0]));

    }
}

function calAge(val1) {
    return 2023 - val1
}

console.log(' age is: ', calAge(1990));

console.log(showUserAge())
console.log(userAge);
document.querySelector('h1').textContext='Updated h1';
document.querySelector('h1').addEventListener('click', function() {
    alert('Testing again');
})

document.querySelector('button').addEventListener('click', function() {
    alert('Testing again');
    document.querySelector('h1').style.color = 'red';
})