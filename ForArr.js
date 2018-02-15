var arr = [5, 4, 3, 8, 0] ;

while(true){
    
    var a = prompt("Введите начало диапазона",0);
    var b = prompt("Введите конец диапазона",0);
    
    if( a === "" || a === null || isNaN(a)){
        alert("Начало диапазона введено неверно!");
    }else if( b === "" || b === null || isNaN(b)){
        alert("Конец диапазона введено неверно!");
    }else{
        a = +a;
        b = +b;
        break;
    }
  
}

var filtered = filterRange(arr, 3, 5);

alert( arr + "\n" + filtered );

function filterRange(arr, a, b){
    
    var newArr = [];
    
    for( var i = 0; i < arr.length; i++){
        if( arr[i] >= a && arr[i] <= b ){
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
    
}