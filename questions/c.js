const readlineSync = require('readline-sync');

class QuestionC {
  constructor() {
    const year = this.requestYear();
    const isLeapYear = this.isLeapYear(year);

    if (isLeapYear) {
      console.log('O ano é bissexto e possui 366 dias');
    } else {
      console.log('O ano não é bissexto e possui 365 dias');
    }
  }

  requestYear() {
    const year = readlineSync.question('Qual o ano? ');

    if (!Number(year) || Number(year) < 0 || Number(year) > 9999) {
      console.log('Ano inválido!');
      return this.requestYear();
    }

    return Number(year);
  }

  isLeapYear(year) {
    if (year % 400 === 0) {
      return true;
    }

    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    }

    return false;
  }
}

module.exports = {
  QuestionC
}