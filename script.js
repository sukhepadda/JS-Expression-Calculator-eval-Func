let calInput = document.querySelector('#calInput');
let calOutput = document.querySelector('#calOutput');

function valGetFunction(element){
    // console.log(element.innerText);
    const exp = calInput.value + element.innerText;
    calInput.value = exp; 
    if(['+', '-', '*', '/'].includes(element.innerText)) return
    calOutput.value = eval(exp); 
}



clearDiv.addEventListener('click', () => {   
    calInput.value = "";
    calOutput.value = "";
})

