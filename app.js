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

    var firstValue
    var secondValue
    flag = 0

    const numberOnClick = function(event){
        if(flag == 1){
            flag = 0
            display.innerText = event.target.textContent
        }else{
            display.innerText += event.target.textContent
        }
    }

    const operatorClear = function(event){
        display.innerText = ""       
        console.log(firstValue)
        console.log(secondValue)
    }


    const operatorFunction = function(event){
        firstValue = parseFloat(display.innerText);
        display.innerText = ""
        selectedOperator = event.target.textContent
        console.log("FirstValue", firstValue)
        console.log("selectedOperator", selectedOperator)
    }

    btnEq.onclick = function(event){

        const options = {
            baseURL: "http://localohst:3000/",
            timeout: 5000,
            method:  "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }


        if (!isNaN(display.innerText)){
            secondValue = parseFloat(display.innerText);
        }

        let result

        switch (selectedOperator) {
            case '+':
                    fetch(`http://localhost:3000/suma/${firstValue}/${secondValue}/`, options)
                    .then(res => res.json())
                    .then((response) => {
                        console.log(response)
                        display.innerText = response.result
                    })
                break;
            case '*':
                    fetch(`http://localhost:3000/multiplica/${firstValue}/${secondValue}/`, options)
                    .then(res => res.json())
                    .then((response) => {
                        console.log(response)
                        display.innerText = response.result
                    })
                break;
            case '-':
                    fetch(`http://localhost:3000/resta/${firstValue}/${secondValue}/`, options)
                    .then(res => res.json())
                    .then((response) => {
                        console.log(response)
                        display.innerText = response.result
                    })
                break;
            case '/':
                    fetch(`http://localhost:3000/divide/${firstValue}/${secondValue}/`, options)
                    .then(res => res.json())
                    .then((response) => {
                        console.log(response)
                        display.innerText = response.result
                    })
                break;
        
            default:
                break;
        }
    flag = 1
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
    btnDot.onclick = numberOnClick

    btnPlus.onclick = operatorFunction
    btnAst.onclick = operatorFunction
    btnDiv.onclick = operatorFunction

    //btnMclear.onclick = memOnClick
    //btnMplus.onclick = memOnClick
    //btnMrest.onclick = memOnClick

    btnC.onclick = operatorClear


}

console.log("Se ejecutó App")