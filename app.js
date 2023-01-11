console.log("app Working");

let tipPercentaje, billAmount, peopleNumber, tipPerson, totalPerson, tip;

function calcValue(amount) {
tipPercentaje = amount;
billAmount = document.getElementById("billAmount").value;

tip = billAmount/amount;


console.log("tip: " + tip)
console.log("tip%: " + tipPercentaje)
console.log("bill: " + billAmount)

}

function calculate () {
    peopleNumber = document.getElementById("peopleNumber").value;
    totalPerson = peopleNumber;
    console.log(peopleNumber)



    

    tipPerson = tip/totalPerson;
    totalPerson = (tip + billAmount)/totalPerson;
    
    
    
     console.log("tipPerson: " + tipPerson)
     console.log("totalPerson: " + totalPerson)

let resultTip = document.getElementById("tipPerson");
let resultTotal = document.getElementById("totalPerson");

resultTip.value = tipPerson;
resultTotal.value = totalPerson;


}

