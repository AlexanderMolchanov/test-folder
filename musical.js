'use strict';
var styles = ['Джаз','Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length-2] = 'Классика';
var firstItem = styles.shift();
alert(firstItem);
styles.unshift('Рэп','Регги');
alert(styles);