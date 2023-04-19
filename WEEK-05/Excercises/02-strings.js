/* excercise a
Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var bootcamp= 'Become a Software Professional';
var bootcampName= bootcamp.toUpperCase();
console.log(bootcampName)

/* excercise b
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var text= 'Radium Rocket';
var newText= text.substring (0,5);
console.log(newText);

/* excersice c
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var secondText= 'Welcome to my website';
var finalText= secondText.substring(18);
console.log(finalText);

/* excercise d
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var thirdText= 'welcome to Radium Rocket';
var result= thirdText.substring(0,1).toUpperCase() + thirdText.substring(1).toLowerCase();
console.log(result);

/* exercise e
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var fourthText= 'Radium Rocket Bootcamp';
var space= fourthText.indexOf(" ");
console.log(space);

/* excercise f
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios
anteriores para generar un nuevo string que tenga la primeraletra de ambas palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

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