const pokemonImg = document.querySelector('#imgPoke')
const inptPoke = document.querySelector('#namePoke')

const fetchPoke = async (pokemon) =>{
    const APIresp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const APIdata = await APIresp.json();
    return APIdata
}

const renderPoke = async (pokemon) => {
    const data = await fetchPoke(pokemon)
    console.log(data)
    if (data.id > 649){
        pokemonImg.src = data['sprites']['front_default'] // ['versions']['generation-vi']['x-y']
        pokemonImg.style.width = "500px"
    } else {
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        pokemonImg.style.width = "500px"
    }
    


}

inptPoke.addEventListener('change', (event) =>{
    event.preventDefault();
    renderPoke(inptPoke.value.toLowerCase())
});

renderPoke('1')