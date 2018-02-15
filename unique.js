var listOfWords = "Ay, I remember syrup sandwiches and crime allowances\nFinesse a nigga with some counterfeits\nBut now I'm countin' this\nParmesan where my accountant lives\nIn fact, I'm downin' this\nD'USSÉ with my boo bae, tastes like Kool-Aid for the analysts\nGirl, I can buy yo' ass the world with my paystub\nOoh, that pussy good, won't you sit it on my taste bloods?\nI get way too petty once you let me do the extras\nPull up on your block, then break it down: we playin' Tetris\nA.M. to the P.M., P.M. to the A.M., funk\nPiss out your per diem, you just gotta hate 'em, funk\nIf I quit your BM, I still ride Mercedes, funk\nIf I quit this season, I still be the greatest, funk\nMy left stroke just went viral\nRight stroke put lil' baby in a spiral\nSoprano C, we like to keep it on a high note\nIts levels to it, you and I know, bitch, be humble";

function uniqueWords(str){
	var word;
	var arr = [];
	arr = str.split(' ');

	var obj = {};

	for (var i = 0; i < arr.length; i++){
		if(arr[i].indexOf('\n') > 0){
			word = arr[i];
			word.splice()
		}

		if(arr[i].lastIndexOf(',') > 0){
			word = arr[i].slice(0 , arr[i].length);
		}

		word = arr[i];
		obj[word] = true;
	}

	var arrUniqueWords = [];

		arrUniqueWords = Object.keys(obj);

	alert(arrUniqueWords);

}

uniqueWords(listOfWords);