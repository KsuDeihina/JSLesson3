let a = prompt('Введите число');
let b = prompt('Введите степень');

a = !isNaN(a) ? a : alert('Неверные данные');
b = !isNaN(b) ? b : 2;
a = 0 ? alert('Неверные данные') : a;
b = 0 ? 2 : b;

let num = 1;
for(let i = 1; i <= b; i++) {
        num = num * a;         
    }
    alert(num);


