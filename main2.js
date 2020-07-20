//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2 Два плюса перед переменной означает - увеличивается сразу после выполнения кода.
//d = b++; alert(d);           // 1 Два плюса после переменной означает - что переменная увеличится после выполнения действия
//c = (2+ ++a); alert(c);      // 5 - Равносильно с = 2 + 3, т.к. a, уже была увеличена, а ++ перед переменной сначала увеличивает переменную 
//d = (2+ b++); alert(d);      // 4 - b-равен 2. Равносильно d = 2+2 - После выполнения сложения, b - будети равен 3, т.к. ++ после переменной
//alert(a);                    // 3 - Объяснил в 4 строчке
//alert(b);                    // 3 - Объяснил в 5 строчке

////ВТОРОЕ ЗАДАНИЕ

//let a = 2;
//let x = 1 + (a *= 2);

//alert(x) // - Ответ будет равен 5, т.к. выражение (a *= 2) можно записать слеюущим образом - a=a*2. Полностью пример будет выглядеть так x=1+(2*2)=1+4=5

//ТРЕТЬЕ ЗАДАНИЕ

//let a = +prompt("Введите первое число");
//let b = +prompt("Введите второе число");
//let c;

//if (a>=0 & b>=0) {
//    c = a - b;
//    alert("Разность двух чисел равна " + c);
//} else if (a<0 & b<0) {
//    c = a * b;
//    alert("Произведение двух чисел равно " + c);
//} else {
//    c = a + b;
//    alert("Сумма двух чисел равно " + c);
//}

//ЧЕТВЕРТОЕ, ПЯТОЕ ЗАДАНИЕ

//let a = +prompt("Введите число от 0 до 15");
//
//switch (a) {
//    case a = 0:
//        console.log(a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++);
//        break;
//
//    case a = 1:
//        console.log(a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++);
//        break;
//
//    case a = 2:
//        console.log(a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++);
//        break;
//
//    case a = 3:
//        console.log(a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++);
//        break;
//
//    case a = 4:
//        console.log(a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++);
//        break;
//
//    case a = 5:
//        console.log(a++, a++, a++, a++, a++, a++, a++, a++, a++, a++, a++);
//        break;
//
//    case a = 6:
//        console.log(a++, a++, a++, a++, a++, a++, a++, a++, a++, a++);
//        break;
//
//    case a = 7:
//        console.log(a++, a++, a++, a++, a++, a++, a++, a++, a++);
//        break;
//
//    case a = 8:
//        console.log(a++, a++, a++, a++, a++, a++, a++, a++);
//        break;
//
//    case a = 9:
//        console.log(a++, a++, a++, a++, a++, a++, a++);
//        break;
//
//    case a = 10:
//        console.log(a++, a++, a++, a++, a++, a++);
//        break;
//
//    case a = 11:
//        console.log(a++, a++, a++, a++, a++);
//        break;
//
//    case a = 12:
//        console.log(a++, a++, a++, a++);
//        break;
//
//    case a = 13:
//        console.log(a++, a++, a++);
//        break;
//
//    case a = 14:
//        console.log(a++, a++);
//        break;
//
//    case a = 15:
//        console.log(a++);
//        break;
//
//    default:
//        console.log("Невозможно");
//}

// ШЕСТОЕ ЗАДАНИЕ




function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return arg1 + arg2;
            break;
        case 'sub':
            return arg1 - arg2;
            break;
        case 'multiplication':
            return arg1 * arg2;
            break;
            
        default: console.log ("Невозможно")
    }
}
