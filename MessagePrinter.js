const chalk = require('chalk');

//Вывод посдсказок
async function printTooltip(message) {
    console.log(chalk.blue.bold(message));
};
// Вывод ошибок
async function printError(message) {
    console.log(chalk.red.bgBlack(message));
};
//Вывод сообщений
async function printMessage(message) {
    console.log(chalk.hex("00ffea")(message));
};

module.exports.printTooltip = printTooltip;
module.exports.printError = printError;
module.exports.printMessage = printMessage;