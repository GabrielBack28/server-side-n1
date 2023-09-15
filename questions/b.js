const readlineSync = require('readline-sync');

class QuestionB {
  median = 70;
  passedExam = {
    I: 0,
    II: 0,
    III: 0,
    IV: 0,
    V: 0
  };

  constructor() {
    const exams = ['I', 'II', 'III', 'IV', 'V'];
    
    for (const exam of exams) {
      const grade = this.requestGrade(exam);
      if (grade >= this.median) {
        this.passedExam[exam] = true;
      }
    }

    this.showClassification();
  }

  requestGrade(exam) {
    const grade = readlineSync.question(`Qual a nota do exame ${exam}? `);

    if (!Number(grade) || Number(grade) < 0 || Number(grade) > 100) {
      console.log('Nota inválida!');
      return this.requestGrade(exam);
    }

    return Number(grade);
  }

  showClassification() {
    let classification;
    const classifiedInA = Object.values(this.passedExam).every(exam => exam);
    const classifiedInB = this.passedExam.I && this.passedExam.II && this.passedExam.IV && (!this.passedExam.III || !this.passedExam.V);
    const classifiedInC = (this.passedExam.I && this.passedExam.II && (this.passedExam.III || this.passedExam.IV)) && !this.passedExam.V;

    if (classifiedInA) {
      classification = 'A';
    } else if (classifiedInB) {
      classification = 'B';
    } else if (classifiedInC) {
      classification = 'C';
    } else {
      classification = 'Reprovado';
    }

    console.log(`O aluno foi classificado como ${classification}`);
  }

}

module.exports = {
  QuestionB
}