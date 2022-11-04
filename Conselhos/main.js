

const getAPI = async () => {
    const responseAPI = await fetch("https://api.adviceslip.com/advice")
    const APIdata = await responseAPI.json();
    return await APIdata
}

const renderAdvice = async () =>{
    const data = await getAPI()
    
    document.querySelector("#element").textContent = data.slip.advice
}

renderAdvice()