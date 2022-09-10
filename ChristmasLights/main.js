const cssVar = document.querySelector(':root');
const El_inpt = document.querySelector('#inpt');

El_inpt.addEventListener("change", (event) =>{
    event.preventDefault();
    cssVar.style.setProperty('--delay-animation', El_inpt.value + 's')
})
