'use strict';

var goods = [];
 for(var i=0; i < 10; i++){
 	goods[i] = i;
 }

alert(goods);

alert(goods[goods.length-1]);

goods[goods.length] = "Компьютер";

alert(goods);