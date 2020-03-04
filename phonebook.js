'use strict'

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const getLine = (function () {
  const getLineGen = (async function* () {
    for await (const line of rl) {
      yield line;
    }
  })();
  return async () => ((await getLineGen.next()).value);
})();

const phoneBook = {};

async function add() {
  console.log('Введите имя');
  const name = await getLine();
  console.log('Введите номер телефона');
  const phone = Number(await getLine());

  phoneBook[name] = phone;
}

async function print() {
  console.log(phoneBook);
}

async function deletePhone() {
  console.log('Введите имя удаляемого контакта');
  const name = await getLine();

  if (name in phoneBook) {
    delete phoneBook[name];
    console.log("Контакт удален");
  } else {
    console.log("Контакт не найден");
  }
}

async function searchPhone() {
  console.log('Какое имя нужно найти?');
  const name = await getLine();

  if (name in phoneBook) {
    console.log(`Номер телефона у ${name}: ${phoneBook[name]}`);
  } else {
    console.log("Контакт не найден");
  }
}

const main = async () => {
  console.log(`Введите команду add- Добавить контакт, \n print - Показать контакты, delete - Удалить контакт, \n search - Поиск контакта. Для выхода используйте команду - exit`);
  const command = await getLine();
  if (command === 'exit') {
    process.exit(0);
  } else if (command === 'add') {
    await add();
  } else if (command === 'print') {
    await print();
  } else if (command === 'delete') {
    await deletePhone();
  } else if (command === 'search') {
    await searchPhone();
  } else {
    console.log('Неизвестная команда');
  }

  main();
};

main();