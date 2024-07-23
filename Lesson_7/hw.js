/*
1. Написать функцию которая будет эмулировать игру в кубики, заданное количество игроков по очереди бросают кубик, 
каждый в итоге бросает одинаковое количество раз (должно работать с любым количеством раз заданным в переменной). 
У кого сумма набранная будет наибольшей - тот выиграл. Если суммы равны то ничья. Выведите результаты в консоль.
*/

function diceGameSimulator(players, throws) {
	let res = []
    let throwsRes = 0
    for (let i = 0; i < players; i++) {
        for (let i = 0; i<throws; i++) {
            let num = Math.ceil((Math.random() * 6))
            throwsRes += num
        }
		res.push(throwsRes)
		throwsRes = 0
    }
    console.log(`Результаты бросков всех игроков: ${res}`)
    if (res.every(num => num === res[0])) {
        return `ничья`
    } else {
        let maxNum = Math.max(...res)
        let winIndx = res.map((num,i) => num === maxNum ? i + 1 : null).filter(i => i !== null).join()
        if (winIndx.length > 1) {
            return `выйграли ${winIndx} игроки`
        } else {
            return `выйграл ${winIndx} игрок`
        }
    }
}

console.log(diceGameSimulator(2,1))
console.log(diceGameSimulator(3,3))
console.log(diceGameSimulator(4,5))
console.log(diceGameSimulator(5,10))
console.log(diceGameSimulator(6,1))
console.log('\n')

/*
2. Написать функцию которая будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу.
Пример: разбить 15 на 3 части (сумма трех чисел будет равна 15) (4,6,5) - Ваш код должен работать с любым числом заданным в переменной 
(не только с 15) и с любым количеством частей на которые надо разбить число.

а. числа изначальное число целое, числа разбивки - целые (4,6,5)
б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
*/

function getNumberComponents (num, amount, type) {
    numb = num
    let arr = []
    let a = 0
	for (let i = 0; i < amount - 1; i++) {
		(type==="целое") ? a = Math.ceil((Math.random() * numb)) : a = (Math.random() * numb).toFixed(2)
		arr.push(a)
		numb -= a
    }
    if (type === "целое") {
        arr.push(numb)
        return `${amount} целых слагаемых числа ${num} : ${arr.join()}`
    } else {
        arr.push(numb.toFixed(2))
        return `${amount} дробных слагаемых числа ${num} : ${arr.join()}`
    }
}

console.log(getNumberComponents(15,3,"целое"))
console.log(getNumberComponents(15,3,"дробное"))
console.log(getNumberComponents(20,10,"целое"))
console.log(getNumberComponents(20,10,"дробное"))
console.log('\n')

/*
3. Написать функцию которая подсчитывает количество Пятниц 13-ого с любой заданной даты в прошлом до сегодня. 
Ваш код должен иметь возможность считать количество дней на любую заданую в переменной первоначальную дату и считать верно через 10-15-20 лет
*/

function friday13Counter (pastDate) {
    const currentDate = new Date()
    const inputDate = new Date(pastDate)
    let count = 0
    inputDate.getDate() > 13 ? inputDate.setDate(13) : inputDate.setMonth(inputDate.getMonth() - 1) && inputDate.setDate(13)
	while (inputDate.setMonth(inputDate.getMonth() + 1) <= currentDate) {
		if (inputDate.getDay() === 5) {
			count++    
		} 
		/*console.log(inputDate) // вывод всех дней недели 13 чисел месяцев  и проверка счетчика
		  console.log(count) 
        */
	}
	return `С установленной даты прошло ${count} пятниц_13`
}

console.log(friday13Counter("01 January 2023"))
console.log(friday13Counter("01 January 2019"))
console.log(friday13Counter("01 January 2000"))
 