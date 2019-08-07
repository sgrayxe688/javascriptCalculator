
let x 
let op 
let y 
let wasEvaluated = false
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener('click', (e) => {
        let display = document.getElementById("display");
        let input = e.target.value
        let displayNumber = display.innerText  
        if (wasEvaluated){
            display.innerText = ("")
        }
        if (input <=9){
        display.innerText += e.target.value
        }
        else if (input === "C" ){
            document.location.reload()
        }
        else if (input === "CE"){
            display.innerText = ("")
        }
        else if(isNaN(input) && displayNumber){
            if (op){
                y = parseFloat(displayNumber)
                doTheMath(x,op,y);
                display.innerText = doTheMath(x,op,y)
                wasEvaluated = true
                x = parseFloat(doTheMath(x,op,y))
                if (input === "="){

                }
                else{
                    op = input
                }
            }
            else{
                op = input
                x = parseFloat(displayNumber)
                display.innerText = ("") 
            }
            
        }
    });
});



function doTheMath(x,op,y){
    if(op === "*"){
        return x*y;
    }
    if(op === "/"){
        return x/y;
    }
    if(op === "+"){
        return x+y;
    }
    if(op === "-"){
        return x-y;
    }

}