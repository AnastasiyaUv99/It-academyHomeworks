/* 1. сделать интерфейс для объектов
const users = [
{
 name: 'Max Mustermann',
 age: 25,
 occupation: 'Chimney sweep',
 car: 'VW'
},
{
 name: 'Kate Müller',
 age: 23,
 occupation: 'Astronaut',
 children: 2
 }
]; 
*/
interface IUsers {
    name: string;
    age: number;
    occupation: string;
    car ?: string;
    children ?: number; 
}

/*Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфей Person, который будет соответствовать массиву*/

interface IEntity {
    name: string;
    age: number;
}

interface User extends IEntity {
    occupation: string;
}

interface Admin extends IEntity {
    role: string;
}

type Person = User | Admin;

// const persons: Person[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];
  
// 3. Напишите анотации типов к этому классу.
export class ObjectManipulator <T extends object> {

    constructor(protected obj:T) {}

    public set<K extends keyof T>(key: K, value: T[K]): ObjectManipulator<T> {
        return new ObjectManipulator<T>({ ...this.obj, [key]: value });
      }

    public get <K extends keyof T> (key: K): T[K]  {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<T> {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator<T>(newObj);
      }

    public getObject():T {
        return this.obj;
    }
}


//  * 4. Обеспечьте правильную типизацию для указанных функций. 
// 1
export function map <T, U>(mapper?: (item: T) => U, input?: T[]): U[] | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput?: T[]): U[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}

// 2
export function filter<T> (filterer?:((Item: T) => boolean), input?: T[]): T[] | Function {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput?: T[]): T[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}

// 3
export function add(a?: number, b?: number): number | Function {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB?:number): number | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a! + subB!;
        };
    }
    return a! + b!;
}
