//HTML elements
const pokemonImg = document.querySelector('#imgPoke')
const inptPoke = document.querySelector('#namePoke')
const nomePoke = document.querySelector('#nomePoke')
const IDpoke = document.querySelector('#IDpoke')
const btprev =  document.querySelector('#prev')
const btnext =  document.querySelector('#next')
const ImgsTypes = document.querySelector('.ImgsTypes')

// Others Vars
var idAtual = 1

// Call Poke API
const fetchPoke = async (pokemon) =>{
    const APIresp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const APIdata = await APIresp.json();
    return APIdata
}

// To render content
const renderPoke = async (pokemon) => {
    const data = await fetchPoke(pokemon)
    
    // Nome e ID
    const nome = data.name
    idAtual = data.id

    nomePoke.innerHTML = nome.charAt(0).toUpperCase() + nome.slice(1);
    IDpoke.innerHTML = "#"+ idAtual + " -"
    
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

    // Types
    ImgsTypes.innerHTML = ""
    for (let index = 0; index < data.types.length; index++) {
        let img = document.createElement('img')
        let path = '/Pokedex/imgs/Types/' + data.types[index]['type']['name'] + '.png'

        img.src = path
        ImgsTypes.appendChild(img)
    }
}

// Input 
inptPoke.addEventListener('change', (event) => {
    event.preventDefault();
    renderPoke(inptPoke.value.toLowerCase())
});

// Button Prev
btprev.addEventListener('click' , (event) => {
    event.preventDefault();
    if (idAtual > 1){
        idAtual -= 1
        renderPoke(idAtual)
    }
});

// Butotn Next
btnext.addEventListener('click' , (event) => {
    event.preventDefault();
    idAtual += 1
    renderPoke(idAtual)
});

// Base Call
renderPoke(idAtual)

