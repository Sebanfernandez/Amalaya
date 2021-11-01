class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
        this.cantidad = parseFloat(cantidad);
    }
    sumaIva() {
        console.log("El Precio con IVA de " + (this.nombre) + " es de $" + (this.precio * 1.21));
    }
    vender() {
        console.log(this.vendido = true);
    }
    precioSugerido() {
        console.log("El precio sugerido al publico de " + (this.nombre) + " con IVA icluido es de $ " + (this.precio * 1.21 * 1.4));
    }
}
//Declaramos un array de productos para almacenar objetos, podemos hacerlo asi:

const productos = [];
productos.push(new Producto("Aceite Pet 1L", 710, 24));
productos.push(new Producto("Aceite Vidrio 1/2L", 520, 12));
productos.push(new Producto("Aceite Pet 3L", 1990, 2));
productos.push(new Producto("Aceite Pet 5L", 3200, 0));
productos.push(new Producto("Garrapiñada de Almendras", 250, 10));
productos.push(new Producto("Garrapiñada de Nuez", 250, 10));
productos.push(new Producto("Garrapiñada de Maní", 120, 15));
productos.push(new Producto("Garrapiñada de Girasol", 120, 15));

// O podemos predirlo mediante un prompt:

var nombreP = prompt("Ingrese el nombre del producto ")
var precioP = prompt("Ingrese el precio del producto")
var cantidadP = prompt("Ingrese el stock del producto")
productos.push(new Producto (nombreP, precioP, cantidadP))

//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos){
    producto.sumaIva();
    producto.precioSugerido();
}


// Alertamos sobre un producto sin STOCK

var sinStock = productos.filter(Producto => Producto.cantidad == 0);

for (const producto of sinStock){
    alert("El Producto " + producto.nombre + " no cuenta con stock")
}

//Buscamos un producto

var ingresar =  prompt("Ingrese el nombre del producto que desea buscar")
var prodIngresado = productos.filter(producto => producto.nombre.includes(ingresar))
console.log(prodIngresado); 
console.log();("Estos son los productos que coinciden con su busqueda:") 

for (const producto of prodIngresado){
    console.log();("Nombre: " + producto.nombre) 
}


// Ordenamos de mayor a menor la cantidad

var ordenCantidad = []
ordenCantidad = productos.map(elemento => elemento);
ordenCantidad.sort(function(a, b){
return b.cantidad - a.cantidad
})
console.log();("Productos ordenados de mayor a menor cantidad existente: ");

for (const producto of ordenCantidad){
    console.log();("Nombre:" + producto.nombre)
}