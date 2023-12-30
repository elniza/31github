let firstField= document.createElement("input");
let increment = document.createElement("button");
let equals = document.createElement("p");

increment.innerHtml = "+";

//adding attribute for input
firstField.setAttribute("type", "text");

let secondField = document .createElement("input");
secondField.setAttribute("type" , "text");

document.body.append(firstField, increment, secondField);

let getResultBtn = docment.createElement("button");
getResultBtn.setAttribute("class", "getResultBtn");

getResultBtn.innerText = "=";

let resultText = document.createElement("span");

//the logics
getResultBtn.addEventListener("click", () => {
    let res;

    //console.log(operatorField.value);

    if (operatorField.value == "+") {
        res = Number(firstField.value) + Number(secondField.value);
 } else if (operatorField.value == "-"){
    //
 }
})