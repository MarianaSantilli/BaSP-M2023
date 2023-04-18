//Excercise a

var days= ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
for(var i=0; i < days.length; i++){
    alert(days[i]);
}

//Excercise b

for(var i=0; i < days.length; i++){
    alert(days[i][0].toUpperCase()+ days[i].substring(1));
}

//Excercise c

var sentence= '';
for(var i= 0; i< days.length; i++){
    sentence += days[i] + ' ';
}
alert(sentence.trim());

//Excercise d

var emptyArray= [];
for(var i= 0; i <= 9; i ++){
   emptyArray.push(i);
}
console.log(emptyArray);