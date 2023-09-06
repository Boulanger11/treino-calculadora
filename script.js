let expression = ''

const numero = (valor) => {
    expression += valor
    atualizarVisor()
}

const clearDisplay = () => {
    expression = ''
    atualizarVisor()
}

const result = () => {
    const resultado = eval(expression)
    if (resultado) {
        expression = resultado.toString()
        atualizarVisor()
    } else {
        alert('Erro de expressão')
        clearDisplay()
    }
}

const atualizarVisor = () => {
    const display = document.getElementById('display')
    display.value = expression
}

document.addEventListener("keydown", function (event) {
    console.log(event)
    if (/^[0-9+\-\/*]$/.test(event.key)) {
        numero(event.key)
    } else if (event.key === 'Enter') {
        event.preventDefault()
        result()
    } else if (event.key === 'Backspace') {
        expression = expression.slice(0, -1)
        atualizarVisor()
    }
})
