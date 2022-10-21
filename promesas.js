console.clear();

// setTimeout(() => {
//     console.log('en 5 segundos va a aparecer este msj')
// }, 5000)

// setInterval(() => {
//     console.log('cada 2 segundos va a aparecer este mensaje')
// }, 2000)

let promesa = (respuesta) => new Promise(function (resuelta, rechazada) {
    if (respuesta) {
        resuelta('Promesa Resuelta')
    } else {
        rechazada('Promesa rechazada')
    }
})
// console.log('Promesa con true:', promesa(true))

//

promesa = (respuesta) => new Promise((resolve, reject) => {
    setTimeout(() => {
        respuesta
            ? resolve('Promesa resuelta')
            : reject('Promesa rechazada')
    }, 2000)
})
// console.log('Promesa con setTimeout con true:', promesa(true))






// THEN CATCH FINALLY

// promesa(true)
//     .then(rta => console.log(rta))
//     .catch(err => console.log(err))

// promesa(false)
//     .then(respuesta => console.log(respuesta))
//     .catch(err => console.log(err))

// promesa(true)
//     .then(respuesta => console.log(respuesta))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Se finalizó la solicitud'))

fetch('https://pokeapi.co/api/v2/pokemon/haunter')
    .then(res => res.json())
    .then(data => {
        const img = document.getElementById('pokemon')
        img.src = `${data.sprites.front_default}`
    })
    .catch(err => console.log('NO EXISTE ESE POKEMON', err))






// ASYNC AWAIT

// async function demeMiPokemon(poke) {
//     let pokemon
//     pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
//     pokemon = await pokemon.json()

//     const sprite = pokemon.sprites.front_default
//     const imagen = document.createElement('img')
//     imagen.src = sprite
//     imagen.width = 100
//     document.getElementById('pokemones').append(imagen)
// }

const demeMiPokemon = async (poke) => {

    let pokemon
    pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    pokemon = await pokemon.json()

    const sprite = pokemon.sprites.front_default
    const imagen = document.createElement('img')
    imagen.src = sprite
    imagen.width = 100
    document.getElementById('pokemones').append(imagen)
}

demeMiPokemon('farfetchd')
demeMiPokemon('ditto')
demeMiPokemon('gastly')
demeMiPokemon('bulbasaur')
demeMiPokemon('charmander')
