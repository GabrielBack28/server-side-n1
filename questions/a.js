const readlineSync = require('readline-sync');

class QuestionA {
  answers = [];
  
  constructor() {
    for (let i = 0; i < 16; i++) {
      const age = this.requestAge();
      const city = readlineSync.question('Em qual cidade você mora? ');
      
      const opinionOptions = ['Regular', 'Bom'];
      const bookOpinion = readlineSync.keyInSelect(opinionOptions, 'Qual a sua opinião em relação ao livro que fora lançado meses atrás? ', { cancel: 'Ótimo' });
      this.answers.push({
        age,
        city,
        bookOpinion: bookOpinion === -1 ? 'Ótimo' : opinionOptions[bookOpinion]
      });
    }

    this.showAverageAgeOfExcelentOpinion();
    this.showQuantityOfRegularOpinion();
    this.showPercentageOfGoodOpinion();
    this.showPercentageOfReadersByCity();
  }

  requestAge() {
    const age = readlineSync.question('Qual a sua idade? ');

    if (!Number(age) || Number(age) < 0 || Number(age) > 150) {
      console.log('Idade inválida!');
      return this.requestAge();
    }

    return parseInt(age)
  }

  showAverageAgeOfExcelentOpinion() {
    const ages = this.answers.filter(answer => answer.bookOpinion === 'Ótimo').map(answer => answer.age);
    const average = ages.reduce((acc, age) => acc + age) / ages.length;

    console.log(`A média das idades dos leitores que responderam ótimo é ${average}`);
  }

  showQuantityOfRegularOpinion() {
    const quantity = this.answers.filter(answer => answer.bookOpinion === 'Regular').length;

    console.log(`A quantidade de leitores que responderam regular é ${quantity}`);
  }

  showPercentageOfGoodOpinion() {
    const quantity = this.answers.filter(answer => answer.bookOpinion === 'Bom').length;
    const percentage = (quantity / this.answers.length) * 100;

    console.log(`A porcentagem de leitores que responderam bom entre todos os leitores é ${percentage}%`);
  }

  showPercentageOfReadersByCity() {
    const cities = this.answers.map(answer => answer.city);
    const uniqueCities = [...new Set(cities)];

    uniqueCities.forEach(city => {
      const quantity = this.answers.filter(answer => answer.city === city).length;
      const percentage = (quantity / this.answers.length) * 100;

      console.log(`A porcentagem de leitores da cidade ${city} é ${percentage}%`);
    });
  }
}

module.exports = {
  QuestionA
}