import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  
  onToggleColorTheme(event: any){
    console.log(event.detail.checked);
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    }else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
  subText = '';
  mainText = '';
  operand1: number = 0;
  operand2: number = 0;
  operator = '';
  calculationString = '';
  answered = false;
  operatorSet = false;

  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.mainText === '')) {
        return;
      }
      this.operand1 = parseFloat(this.mainText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainText.length === 10) {
      return;
    }
    this.mainText += key;
  }

  allClear() {
    this.mainText = '';
    this.subText = '';
    this.operatorSet = false;
  }
  changeSign() {
    let converted = +this.mainText * -1;
    this.mainText = (converted).toString();
  }
  resetLastNumber() {
    this.mainText = '';
    this.subText = '';
    this.operatorSet = false;
  }

  getAnswer() {
    this.calculationString = this.mainText;
    this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
    if (this.operator === '/') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 / this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = this.mainText.substr(0, 9);
      }
    } else if (this.operator === 'x') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 * this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 - this.operand2).toString();
      this.subText = this.calculationString;
    } else if (this.operator === '+') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 + this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    } else {
      this.subText = 'ERROR: Invalid Operation';
    }
    this.answered = true;
  }
/** display = 0;
  memory = 0;
  state = 'number';
  operator = '+';
  decimal = false;
  decimals = 0;

  clickNumber(n: number) {
    switch (this.state) {
      case 'number':
        if (this.decimal) {
          this.decimals++;
          this.display = this.display + n * Math.pow(10, -this.decimals);
        } else {
          this.display = this.display * 10 + n;
        }
        break;
      case 'operator':
        this.display = n;
        this.state = 'number';
        break;
      case 'result':
        this.memory = 0;
        this.display = n;
        this.state = 'number';
    }
  }

  clickOperator(o: string) {
    this.calculate();
    this.operator = o;
    this.memory = this.display;
    this.state = 'operator';
  }

  calculate() {
    this.display = eval('' + this.memory + this.operator + '(' + this.display + ')');
    this.memory = 0;
    this.state = 'result';
    this.operator = '+';
    this.decimal = false;
    this.decimals = 0;
  }

  resetLastNumber() {
    this.display = 0;
    this.state = 'number';
    this.decimal = false;
    this.decimals = 0;
  }

  reset() {
    this.display = 0;
    this.memory = 0;
    this.state = 'number';
    this.operator = '+';
    this.decimal = false;
    this.decimals = 0;
  }

  changeSign() {
    this.display = this.display * -1;
  }

  setDecimal() {
    this.decimal = true;
  }*/
  constructor() { }

  ngOnInit() {
  }
  
  
}
