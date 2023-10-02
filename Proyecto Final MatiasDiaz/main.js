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
let monedero = document.getElementById("monedero")
let cartelMonedero = document.getElementById("div--monedero")
let sacarCartelMonedero = document.getElementById("sacar--cartel--monedero")
let enviarMonedero = document.getElementById("enviar-monedero")
let parrafoAbajo = document.getElementById("parrafoAbajo")
let carritoSuperior = document.getElementById("carritoSuperior")

export const todosLosProductos = [
    {id: 1,Nombre: "Celular Samsung Galaxy A04e 64/3gb Copper - Multipoint", Precio: 80000, imagen: "./img/img-main1.jpg",  Marca: "Samsung", Categoria: "Celulares", cantidad: 1},
    {id: 2,Nombre: "Iphone 14 Max pro ||  12 y 18 cuotas sin interes", Precio: 740000 , imagen: "./img/img.main2.jpg",  Marca: "Apple", Categoria: "Celulares", cantidad: 1},
    {id: 3,Nombre: "Celular Motorola E13 64GB Natural | Cuotas sin interes", Precio: 75000 , imagen: "./img/img.main3.jpg",  Marca: "Motorola", Categoria: "Celulares", cantidad: 1},
    {id: 4,Nombre: "Heladeras Samsung: la gama completa | Samsung Argentina", Precio: 300000 , imagen: "./img/img.main6.avif",  Marca: "Samsung", Categoria: "Heladeras", cantidad: 1},
    {id: 5,Nombre: "HELADERA DREAN 364 LTRS BLANCA (HDR370F11S)", Precio: 255000 , imagen: "./img/img-main4.jpg",  Marca: "Sbs Dream", Categoria: "Heladeras", cantidad: 1},
    {id: 6,Nombre: "Heladera SBS Drean YEP26FGTFSS 719 Lts Inoxidable", Precio: 750000 , imagen: "./img/img.main5.jpg",  Marca: "Sbs Dream", Categoria: "Heladeras", cantidad: 1},
    {id: 7,Nombre: "Tablets Smart Tab Serie Yoga | 12 cuotas sin interes", Precio: 200000 ,  imagen: "./img/img-main7.jpg",  Marca: "Smart Tab", Categoria: "Mas Productos", cantidad: 1},
    {id: 8,Nombre: "Tablet Samsung Galaxy Tab S6 Lite 10.4 64gb Y 4gb Ram Nox",Precio: 150000 , imagen: "./img/img-main8.webp",  Marca: "Samsung", Categoria: "Mas Productos", cantidad: 1},
    {id: 9,Nombre: "Licuadora de Pie Oster 1,5Lts 3 Velocidades BLSTPYG1211NBG", Precio: 45000 , imagen: "./img/img-main9.jpg",  Marca: "Oster", Categoria: "Mas Productos", cantidad: 1},
    {id: 10,Nombre: "Licuadora Midea 800W INOX | MIDEA | cuotas sin interes",Precio: 30000, imagen: "./img/img-main10.jpg",  Marca: "Midea", Categoria: "Mas Productos", cantidad: 1},
    {id: 11,Nombre: "Batidora Amasadora Philips HR7912/90 || cuotas s/ interes", Precio: 60000, imagen: "./img/batidoras.jpg",  Marca: "Philips", Categoria: "Mas Productos", cantidad: 1},
    {id: 12,Nombre: "Batidora Amasadora Philips H832947890 || cuotas s/interes",Precio: 60000, imagen: "./img/batidoras1.jpg",  Marca: "Philips", Categoria: "Mas Productos", cantidad: 1},
]



import { carritoEnCSS } from "./carrito.js";
import { botonesCarrito } from "./carrito.js";
import { carritoLleno } from "./carrito.js";
import { recorrerArrayProductos } from "./carrito.js";


//////////////////////////////////////////////////////////////////////Empieza Modo Oscuro/////////////////////////////////////////////////////////////////////////////////////////
export let traerMonedero = localStorage.getItem("Monedero")
export let monederoEnCarrito = document.createElement("div")
export let desplazarProductos = document.getElementById("desplazar--productos")

monederoEnCarrito.innerHTML = `Monedero: $${traerMonedero}`
monederoEnCarrito.classList.add("display-none")
carritoSuperior.append(monederoEnCarrito)


function activarModoOscuro (){
    body.classList.add("modo-oscuro")
    cambiarModo.innerHTML =  `<button class="boton-modos"><i class="bi bi-sun-fill colorClaro"></i></button>`
   carritoJS.classList.add("colorClaro")
   monedero.className = "walletClara"
    localStorage.setItem("modo-oscuro", "activado")
}

function desactivarModoOscuro (){
     body.classList.remove("modo-oscuro")
     cambiarModo.innerHTML = ""
     cambiarModo.innerHTML =  `<button class="boton-modos"><i class="bi bi-moon-fill"></i></button>`
     carritoJS.classList.remove("colorClaro")
    monedero.className = "wallet"
    localStorage.setItem("modo-oscuro", "desactivado")
}

cambiarModo.addEventListener("click", () => {
body.classList.contains("modo-oscuro") ? desactivarModoOscuro() : activarModoOscuro()
})


let fondoPermanente = localStorage.getItem("modo-oscuro")

fondoPermanente === "activado" ? activarModoOscuro() : desactivarModoOscuro()

///////////////////////////////////////////////////////////////////////Termina Modo Oscuro//////////////////////////////////////////////////////////////////////////////////////


const noMostrar = (divEliminar) => {
    divEliminar.className = "display-none"
}

let traerNombreDelLs = localStorage.getItem("Nombre")


procesarNombre.addEventListener("submit", (e) => {
     e.preventDefault()
    let inputs = e.target.children
   localStorage.setItem("Nombre", inputs[0].value)
   location.reload()
})

sacarCartel.addEventListener("click", () => noMostrar(eliminarCartel))


if(traerNombreDelLs === "" || traerNombreDelLs.includes("@")){
    parrafoDeAbajo.innerText = "Error. Su nombre no ha sido registrado"
}else{
    noMostrar(eliminarCartel)
    bienvenida.innerText = `Bienvenido ${traerNombreDelLs}!`
}

////////////////////////////////////////////////////////////////////// Monedero ////////////////////////////////////////////////////////////////////////////////////
monedero.addEventListener("click", () => {
    cartelMonedero.className = "cartel-monedero"
})


sacarCartelMonedero.addEventListener("click", () => noMostrar(cartelMonedero))


function actualizarMonedero (){


    enviarMonedero.addEventListener("submit", (e) => {

        e.preventDefault()
        let inputs = e.target.children

        if (inputs[0].value <= 0 || inputs[0].value === undefined || inputs[0].value === null){
            cartelMonedero.className = "cartel-monedero"
           parrafoAbajo.innerText = "El monedero no puede ser menor que 1"
        
        }else{

            noMostrar(cartelMonedero)
            localStorage.setItem("Monedero", inputs[0].value)
            traerMonedero = localStorage.getItem("Monedero")
    
           monederoEnCarrito.classList.add("display-none")
            monederoEnCarrito.innerHTML = `Monedero: $${traerMonedero}`
            carritoSuperior.append(monederoEnCarrito)
        }
    })

}

actualizarMonedero()


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
    monederoEnCarrito.classList.remove("display-none")
    monederoEnCarrito.className = "monedero--carrito"
    carritoLleno.className = "display-none"
})

cerrarCarrito.addEventListener("click", () =>{
    desplegarCarrito.className = "display-none"
    desplazarProductos.className = "sinPadding"
    monederoEnCarrito.className = "display-none"
})

