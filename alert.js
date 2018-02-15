function pow(x , n){
	var result = 1;
	for (var i = 0; i < n; i++){
	
		result *= x;
	}

	return result;

}

function int(n){
	while(n > 1){
		n--;
	}
	if( n > 0 && n < 1){
		return false;
	} else return true;
}

var x = +prompt('enter X');
var n = +prompt('enter n');
if ( int(n) ){
	alert (x + '^' + n + ' = ' + pow(x,n));
} else{
	alert ('n needs to be integer');
}
