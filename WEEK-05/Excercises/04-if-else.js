//excercise a

var randomNumber= Math.random ();

if (randomNumber >= 0.5) {
    alert('Greater than or equal to 0,5');
    console.log('Greater than or equal to 0,5');
} else {
    alert('Lower than 0,5');
    console.log('Lower than 0,5');
}

//excercise b

var age= 47;
console.log(age);

if(age < 2){
    alert('Baby');
}else if ((age > 2) && (age < 12)){
    alert('Child');
} else if ((age > 12) && (age < 19)) {
    alert('Teen');
}else if ((age > 19) && (age < 30)){
    alert('Young');
}else if ((age > 31) && (age < 60)){
    alert('adult');
}else if ((age > 60) && (age < 75)){
    alert('elderly');
}else{
    (age > 75)
    alert ('Old Man');
}
