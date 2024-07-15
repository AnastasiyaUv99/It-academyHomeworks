//поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
function getReverse(arr){
    return arr.reverse();
}
console.log(getReverse([1,2,3,4,5,6]))

//найти максимальное значение числа в массиве ([3,67,15...])
function getMaxValue(arr) {
    return `Максимальное значение числа в массиве [${arr}] - ${Math.max.apply(null, arr)}`;
}
console.log(getMaxValue([3,67,15,42,870,200]))

//записать в массив ряд фибоначчи начиная с N члена с длинной массива M
function getFebonachiLine(n, m) {
    let arr = [0,1];
    let NewArr = [n];
    for (i = 2; arr[i-1] < n; i++) {
        arr.push(arr[i-2]+arr[i-1]);
        if (arr[i]!==n) {
            return (`${n} is not aFibonacci Number`);
        }
        while (NewArr.length<m) {
            i++;
            arr[i]=arr[i-2]+arr[i-1];
            NewArr.push(arr[i]);
        } 
    }
    return (NewArr)
}
console.log(getFebonachiLine(34, 10))

//даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько 
//цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )
function matchingNumbers(a,b){
    let arrayA = (""+a).split("").map(Number);
    let arrayB = (""+b).split("").map(Number);
    let Value = 0;
    let ValueAndPositon = 0;
    for (let i = 0; i<=9; i++) {
        if (arrayA.includes(i) & arrayB.includes(i)) {
            (arrayA.indexOf(i) === arrayB.indexOf(i))? ValueAndPositon++ : Value ++
        }  
    }
    return "Совпадают только по значению : " + Value + "\n" + "Совпадают по значению и позиции : " + ValueAndPositon
}
console.log(matchingNumbers(3487,3794))

//сортировка массива по возрастанию/убыванию
function sorting (arr){
    return "Сортировка по возрастанию " + arr.sort((a,b)=>a-b) + "\n" + "Сортировка по убыванию " + arr.sort((a,b)=>b-a)
}
console.log(sorting([3,67,1,42,8,200]))

//удалить из массива все повторяющиеся элементы
function removingDuplicates (arr){
    arr = new Set (arr);
    return Array.from(arr);
}
console.log(removingDuplicates([1, 2, 3, 4, 5, 1, 6, 2, 5, 6, 4, 7, 7]))
