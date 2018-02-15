var array = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert(aclear(array));

function aclear(arr){
	var obj = {

	}

	for (var i = 0; i < arr.length; i++){
		var sorted = arr[i].toLowerCase().split('').sort().join('');

		obj[sorted] = arr[i];
	}


	var result = [];

	for(key in obj) result.push(obj[key]);

	return result;
}