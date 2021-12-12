const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');


cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Eliminar productos del carrito
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    //cuando se selecciona realizar Compra
    procesarCompraBtn.addEventListener('click', procesarCompra);

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });


}

function procesarCompra(e) {
    e.preventDefault();
    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes seleccionar al menos un producto!',
            timer: 2000,
            showConfirmButton: false
          }).then(function () {
            window.location = "productos.html";
        })
    }
    else if (cliente.value === '' || correo.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar nombre y correo',
            timer: 2000,
            showConfirmButton: false
          })
    }
    else {
    

            const cargandoGif = document.querySelector('#cargando');
            cargandoGif.style.display = 'block';

            const enviado = document.createElement('img');
            enviado.src = '/Images/compra-realizada.gif';
            enviado.style.display = 'block';
            enviado.width = '150';

             setTimeout(() => {
                cargandoGif.style.display = 'none';
                document.querySelector('#loaders').appendChild(enviado);
                setTimeout(() => {
                    enviado.remove();
                    compra.vaciarLocalStorage();
                    window.location = 'productos.html'
                }, 2000);

                 }, 2000);

       
    }
}

