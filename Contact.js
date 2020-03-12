const ConsoleReader = require('./ConsoleReader');
const PhoneBook = require('./PhoneBook');
const messagePrinter = require("./MessagePrinter");

async function addContact() {
    messagePrinter.printTooltip('Введите имя');
    const name = await ConsoleReader.getLine();
    messagePrinter.printTooltip('Введите номер телефона');
    const phone = await ConsoleReader.getLine();
    PhoneBook[name] = phone;
    messagePrinter.printMessage(`Вы добавили контакт c именем ${name} с номером ${PhoneBook[name]}`);
};

async function listContact() {
    console.log(`\n---`);
    for (let key in PhoneBook) {
        messagePrinter.printMessage(`Контакт с именем ${key} и номером ${PhoneBook[key]}`);
    }
    console.log(`---\n`);
}

async function deleteContact() {
    messagePrinter.printTooltip('Введите имя контакта, который хотите удалить');
    const name = await ConsoleReader.getLine();
    delete PhoneBook[name];
    messagePrinter.printMessage(`Вы удалили контакт с именем ${name}`);
}

async function searchContact() {
    messagePrinter.printTooltip('Введите имя контакта, который хотите найти');
    const name = await ConsoleReader.getLine();

    if (PhoneBook[name] === undefined) {
        messagePrinter.printError('Такого имени нет в телефонной книге');
    } else {
        messagePrinter.printMessage(`Контакт с именем ${name} и номером ${PhoneBook[name]}`);
    }
}

module.exports.addContact = addContact;
module.exports.listContact = listContact;
module.exports.deleteContact = deleteContact;
module.exports.searchContact = searchContact;