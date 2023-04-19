/* Excercise a
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
"Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var month= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(month [4], month [10]);

/*Excercise b
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

month.sort();
console.log(month);

/*Excersice c
Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

month.push ('year');
month.unshift('calendar');
console.log(month);

/*Excercise d
Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

month.pop();
month.shift();
console.log(month);

/*Excercise e
Invertir el orden del array (utilizar reverse).*/

month.reverse();
console.log(month);

/*Excercise f
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

var newMonth= month.join('-')
console.log(newMonth);

/*Excercise g
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var months= ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var monthCopy= months.slice(4, 11);
console.log(monthCopy);