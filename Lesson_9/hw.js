/*Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена 
функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает 
число 1, второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки первого 
сработавшего промиса и выведите результат его работы на экран.*/

function randomNum(min,max) {
    return Math.floor(Math.random() * (max - min +1) + min )
} 

async function promiseRace() { 
    let promise = new Promise((res)=>{
        setTimeout(() => res(1), randomNum(1,5)*1000)
    })
    
    let promise_2 = new Promise((res)=>{
        setTimeout(() => res(2), randomNum(1,5)*1000)
    })
    
    let promise_3 = new Promise((res)=>{
        setTimeout(() => res(3), randomNum(1,5)*1000)
    })
    try {
        let res = await Promise.race([promise, promise_2, promise_3])
            console.log (`Первым сработал promise возвращающий ${res}`) 
    } catch (err) {
        console.log (err in promiseRace)
    }   

}

promiseRace() 


// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

function getNum(minNum,maxNum,timer) {
    return new Promise((res)=>{
        const num = randomNum(minNum,maxNum)
        setTimeout(()=> res(num),timer)  
    })
}

async function getSquaring() {
    const num = await getNum(1,5,3000)
    return console.log(`Квадрат числа ${num} равен ${num*num}`)
}

getSquaring()

// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
//  Используйте также функцию getNum, чтобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
//  Создайте async функцию, которая с помощью await будет дожидаться результата функции, затем будет дожидаться результата 
//  второй функции, а затем найдет сумму полученных чисел и выводит на экран.

async function getSumm(){
   let num_1 = await getNum(1,5,3000)
   console.log(`Первое число : ${num_1}`)
   let num_2 = await getNum(6,10,5000)
   console.log(`Второе число : ${num_2}`)
   return console.log(`Сумма чисел равна ${num_1+num_2}`)
}

getSumm()