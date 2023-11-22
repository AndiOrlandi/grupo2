





















































let arrayProducto = ["lechuga", "banana", "azucar", "mango", "tucuca","ajo", "aceite", "tomate", "pure"];

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
function filtrarProducto(query) {
  return arrayProducto.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filtrarProducto("lech")); 
