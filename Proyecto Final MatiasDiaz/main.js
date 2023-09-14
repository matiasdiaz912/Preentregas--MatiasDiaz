let procesarNombre = document.getElementById("enviar-nombre")
let sacarCartel = document.getElementById("sacar-cartel")
let eliminarCartel = document.getElementById("eliminar-cartel")
let parrafoDeAbajo = document.getElementById("parrafo-abajo")
let bienvenida = document.getElementById("bienvenida")
let body = document.querySelector("body")
let cambiarModo = document.getElementById("cambiar-modo")
let carritoJS = document.getElementById("carritoJS")
let activarHover = document.querySelectorAll(".active-hover-js")
let tituloVariado = document.getElementById("titulo-variado")
let cerrarCarrito = document.getElementById("cerrar-carrito")
let desplazarProductos = document.getElementById("desplazar--productos")


import { todosLosProductos } from "./carrito.js";
import { carritoEnCSS } from "./carrito.js";
import { botonesCarrito } from "./carrito.js";
import { carritoLleno } from "./carrito.js";


//////////////////////////////////////////////////////////////////////Empieza Modo Oscuro/////////////////////////////////////////////////////////////////////////////////////////

function activarModoOscuro (){
    body.classList.add("modo-oscuro")
    cambiarModo.innerHTML =  `<button class="boton-modos"><i class="bi bi-sun-fill colorClaro"></i></button>`
   carritoJS.classList.add("colorClaro")
    localStorage.setItem("modo-oscuro", "activado")
}

function desactivarModoOscuro (){
     body.classList.remove("modo-oscuro")
     cambiarModo.innerHTML = ""
     cambiarModo.innerHTML =  `<button class="boton-modos"><i class="bi bi-moon-fill"></i></button>`
     carritoJS.classList.remove("colorClaro")
    localStorage.setItem("modo-oscuro", "desactivado")
}

cambiarModo.addEventListener("click", () => {
body.classList.contains("modo-oscuro") ? desactivarModoOscuro() : activarModoOscuro()
})


let fondoPermanente = localStorage.getItem("modo-oscuro")

fondoPermanente === "activado" ? activarModoOscuro() : desactivarModoOscuro()

///////////////////////////////////////////////////////////////////////Termina Modo Oscuro//////////////////////////////////////////////////////////////////////////////////////


const noMostrar = () => {
    eliminarCartel.className = "display-none"
}

let traerNombreDelLs = localStorage.getItem("Nombre")


procesarNombre.addEventListener("submit", (e) => {
     e.preventDefault()
    let inputs = e.target.children
   localStorage.setItem("Nombre", inputs[0].value)
   location.reload()
})

sacarCartel.addEventListener("click", noMostrar)


if(traerNombreDelLs === "" || traerNombreDelLs.includes("@")){
    parrafoDeAbajo.innerText = "Error. Su nombre no ha sido registrado"
}else{
    noMostrar()
    bienvenida.innerText = `Bienvenido ${traerNombreDelLs}!`
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////Nav/////////////////////////////////////////////////////////////////////

activarHover.forEach(item => {
    item.addEventListener("click", (e) => {

        activarHover.forEach((item) => {
            item.classList.remove("active")
        })
        e.currentTarget.classList.add("active")

        if(e.currentTarget.id != "todos-completo"){
            let productosPorBoton = todosLosProductos.filter((producto) => producto.Categoria === e.currentTarget.id)
          
        recorrerArrayProductos(productosPorBoton)
            tituloVariado.innerHTML = productosPorBoton[0].Categoria
        
      }else{
        recorrerArrayProductos(todosLosProductos)
        tituloVariado.innerHTML = "Todos Los Productos"
      }

      })

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

carritoJS.addEventListener("click", () => {
    desplegarCarrito.className = "carritoDesplegado"
    cerrarCarrito.classList.add("visible")
    desplazarProductos.className = "padding"
    carritoEnCSS.className = ""
    botonesCarrito.className = "botonesCarrito"
    PrecioFinal.className = "precioFinal"
    carritoLleno.className = "display-none"
})

cerrarCarrito.addEventListener("click", () =>{
    desplegarCarrito.className = "display-none"
    desplazarProductos.className = "sinPadding"
    
})