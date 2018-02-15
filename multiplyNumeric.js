var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

printFeaters(menu);

multiplyNumeric(menu);

printFeaters(menu);

function multiplyNumeric(obj){

	for(var key in obj){
		if(typeof(obj[key]) == 'string' ){

		}else{
			obj[key] *= 2;
		}
	}

}

function printFeaters(obj){

	for(var key in obj){
		alert ('Свойство: ' + key + ' Значение: ' + obj[key]);
	}
	
}