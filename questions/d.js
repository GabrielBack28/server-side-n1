const readlineSync = require('readline-sync');

class QuestionD {
  constructor() {
    const meat = this.requestMeat();
    const quantity = this.requestQuantity();
    const paymentMethod = this.requestPaymentMethod();
    const total = this.calculateTotal(meat, quantity);
    const discount = this.calculateDiscount(paymentMethod, total);
    const finalPrice = total - discount;

    this.showReceipt(meat, quantity, paymentMethod, total, discount, finalPrice);
  }

  requestMeat() {
    const meat = readlineSync.question('Qual o tipo de carne? ', { limit: ['file duplo', 'alcatra', 'picanha']});

    if (meat !== 'file duplo' && meat !== 'alcatra' && meat !== 'picanha') {
      console.log('Tipo de carne inválido!');
      return this.requestMeat();
    }

    return meat;
  }

  requestQuantity() {
    const quantity = readlineSync.question('Qual a quantidade (KG)? ');

    if (!Number(quantity) || Number(quantity) < 0) {
      console.log('Quantidade inválida!');
      return this.requestQuantity();
    }

    return Number(quantity);
  }

  requestPaymentMethod() {
    const paymentMethod = readlineSync.question('Qual a forma de pagamento? ', { limit: ['outro', 'cartão tabajara']});

    if (paymentMethod !== 'outro' && paymentMethod !== 'cartão tabajara') {
      console.log('Forma de pagamento inválida!');
      return this.requestPaymentMethod();
    }

    return paymentMethod;
  }

  calculateTotal(meat, quantity) {
    switch (meat) {
      case 'file duplo':
        return quantity <= 5 ? quantity * 24.90 : quantity * 25.80;
      case 'alcatra':
        return quantity <= 5 ? quantity * 25.90 : quantity * 26.80;
      case 'picanha':
        return quantity <= 5 ? quantity * 36.90 : quantity * 37.80;
    }
  }

  calculateDiscount(paymentMethod, total) {
    if (paymentMethod === 'outro') {
      return 0;
    }

    return total * 0.05;
  }

  showReceipt(meat, quantity, paymentMethod, total, discount, finalPrice) {
    console.log(`Tipo de carne: ${meat}`);
    console.log(`Quantidade: ${quantity}`);
    console.log(`Preço total: R$ ${total.toFixed(2)}`);
    console.log(`Tipo de pagamento: ${paymentMethod}`);
    console.log(`Desconto: R$ ${discount.toFixed(2)}`);
    console.log(`Valor a pagar: R$ ${finalPrice.toFixed(2)}`);
  }
}

module.exports = {
  QuestionD
}