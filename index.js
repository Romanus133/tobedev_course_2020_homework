'use strict'
const ConsoleReader = require("./ConsoleReader");
const contact = require("./Contact");
const chalk = require('chalk');
const messagePrinter = require("./MessagePrinter");

const main = async () => {
    messagePrinter.printTooltip ('Выберите действие.\n\nadd - добавить\nlist - список\ndelete - удалить\nsearch - найти\n\nДля выхода используйте команду - exit\n');
    const command = await ConsoleReader.getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command === 'add') {
        await contact.addContact();
    } else if (command === 'list') {
        await contact.listContact();
    } else if (command === 'delete') {
        await contact.deleteContact();
    } else if (command === 'search') {
        await contact.searchContact();
    } else {
        messagePrinter.printError('Неизвестная команда');
    }

    main();
};

 main();
