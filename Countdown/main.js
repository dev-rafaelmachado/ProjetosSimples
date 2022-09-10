const   eDays = document.querySelector('#days'),
        eHrs = document.querySelector('#hrs'),
        eMin = document.querySelector('#min'),
        eSec = document.querySelector('#sec');

var vSec = 30,
    vMin = 2,
    vHrs = 1,
    vDays = 2;
    
function check (digit){
    x = String(digit)
    if (x.length <= 1){
        return '0' + digit
    } else {
        return digit
    }
}

setInterval(function (){
    
    if(vSec <= 0){
        if (vMin > 0) {
            vMin --
            vSec = 59
        } else if (vHrs > 0){
            vHrs --
            vMin = 59
            vSec = 59
        } else if (vDays > 0){
            vDays --
            vHrs = 23
            vMin = 59
            vSec = 59 
        }
    } else{
        vSec--
    }
    eSec.textContent = check (vSec)
    eMin.textContent = check (vMin)
    eHrs.textContent = check (vHrs)
    eDays.textContent = check (vDays) 
}, 1000);
