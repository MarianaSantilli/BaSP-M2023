// excercise a
var bootcamp= 'Become a Software Professional';
var bootcampName= bootcamp.toUpperCase();
console.log(bootcampName)

//excercise b
var text= 'Radium Rocket';
var newText= text.substring (0,5);
console.log(newText);

//excersice c
var secondText= "Welcome to my website";
var finalText= secondText.substring(18);
console.log(finalText);

//excercise d
var thirdText= 'welcome to Radium Rocket';
var firstletter= thirdText.substring(0,1).toUpperCase();
var restText= thirdText.substring(1).toLowerCase();
var result= thirdText.substring(0,1).toUpperCase() + thirdText.substring(1).toLowerCase();
console.log(result);

//exercise e
var fourthText= 'Radium Rocket Bootcamp';
var space= fourthText.indexOf(" ");
console.log(space);

//excercise f
var fifthText= 'welcome everyone';
var firstspace= fifthText.indexOf(' ');
var welcome= fifthText.substring(0, firstspace);
var everyone= fifthText.substring(firstspace + 1);
var capitalLetter= welcome.substring(0,1).toUpperCase();
var letters= welcome.substring(1).toLowerCase();
var capitalLeterTwo= everyone.substring(0,1).toUpperCase();
var letterTwo= everyone.substring(1).toLocaleLowerCase();
var welcomeEveryone=capitalLetter + letters + (' ') + capitalLeterTwo + letterTwo;
console.log(welcomeEveryone);