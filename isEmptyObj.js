'use strict';

var salaries = {
 "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function count(obj){
	var sum = 0;
	for(var key in obj){

			if( obj[key] > sum ) {
				sum = obj[key];
				var name = key;
			}

	}
	
	if (key == undefined) return 'нет сотрудников';

 return name;
}

alert (count(salaries));
