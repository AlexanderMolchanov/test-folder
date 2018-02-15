function unique_1(arr){
	var newArr = [];
	var obj = {};
	for (var i = 0; i < arr.length; i++){
		
		var unique = arr[i].toLowerCase().split('').sort().join('');
		obj[unique] = arr[i];

	}

	for(key in obj) newArr.push(obj[key]);

	return newArr;

}

function unique_2(arr){
	var newArr = [];

	nextIter:
	for(var i = 0; i < arr.length; i++){
		var str = arr[i];
		for(var j = 0; j < newArr.length; j++){
			if(newArr[j] == str) continue nextIter;
		}
		newArr.push(str);
	}

	return newArr;
}

function unique_3(arr){

	var obj = {};
	for (var i = 0; i < arr.length; i++){
		
		var str = arr[i];
		obj[str] = true;

	}

	return Object.keys(obj);
}


var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique_3(strings) );