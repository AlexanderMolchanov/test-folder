var array = [];

while(true){
    var a = prompt('Введите число',0);
    
    if( a === ''|| a === null || isNaN(a)) break;
    array.push(+a);
}

var sum = 0;

for(var i= 0; i < array.length; i++){
    sum += array[i];
}

alert(sum);