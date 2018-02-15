function filterRangeInPlace(arr, a, b){
	for(var i = arr.length; i >= 0; i--){
		if(arr[i] > b || arr[i] < a){
			arr.splice(i,1);
		
		}
	}

	return arr;
}
var arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert( arr );