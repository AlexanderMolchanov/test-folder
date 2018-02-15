function isEmpty(obj) {
  for (var key in obj) {
    return "что-то появилось";
  }
  return 'empty';
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false