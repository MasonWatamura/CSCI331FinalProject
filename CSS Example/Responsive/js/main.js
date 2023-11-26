const add_btn = document.getElementById("add")
const sub_btn = document.getElementById("sub")
const mult_btn = document.getElementById("mult")
const div_btn = document.getElementById("divide")
const great_btn = document.getElementById("great")
const less_btn = document.getElementById("less")

const sym = document.getElementById("symbol")

const out = document.getElementById("out")

add_btn.addEventListener("click", add)
sub_btn.addEventListener("click", subtract)
mult_btn.addEventListener("click", multiply)
div_btn.addEventListener("click", divide)
great_btn.addEventListener("click", greater)
less_btn.addEventListener("click", less)

function add() {
    let nums = getOperators() 
    sym.innerHTML = "+"
    out.innerHTML = nums!=undefined ? nums[0] + nums[1] : '?'
}

function subtract() {
    let nums = getOperators() 
    sym.innerHTML = "&minus;"
    out.innerHTML = nums!=undefined ? nums[0] - nums[1] : '?'
}

function multiply() {
    let nums = getOperators() 
    sym.innerHTML = "&times;"
    out.innerHTML = nums!=undefined ? nums[0] * nums[1] : '?'
}

function divide() {
    let nums = getOperators() 
    sym.innerHTML = "&divide;"
    out.innerHTML = nums!=undefined ? nums[0] / nums[1] : '?'
}

function greater() {
    let nums = getOperators() 
    sym.innerHTML = "&GreaterEqual;"
    out.innerHTML = nums!=undefined ? nums[0] >= nums[1] : '?'
}

function less() {
    let nums = getOperators() 
    sym.innerHTML = "≤"
    out.innerHTML = nums!=undefined ? nums[0] <= nums[1] : '?'
}

function getOperators(){
    const num1 = parseFloat(document.getElementById("n1").value)
    const num2 = parseFloat(document.getElementById("n2").value)
    if (!isNaN(num1) && !isNaN(num2)) {
        return [num1, num2];
    }
    else {
        return undefined;
    }
}