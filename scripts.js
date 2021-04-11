class Calculadora{
  constructor(input,output){
    this.inputDisplay = input;
    this.outputDisplay = output;
    this.inputHistory = [];
  }

  clearAllHistory(){
    this.inputHistory = [];
    this.updateInputDisplay();
    this.updateOutputDisplay("0");
  }

  backspace(){}

  changePercentToDecimal(){}

  insertNumber(value){
    if(this.getLastInputType() === "number"){
      this.appendToLastInput(value);  
    }
    else if(this.getLastInputType() === "operator" || this.getLastInputType() === null){
      this.addNewInput(value,"number");
    }
  }

  insertOperation(value){}

  negativeNumber(){}

  insertDecimalPoint(){}

  generateResult(){}

  //Helper Functions

  getLastInputType(){
    return (this.inputHistory.length === 0) ? null :this.inputHistory[this.inputHistory.length -1].type;
  }

  getLastInputValue(){
    return (this.inputHistory.length === 0) ? null :this.inputHistory[this.inputHistory.length -1].value;
  }

  getAllInputValues(){
    return this.inputHistory.map(entry =>entry.value);
  }

  getOutputValue(){
    return this.outputDisplay.value.replace(/,/g,'');
  }

  addNewInput(value,type){
    this.inputHistory.push({"type":type, "value":value.toString() });
    this.updateInputDisplay();
  }

  updateInputDisplay(){
    this.inputDisplay.value = this.getAllInputValues().join(" ");
  }
  updateOutputDisplay(value){
    this.outputDisplay.value = Number(value).toLocaleString();
  }

}

const inputDisplay = document.querySelector("#history");
const outputDisplay = document.querySelector("#result");

const allClearButton = document.querySelector("[data-all-clear]");
const backspaceButton = document.querySelector("[data-backspace]");
const percentButton = document.querySelector("[data-percent]");
const operationButtons = document.querySelector("[data-operator]");
const numberButtons = document.querySelector("[data-number]");
const negativeButton = document.querySelector("[data-negative]");
const decimalButton = document.querySelector("[data-decimal]");
const equalsButton = document.querySelector("[data-equals]");

const c1 = new Calculadora(inputDisplay, outputDisplay);

allClearButton.addEventListener("click",()=>{
  c1.clearAllHistory
});

backspaceButton.addEventListener("click",()=>{
  c1.backspace();
});

percentButton.addEventListener("click",()=>{
  c1.changePercentToDecimal();
});

operationButtons.forEach(button=>{
  button.addEventListener("click",(event)=>{
    let{target} = event;
    c1.insertOperation(target.dataset.operation);
  })
});

numberButtons.forEach(button=>{
  button.addEventListener("click",(event)=>{
    let{target} = event;
    c1.insertOperation(target.dataset.number);
  })
});

negativeButton.addEventListener("click",()=>{
  c1.negativeNumber();
});

backspaceButton.addEventListener("click",()=>{
  c1.backspace();
});

percentButton.addEventListener("click",()=>{
  c1.changePercentToDecimal();
});

equalsButton.addEventListener("click",()=>{
  c1.generateResult();
});