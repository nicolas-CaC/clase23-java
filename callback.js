function mostrarNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log('soy mostrarNumeros', i)
    }
}
// mostrarNumeros()

const mostrarNumeros2 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}
// mostrarNumeros2()


// Funciones autoinvocadas
// (() => {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i)
//     }
// })();



// Callback

function mostrarCosas(funcion) {
    funcion()
}

// mostrarCosas(mostrarNumeros)

//

function callback(funcion) {
    funcion()
}

// callback(() => console.log('hola, soy el callback'))