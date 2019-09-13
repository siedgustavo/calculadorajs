console.log("App Cargando...")

window.onload = function(){
    const display = document.getElementById("display")
    const btnOne = document.getElementById("btnOne")
    const btnTwo = document.getElementById("btnTwo")
    const btnTree = document.getElementById("btnTree")
    const btnFour = document.getElementById("btnFour")
    const btnFive = document.getElementById("btnFive")
    const btnSix = document.getElementById("btnSix")
    const btnSeven = document.getElementById("btnSeven")
    const btnEight = document.getElementById("btnEight")
    const btnNine = document.getElementById("btnNine")
    const btnCero = document.getElementById("btnCero")
    const btnMclear = document.getElementById("btnMclear")
    const btnMplus = document.getElementById("btnMplus")
    const btnMrest = document.getElementById("btnMrest")
    const btnDiv = document.getElementById("btnDiv")
    const btnAst = document.getElementById("btnAst")
    const btnC = document.getElementById("btnC")
    const btnDot = document.getElementById("btnDot")
    const btnEq = document.getElementById("btnEq")
    const btnPlus = document.getElementById("btnPlus")

    var firstValue = NaN;
    var secondValue = NaN;

    const numberOnClick = function(event){
        display.innerText += event.target.textContent
    }


    const operatorFunction = function(event){
        if (isNaN(firstValue)){
            firstValue = parseFloat(display.innerText);
        } 
        display.innerText = ""
        selectedOperator = event.target.textContent
        console.log("FirstValue", firstValue)
        console.log("selectedOperator", selectedOperator)
    }

    btnEq.onclick = function(event){
        if (isNaN(secondValue)){
            secondValue = parseFloat(display.innerText);
        }
        //secondValue =parseFloat(event.target.textContent)
        let result

        switch (selectedOperator) {
            case '+':
                result = firstValue + secondValue;            
                break;
            case '*':
                result = firstValue * secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
            case '/':
                result = firstValue / secondValue;
                break;
        
            default:
                break;
        }
        display.innerText = result
    }

    btnCero.onclick = numberOnClick
    btnTwo.onclick = numberOnClick
    btnTree.onclick = numberOnClick
    btnEight.onclick = numberOnClick
    btnFive.onclick = numberOnClick
    btnFour.onclick = numberOnClick
    btnNine.onclick = numberOnClick
    btnOne.onclick = numberOnClick
    btnSeven.onclick = numberOnClick
    btnSix.onclick = numberOnClick
    btnTree.onclick = numberOnClick
    btnTwo.onclick = numberOnClick

    btnPlus.onclick = operatorFunction
    btnAst.onclick = operatorFunction
    btnC.onclick = operatorFunction
    btnDiv.onclick = operatorFunction
    btnDot.onclick = operatorFunction

    btnMclear.onclick = numberOnClick //Clear y reinicialiar variables
    btnMplus.onclick = numberOnClick
    btnMrest.onclick = numberOnClick

}

console.log("Se ejecutó App")