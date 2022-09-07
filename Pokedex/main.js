const pokemonImg = document.querySelector('#imgPoke')
const inptPoke = document.querySelector('#namePoke')
const nomePoke = document.querySelector('#nomePoke')
const IDpoke = document.querySelector('#IDpoke')

const fetchPoke = async (pokemon) =>{
    const APIresp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const APIdata = await APIresp.json();
    console.log(APIdata)
    return APIdata
}

const renderPoke = async (pokemon) => {
    const data = await fetchPoke(pokemon)
    console.log(data)
    if (data.id > 649){
        pokemonImg.src = data['sprites']['front_default'] // ['versions']['generation-vi']['x-y']
        pokemonImg.style.width = "215px"
        pokemonImg.style.height = "215px"
    } else {
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        pokemonImg.style.width = "100%"
        pokemonImg.style.height = "100%"
    }
    const nome = data.name
    nomePoke.innerHTML = nome.charAt(0).toUpperCase() + nome.slice(1);
    IDpoke.innerHTML = "#"+ data.id + " -"

}

inptPoke.addEventListener('change', (event) => {
    event.preventDefault();
    renderPoke(inptPoke.value.toLowerCase())
});

renderPoke('1')