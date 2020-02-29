'use strict'

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

const getLine = (function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);
})();

const phoneBook = {}


async function add(){
console.log('Введите имя');
const name = String(await getLine());
console.log('Введите номер телефона');
const phone = Number(await getLine());
phoneBook[name] = phone;
}
async function deletePhone(){
console.log('Введите номер для удаления');
const phone = Number(await getLine());
delete phoneBook[Number]
}
async function searchPhone(){
console.log('Поиск имени');
const name = String(await getLine());
let result = (name in phoneBook) ? console.log(`Номер телефона у ${name}: ${phoneBook[name]}`) : console.log("Контакт не найден");
}
const main = async () => {
    console.log('Введите команду. \nadd - Добавить контакт\ndeletePhone - удалить контакт\nsearch - поиск контакта\n\n Для выхода используйте команду - exit');
    const command = await getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command === 'add'){
        await add();
    } else if (command === 'deletePhone') {
        await deletePhone();
    } else if (command === 'search'){
        await searchPhone();
    } else {
        console.log('Неизвестная команда');
    }


    main();

};

main();