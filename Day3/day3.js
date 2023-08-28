alert('Hello JS');
let userInput=prompt('Enter your name:');
let userInput2='Peter Smith';
let userBirthYear=1996;
let userBirthYear2=prompt('Enter your birthyer:');
let isStu=true
console.log(2024+userBirthYear2);

let userEmail;
let userAge=2023-userBirthYear*2;

console.log(userAge);

// template literals
console.log(userInput2+' is a '+(2023-userBirthYear)+' is a student? that is '+isStu);

console.log(`${userInput2} is a ${2023-userBirthYear} years old student? ${isStu}`);

if (userInput==='John Doe') {

    alert('Got you John');
}

else if(userInput==='Peter Smith'){
    alert('Got you Peter Smith');
}
else{
    alert('no such record');
}


(2023-userBirthYear2)>16?console.log('You can apply for driver license'):console.log('Sorry, you can not apply')