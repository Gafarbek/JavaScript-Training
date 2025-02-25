// let username = 'Gafar'
// console.log(username);
// console.log(username.charAt(0));

// console.log(username.length - 1);

// console.log(username[2]);

// console.log(username.at(-1));

// console.log(username.indexOf('G'));


// console.log(username.slice());

// const lorem = 'Lorem ipsum dolor, sit amet consecteturf adipisicing elit. Officia itaqueg ratione nostrum, blanditiis incidunt doloribus aliquam vel numquam consequatur dignissimos.'

// const g = lorem.slice(73, 74)
// const a = lorem.slice(23, 24)
// const f = lorem.slice(39, 40)
// const a2 = lorem.slice(41, 42)
// const r = lorem.slice(2, 3)

// console.log(g + a + f + a2 + r);

// let str = 'Hello World'

// str = str.replace(' ',' No ')

// console.log(str);

// console.log(Math.random());





// string 

// console.log(new String());

// split


// let username = 'aaa!bbb!ccc';
// let arr = username.split('!').join('@').split('@').join('9');
// console.log(arr);

// console.log(username.includes('%'));
// console.log(username.includes('!'));

// console.log(username.concat('Hello World'));

// console.log(username.endsWith('a'));
// console.log(username.endsWith('c'));

// console.log(username.startsWith('a'));
// console.log(username.startsWith('c'));

// console.log(username.repeat(8));


// let a = '';

// == 
// console.log(2 == 3); // false 
// console.log(2 == 2); // true 
// console.log(2 == '2'); // true
// console.log(1 == true); // true
// console.log(0 == false); // true

// // ===
// console.log(2 === 3); // false
// console.log(2 === 2); // true
// console.log(2 === '2'); // false
// console.log(1 === true); // true

// console.log(Number(false));
// console.log(Number('Hello World'));
// console.log(typeof 5);
// console.log(typeof NaN);
// console.log(isNaN(NaN)); // true
// console.log(isNaN(5)); // false

// 0 = false
// '' = false
// false = false
// null, undefined = false

// 1 = true


// <=, >=, <, >
// console.log(5 <= 5); // true
// console.log(6 >= 5); // true

// console.log(5 < 5); // false
// console.log(6 > 5); // true

// // !
// console.log(5 === 5); // true
// console.log(5 !== 5); // false

// console.log(!true); // false
// console.log(!false); // true


// console.log(5 != '5'); // false
// console.log(5 !== '5'); // false


// ||, &&, ??

// // ||
// console.log(5 === 4 || 6 === 3); // false
// console.log(5 === 4 || 6 === 6); // true
// console.log(5 === 5 || 6 === 3); // true
// console.log(5 === 5 || 6 === 6); // true


// // &&
// console.log(5 === 4 && 6 === 3); // false
// console.log(5 === 4 && 6 === 6); // false
// console.log(5 === 5 && 6 === 3); // false
// console.log(5 === 5 && 6 === 6); // true


// console.log(null ?? true); // true





// let name = prompt('Your name');

// if (15 > 16) {
//     console.log(`Hello, ${name} `);

// } else {
//     console.log(`Bye, ${name} `);
    
// }





// const email = prompt('Your email: ');

// if (email.endsWith('@gmail.com') || 
//     email.endsWith('@mail.com') || 
//     email.endsWith('@yandex.ru')) {
//     const password = prompt('Your password: ')
    
//     if (password.length >= 8) {
//         alert('You are welcome!')
//     } else {
//         alert(`password should be at least 8 char. remaining: ${password.length}`)    
//     }

// } else {
//     alert('Email can end with @gmai.com, @mail.ru, @yandex.ru')    
// }





/* 
===== Классная работа =====
25.02.2025
.
.
.
.
.
const username = prompt('Your name: ');

if (username.startsWith('a') ||
    username.startsWith('A')) {

    const age = prompt('Your age: ');
    if (age.length <= 18) {

        const wallet = prompt('Enter amount: ')
        if ( wallet.length <= 100) {
    
            const people = prompt('How many people want to enter?: ')
            if ( people.length <= 5) {
                alert ('You are welcome')
            } else {
                alert (`Sorry ${username}, but we can't miss that many people.`)
            }

        } else {
            alert ('There is not enough money in your account')
        }
    } else {
        alert ('Entry to minors is prohibited')
    }

 } else {
     alert (`Sorry but we couldn't find you`)
 }

*/



/*

===== Домашняя работа =====
25.02.2025
.
.
.
.
.
let userName = 'Alex';
let accountPassword = 7777;
let balance = 10000;

let enterName = prompt('Введите ваше имя: ')

if (userName == enterName) {

    let enterPassword = prompt('Введите ваш пороль: ')

    if (accountPassword == enterPassword) {

        let yourBalance = prompt('Введите сумму: ')

        if (yourBalance < balance) {

            let theBalance = balance - yourBalance
            alert (`Вы сняли ${yourBalance} на счету осталось ${theBalance}.`)

        } else {
            alert ('Недостаточно средств')
        }

    } else {
        alert (`Пороль указон не правильно`)
    }

} else {
    alert (`Пользователь ${entername} не найден`)
}

*/