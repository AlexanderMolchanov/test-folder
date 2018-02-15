var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function printList(list){
	var tmp;

	while(list){
		alert(list.value);
		tmp = list.next;
	}

}


function printReverseList(list) {
  var arr = [];
  var tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}

printReverseList(list);