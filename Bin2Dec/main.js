const   bininpt = document.querySelector('#bin-inpt'),
        decinpt = document.querySelector('#dec-inpt')

bininpt.addEventListener('input', (event) =>{
    event.preventDefault();
    bininpt.style.color = "white"
    const binNum = bininpt.value
    let decimal = 0;

    for (let index = 0; index < binNum.length; index++) {
        if (parseInt(binNum[(binNum.length - index)-1]) != 1 && parseInt(binNum[(binNum.length - index)-1]) != 0) {
            bininpt.style.color = "red"
            break
        }
        decimal += Math.pow(2,index) * parseInt(binNum[(binNum.length - index)-1])
        decinpt.value = decimal
    }
});

decinpt.addEventListener('input', (event) =>{
    event.preventDefault();
    let decNum = decinpt.value
    let binario = ""
    while (decNum >= 1) {
        binario=binario.concat(String(decNum % 2))
        decNum = parseInt(decNum / 2)
    }
    bininpt.value = binario.split("").reverse().join("")
});
