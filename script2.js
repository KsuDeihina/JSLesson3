

do {
    var a = prompt('Введите количество строк');
} while (a == 0)
a = isNaN(a) ? 5 : a

do {
    var b = prompt('Введите символ отступа');
} while (b == "")

do {
    var c = prompt('Введите последний символ');
} while (c == "")

var str = String(b);
var num = String(c);
for(let i = 0; i < a; i++){
    num = str + num;
    console.log(num);
}


