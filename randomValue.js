'use strict';
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var min = 0;
var max = arr.length - 1;


function randNumber(max,min){
 	var rand = min + Math.floor(Math.random()*(max + 1 - min));
 	return rand;
}

var array = [];

for(var i = 0; i < 50; i++ ){
	var num = randNumber(max,min);
	array[i] = arr[num];
}

var a = 0, b = 0, c = 0, d = 0;

for(i = 0; i < 50; i++){
	switch(array[i]){
		case "Яблоко":
			a++;
			break;
		case "Апельсин":
			b++;
			break;
		case "Груша":
			c++;
			break;
		case "Лимон":
			d++;
			break;
	}
}
var massive = [
	[ "Яблоко", a ],
	[ "Апельсин", b ],
	[ "Груша", c ],
	[ "Лимон", d ]
];

alert(massive);