
let history =[]

function calculator(a,operator,b){
    let result;

function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide (a,b){
    if(b===0){
        return "math error"
    }
    return a/b
}


if(typeof a!== 'number' || typeof b !== 'number'){
    return "invalid input"
}
// choosing the operation


if(operator ==='+'){
    result = add(a,b)
}
else if(operator ==='-'){
    result =subtract(a,b)
}
else if(operator ==='*'){
   result = multiply(a,b)
}
else if(operator ==='/'){
    result = divide(a,b)
}
else{
    return "invalid operator"
}

//  not saving unsuccessful calculation
if(typeof result !== "number"|| !Number.isFinite(result)){
    return result
}




// save calculation
history.push(
    {
        num1 : a,
        operator: operator,
        num2 :b ,
        result: result

    }
)




return result;

}
console.log(calculator(2,'+',3))
console.log(calculator(2,'/',3))
console.log(calculator(2,'-',3))
console.log(calculator(2,'*',3))


history.forEach((item) => {console.log(`${item.num1},${item.operator},${item.num2} = ${item.result}`)});
console.log(history)
 
function displayHistory(){
    const historyList = document.getElementById('history-list')
    historyList.innerHTML = ''
    history.forEach((item)=>{
        const listItem = document.createElement('li');
        listItem.textContent = `${item.num1},${item.operator},${item.num2} = ${item.result}`

    historyList.appendChild(listItem)
})}
displayHistory



      