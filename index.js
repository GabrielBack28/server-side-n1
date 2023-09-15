const readlineSync = require('readline-sync');
const { QuestionA } = require('./questions/a');
const { QuestionB } = require('./questions/b');
const { QuestionC } = require('./questions/c');
const { QuestionD } = require('./questions/d');

const questionOptions = ['A', 'B', 'C', 'D'];
const selectedQuestion = readlineSync.keyInSelect(questionOptions, 'Qual questão você deseja executar? ', { cancel: 'Sair' });

switch (selectedQuestion) {
  case 0:
    new QuestionA();
    break;
  case 1:
    new QuestionB();
    break;
  case 2:
    new QuestionC();
    break;
  case 3:
    new QuestionD();
    break;
  default:
    console.log('Saindo...');
    break;
}
