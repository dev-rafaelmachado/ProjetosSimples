const   range = document.querySelector('#rng'), 
        range1 = document.querySelector('#rng1'), 
        range2 = document.querySelector('#rng2'),
        range3 = document.querySelector('#rng3'),
        range4 = document.querySelector('#rng4 '),
        value = document.querySelector('#S-rng'),
        value1 = document.querySelector('#S-rng1'),
        value2 = document.querySelector('#S-rng2'),
        value3 = document.querySelector('#S-rng3'),
        value4 = document.querySelector('#S-rng4'),
        box = document.querySelector('#box');


{ // 
range.addEventListener('input', (event) => {
  event.preventDefault();
  value.textContent = range.value
  box.style.borderRadius = range.value + "px"
  
  range1.value = range.value
  value1.textContent = range.value // 1
  range2.value = range.value
  value2.textContent = range.value // 2
  range3.value = range.value
  value3.textContent = range.value // 3
  range4.value = range.value
  value4.textContent = range.value // 4
});
range1.addEventListener('input', (event) => {
  event.preventDefault();
  value1.textContent = range1.value
  box.style.borderTopLeftRadius = range1.value + "px"
});
range2.addEventListener('input', (event) => {
  event.preventDefault();
  value2.textContent = range2.value
  box.style.borderTopRightRadius = range2.value + "px"
});
range3.addEventListener('input', (event) => {
  event.preventDefault();
  value3.textContent = range3.value
  box.style.borderBottomLeftRadius = range3.value + "px"
});
range4.addEventListener('input', (event) => {
  event.preventDefault();
  value4.textContent = range4.value
  
  box.style.borderBottomRightRadius = range4.value + "px" 
});
}
