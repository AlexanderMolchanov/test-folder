function camelize(str){
	var arr = str.split(' ');

	for( var i = 0; i < arr.length; i++){
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	var str =  arr.join('');
	alert(str);

}

var str = prompt('Put in your text:');
alert('You entered: " ' + str + "'");

camelize(str);