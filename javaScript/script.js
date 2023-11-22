
arrayCarrito=["pelota","billetera","leche"]

let eliminarProductos= ()=>{
    let productoEliminado = prompt("que producto desea eliminar")
    let index=arrayCarrito.indexOf(productoEliminado)
    if(index!==-1){
        arrayCarrito.splice(index, 1)
    }
    console.log(`el carrito queda asi: ${arrayCarrito}`)
}
eliminarProductos()