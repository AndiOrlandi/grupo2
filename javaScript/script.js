//holi
// Clase de Practica

// 1.- Crear un repo en github.
// 2.- Crear la rama dev. 
// 3.- Vamos a tener solo un archivo index.html y un archivo script.js
// 4.- Crear una rama por cada integrante del equipo.
// 5.- Mergeamos las branch a dev.

// Trabajo en equipo
// Carrito de productos 
// Carrito de compras con Array
// ■ Crear una aplicación de carrito de compras donde se ingresen
// productos como elementos en un array.
// ■ las tareas que debe hacer son las siguientes:
// ● Agregar producto al carrito
// ● Listar los productos del carrito
// ● Buscar un producto en el carrito
// ● Filtrar productos que coincidan con una palabra, parte de ella
// o una letra
// ● Eliminar producto del carrito




let carrito = [];

cargarProductos();

function cargarProductos (){
    let n1 = parseInt(prompt("Digita la cantidad de elementos del array"))

    for (let i = 0; i < n1; i++) {
        parseInt(carrito.push(prompt(`Digita el elemento [${i + 1}] del array`)))
    }
    
    console.log(`Tu carrito completo es: [${carrito}]`)

}

listarElementos();

function listarElementos (){
    console.log(carrito)
}

