/*
Дана строка из четного количества цифр. Проверьте, что сумма первой половины цифр равняется сумме второй половине цифр.
Если это так - выведите 'да', в противном случае выведите 'нет'.
*/

function checkingAmounts(num) {
    let s1 = 0
    let s2 = 0
    if (arguments.length % 2 === 0) {
		for (let i = 0; i < arguments.length / 2; i++) {
			s1 += arguments[i]
			s2 += arguments[arguments.length / 2 + i]
		}
		return (s1 === s2) ? "да" : "нет"
	} else {
		return "Количество цифр должно быть четным!"
    }	
}

console.log(checkingAmounts(3,2,3,1,2,5,7))
console.log(checkingAmounts(3,2,3,1,1,2,5,8))
console.log(checkingAmounts(1,2,1,2))
console.log("\n")

/*
Дано число n=1000 (может быть заданное любое число). Делите его на 2 столько раз, пока результат деления не станет меньше 50 
(может быть любое заданное число). Какое число получится? Посчитайте количество итераций, 
необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
*/

function getBisection(n, num2) {
    let num = 0
    while (n >= num2) {
        n = n / 2
        num++
    }
    return `После ${num} итераций деления получится число ${n}` 
}

console.log(getBisection(1000,50))
console.log(getBisection(1045,5))
console.log(getBisection(100,12))
console.log("\n")


// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

function getAverage(arr) {
    let s = arr.reduce((prev,cur) => cur + prev)
    return s / arr.length
}

console.log(getAverage([12, 15, 20, 25, 59, 79]))
console.log(getAverage([36, 0, 0, 0, 0, 0]))
console.log("\n")


/*
Напишите функцию, которая вставит данные в массив с заданного места в массиве. 
Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
*/

function insertingIntoArray(outerArr, ind, interArr) {
    outerArr.splice(ind,0,...interArr)
    return outerArr
}

console.log(insertingIntoArray([1, 2, 3, 4, 5], 3, ['a', 'b', 'c']))
console.log(insertingIntoArray([1, 2, 3], 1, ['a', 'b']))
console.log(insertingIntoArray([1, 2, 3, 4, 5], 5, ['a', 'c']))
console.log("\n")

/*
Напишите функцию, которая вставит данные в массив в заданные несколько мест в массиве. 
Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
*/

function insertingIntoArray_2(outerArr, indArr, interArr) {
    let pairs = indArr.map((ind, val) => [ind, interArr[val]])
    pairs.sort((a,b) => b[0] - a[0])
    for(let i = 0; i < pairs.length; i++) {
        outerArr.splice(pairs[i][0],0,...pairs[i][1])
    }
    return outerArr
}

console.log(insertingIntoArray_2([1, 2, 3, 4, 5],[5, 1, 4],['e', ['a', 'b'], 'c']))
console.log("\n")


// Дан массив [3, 4, 1, 2, 7. 30. 50]. Отсортируйте его.

function getSorting(arr) {
    return arr.sort()
}

console.log(getSorting([3, 4, 1, 2, 7, 30, 50]))
console.log(getSorting([3, 4, 100, 2, 7, 30, 50]))
console.log(getSorting([300, 4, 1, 200, 7, 30, 50]))
