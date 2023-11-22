//holi


let carrito = [];

cargarProductos();

function cargarProductos (){
    let n1 = parseInt(prompt("Digita la cantidad de elementos del array"))

    for (let i = 0; i < n1; i++) {
        parseInt(carrito.push(prompt(`Digita el elemento [${i + 1}] del array`)))
    }
    
    console.log(`Tu carrito completo es: [${carrito}]`)

}

