function InserirNumber(number) {
    const text = document.createTextNode(number);
    document.getElementById("dsp").appendChild(text)
}

function Clear(tp){
    if (tp == 'C'){
        let value = document.getElementById("dsp").innerHTML
        value = value.slice(0, -1);
        document.getElementById("dsp").innerHTML = value
    } else { 
        stats = false
        document.getElementById("dsp").innerHTML = ""
    }
}

function RealizarOper(Oper) {
    if (stats == false){
        var stats = true
        var opera1 = parseFloat(document.getElementById("dsp").innerHTML)
        document.getElementById("dsp").innerHTML = ""
    } else if (stats == true) {
        var opera2 = parseFloat(document.getElementById("dsp").innerHTML)
        if (Oper == '*') {
            const result = opera1 * opera2
            document.getElementById("dsp").innerHTML = ""
        }
    }
}