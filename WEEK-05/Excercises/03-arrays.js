// Excercise a

var month= ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(month [4], month [10]);

//Excercise b

month.sort();
console.log(month);

//Excersice c

month.push ('year');
month.unshift('calendar');
console.log(month);

//Excercise d

month.pop();
month.shift();
console.log(month);

//Excercise e

month.reverse();
console.log(month);

//Excercise f

var newMonth= month.join('-')
console.log(newMonth);

//Excercise g

var months= ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var monthCopy= months.slice(4, 11);
console.log(monthCopy);