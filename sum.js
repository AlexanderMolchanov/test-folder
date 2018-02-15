function sumTo(n){
	if ( n != 0 ){
		return ( n + sumTo(n-1) );
	}else {
		return n;
	}
}

function sumTo_2(n){
	var sum = 0;
	while(n != 0 ){
		sum += n;
		n--;
	}
	return sum;
}

function sumTo_3(n){
	var a1 = 1;
	var sum = (2*a1 + (n - 1))*n/2;
	return sum;
}

function sumTo_4(n){
	var sum = 0;
	for (var i = 1; i <= n; i++){
		sum += i;
	}
	return sum;
}

var n = +prompt('num',20);
alert('рекурсивно найдено: ' + sumTo(n));

alert('через цикл while: ' + sumTo_2(n));

alert('через формулу: ' + sumTo_3(n));

alert('через цикл for: ' + sumTo_4(n));

