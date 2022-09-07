const pokemonImg = document.querySelector('#imgPoke')
const inptPoke = document.querySelector('#namePoke')
const nomePoke = document.querySelector('#nomePoke')
const IDpoke = document.querySelector('#IDpoke')
const btprev =  document.querySelector('#prev')
const btnext =  document.querySelector('#next')
const ImgsTypes = document.querySelector('.ImgsTypes')

var idAtual = 1
const types = {
    bug:"/Pokedex/imgs/Types/Bug.png",
    dark:"/Pokedex/imgs/Types/Dark.png",
    dragon:"/Pokedex/imgs/Types/Dragon.png",
    electric:"/Pokedex/imgs/Types/Electric.png",
    fairy:"/Pokedex/imgs/Types/Fairy.png",
    fighting:"/Pokedex/imgs/Types/Fighting.png",
    fire:"/Pokedex/imgs/Types/Fire.png",
    flying:"/Pokedex/imgs/Types/Flying.png",
    ghost:"/Pokedex/imgs/Types/Ghost.png",
    grass:"/Pokedex/imgs/Types/Grass.png",
    ground:"/Pokedex/imgs/Types/Ground.png",
    ice:"/Pokedex/imgs/Types/Ice.png",
    normal:"/Pokedex/imgs/Types/Normal.png",
    poison:"/Pokedex/imgs/Types/Poison.png",
    psychic:"/Pokedex/imgs/Types/Psychic.png",
    rock:"/Pokedex/imgs/Types/Rock.png",
    steel:"/Pokedex/imgs/Types/Steel.png",
    water:"/Pokedex/imgs/Types/Water.png"
}

const fetchPoke = async (pokemon) =>{
    const APIresp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const APIdata = await APIresp.json();
    return APIdata
}

const renderPoke = async (pokemon) => {
    const data = await fetchPoke(pokemon)
    // Imgs
    if (data.id > 649){
        pokemonImg.src = data['sprites']['front_default'] // ['versions']['generation-vi']['x-y']
        pokemonImg.style.width = "215px"
        pokemonImg.style.height = "215px"
    } else {
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        pokemonImg.style.width = "100%"
        pokemonImg.style.height = "100%"
    }
    // Nome e ID
    const nome = data.name
    idAtual = data.id
    nomePoke.innerHTML = nome.charAt(0).toUpperCase() + nome.slice(1);
    IDpoke.innerHTML = "#"+ data.id + " -"

    // Types
    ImgsTypes.innerHTML = ""
    for (let index = 0; index < data.types.length; index++) {
        let img = document.createElement('img')
        let path = data.types[index]['type']['name']
        
        img.src = types[path]
        ImgsTypes.appendChild(img)
    }

}

inptPoke.addEventListener('change', (event) => {
    event.preventDefault();
    renderPoke(inptPoke.value.toLowerCase())
});

btprev.addEventListener('click' , (event) => {
    event.preventDefault();
    if (idAtual > 1){
        idAtual -= 1
        renderPoke(idAtual)
    }
});

btnext.addEventListener('click' , (event) => {
    event.preventDefault();
    
    idAtual += 1
    renderPoke(idAtual)

});

renderPoke(idAtual)

