//power
alert('Здравствуйте!');
function pow(a, n) {
var result = a;
 for (var i = 1; i < n; i++) {
   result *= a;
}
 return result;
}
var a = prompt('Введите число:', '');
var n = prompt('Укажите степень:', '');
alert(pow(a,n));
console. log( pow(a, n) );

//check name
var arr = [];
for (var i = 0; i < 5; i++){
  arr.push(prompt('Введите ' + (i+1) + '-е имя'));
}
var userName = prompt('Введите имя');
var rightName = false;
for (var i = 0; i < arr.length; i++){
  if (arr [i] == userName) {
    rightName = true;
    alert(userName + ', рады видеть Вас!');
    break;
  }
  if (!rightName){
    alert('Ошиблись дверью.');
    break;
  }
}
