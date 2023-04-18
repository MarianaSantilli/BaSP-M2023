//Excercise a

function addition (a, b){

    return a + b;
}

var totalAddition= addition(90, 65)
console.log(totalAddition);

//Excercise b

function addition (a, b){
    if(typeof a !== 'number' || typeof b !== 'number' ){
        alert('One of the parameters is not a number');
        return NaN
    }else{
        return a + b;
    }
}
console.log(addition (90, 'number'))

//Excercise c

function validateInteger (a){
    var validation= a % 1;
    if(validation === 0 ){
        return true
    }else{
        return false
    }
}

console.log(validateInteger (12));

//Excercise d

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

//Excercise e

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
