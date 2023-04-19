/* Excercise a 
Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

function addition (a, b){

    return a + b;
}

var totalAddition= addition(90, 65)
console.log(totalAddition);

/* Excercise b
Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número,
 mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function addition (a, b){
    if(typeof a !== 'number' || typeof b !== 'number' ){
        alert('One of the parameters is not a number');
        return NaN
    }else{
        return a + b;
    }
}
console.log(addition (90, 'number'))

/* Excercise c
Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

function validateInteger (a){
    var validation= a % 1;
    if(validation === 0 ){
        return true
    }else{
        return false
    }
}

console.log(validateInteger (12));

/* Excercise d
Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los
números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).*/

function secondValidation (a, b){
    if(typeof a !== 'number' || typeof b !== 'number' ){
        alert('One of the parameters is not a number');
        return NaN
    }else if(!validateInteger (a) || !validateInteger (b)){
        alert ('Error');
        a = Math.round (a);
        b = Math.round (b);
    }
    return a + b;
}

console.log(secondValidation (42, 22.3))

/* Excercise e
Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando
 que todo siga funcionando igual que en el apartado anterior.*/

function validations (a, b){
    if(typeof a !== 'number' || typeof b !== 'number' ){
        alert('One of the parameters is not a number');
        return NaN
    }else if(!validateInteger (a) || !validateInteger (b)){
        alert ('Error');
        a = Math.round (a);
        b = Math.round (b);
    }

}

function suma (firstnumber, secondnumber){
    var thirdValidation= validations (firstnumber, secondnumber);
    if(typeof thirdValidation === 'number'){
        return thirdValidation;
    }else{
        return firstnumber + secondnumber;
    }
}

console.log(suma (6, 14));
