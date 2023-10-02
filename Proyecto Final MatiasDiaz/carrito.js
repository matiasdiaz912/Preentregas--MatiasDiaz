// const todosLosProductos = [
//     {id: 1,Nombre: "Celular Samsung Galaxy A04e 64/3gb Copper - Multipoint", Precio: 80000, imagen: "./img/img-main1.jpg",  Marca: "Samsung", Categoria: "Celulares", cantidad: 1},
//     {id: 2,Nombre: "Iphone 14 Max pro ||  12 y 18 cuotas sin interes", Precio: 740000 , imagen: "./img/img.main2.jpg",  Marca: "Apple", Categoria: "Celulares", cantidad: 1},
//     {id: 3,Nombre: "Celular Motorola E13 64GB Natural | Cuotas sin interes", Precio: 75000 , imagen: "./img/img.main3.jpg",  Marca: "Motorola", Categoria: "Celulares", cantidad: 1},
//     {id: 4,Nombre: "Heladeras Samsung: la gama completa | Samsung Argentina", Precio: 300000 , imagen: "./img/img.main6.avif",  Marca: "Samsung", Categoria: "Heladeras", cantidad: 1},
//     {id: 5,Nombre: "HELADERA DREAN 364 LTRS BLANCA (HDR370F11S)", Precio: 255000 , imagen: "./img/img-main4.jpg",  Marca: "Sbs Dream", Categoria: "Heladeras", cantidad: 1},
//     {id: 6,Nombre: "Heladera SBS Drean YEP26FGTFSS 719 Lts Inoxidable", Precio: 750000 , imagen: "./img/img.main5.jpg",  Marca: "Sbs Dream", Categoria: "Heladeras", cantidad: 1},
//     {id: 7,Nombre: "Tablets Smart Tab Serie Yoga | 12 cuotas sin interes", Precio: 200000 ,  imagen: "./img/img-main7.jpg",  Marca: "Smart Tab", Categoria: "Mas Productos", cantidad: 1},
//     {id: 8,Nombre: "Tablet Samsung Galaxy Tab S6 Lite 10.4 64gb Y 4gb Ram Nox",Precio: 150000 , imagen: "./img/img-main8.webp",  Marca: "Samsung", Categoria: "Mas Productos", cantidad: 1},
//     {id: 9,Nombre: "Licuadora de Pie Oster 1,5Lts 3 Velocidades BLSTPYG1211NBG", Precio: 45000 , imagen: "./img/img-main9.jpg",  Marca: "Oster", Categoria: "Mas Productos", cantidad: 1},
//     {id: 10,Nombre: "Licuadora Midea 800W INOX | MIDEA | cuotas sin interes",Precio: 30000, imagen: "./img/img-main10.jpg",  Marca: "Midea", Categoria: "Mas Productos", cantidad: 1},
//     {id: 11,Nombre: "Batidora Amasadora Philips HR7912/90 || cuotas s/ interes", Precio: 60000, imagen: "./img/batidoras.jpg",  Marca: "Philips", Categoria: "Mas Productos", cantidad: 1},
//     {id: 12,Nombre: "Batidora Amasadora Philips H832947890 || cuotas s/interes",Precio: 60000, imagen: "./img/batidoras1.jpg",  Marca: "Philips", Categoria: "Mas Productos", cantidad: 1},
// ]




let desplegarCarrito = document.getElementById("desplegarCarrito")
let PrecioFinal = document.getElementById("PrecioFinal")
let productos = document.getElementById("productos")
let botonBasura;
let botonEliminar;
let botones;
let precioTotal;
let botonComprar;
import { traerMonedero } from "./main.js";
import { monederoEnCarrito } from "./main.js";
import { desplazarProductos } from "./main.js";
export let carritoLleno;
export let botonesCarrito = document.getElementById("btn-carrito")
export let carritoEnCSS = document.getElementById("carritoenCSS")

///////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////

 let carritoCargado = []
let productosToTheBasket = JSON.parse(localStorage.getItem("Productos del carrito"))

let productosCargados;

if(!productosCargados){
    localStorage.setItem("Productos del carrito", JSON.stringify(productosToTheBasket))
    productosCargados = productosToTheBasket
}else{
    productosCargados = productosToTheBasket
}
 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 if(productosCargados === null || productosCargados.length == 0){

         let divCarrito = document.createElement("div")
        divCarrito.innerHTML = `<h2 class="carrito--vacio">El carrito esta vacio</h2>`
       carritoEnCSS.append(divCarrito)
        
}else{

        carritoLleno = document.createElement("div")
            carritoLleno.classList.add("carrito-lleno")
            carritoLleno.innerHTML = `<i class="bi bi-exclamation-lg"></i>`
            desplegarCarrito.append(carritoLleno)


         productosCargados.forEach(item => {
            let carritoConProductos = document.createElement("div")
            carritoConProductos.classList.add("carritoEnCss")
    
            carritoConProductos.innerHTML = `<img src="${item.imagen}" alt="${item.Nombre}">
    
            <div class="parrafo-carrito"> 
                <h2>${item.Nombre}</h2>
                <p>$${item.Precio}</p>
                <p>Cantidad: ${item.cantidad}</p>
            </div>
                <button class="trash" id="${item.id}"">
                <i class="bi bi-trash3"></i>
            </button>`
    
            carritoEnCSS.append(carritoConProductos)
    
        })

         eliminarProductosCarrito()
         botonesEnCarrito()
    }
    
 

 ///////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////
 
 export function recorrerArrayProductos (array){
   
    productos.innerHTML = ""
    array.forEach((item) => {
        let div = document.createElement("div")
        div.classList.add("productos-por-separado")
        div.innerHTML += `<img src="${item.imagen}" alt="${item.Nombre}">
         <h2 class="titulo-productos">${item.Nombre}</h2>
         <p class="price">$${item.Precio}</p>
         <button class="btn-productos" id="${item.id}">Comprar</button>
     `
     productos.append(div)

 })
   
    botones = document.querySelectorAll(".btn-productos")
     productosAlCarrito()
}


 function productosAlCarrito (){
    botones.forEach(item => {
        item.addEventListener("click", (e) => {

            let boton = e.currentTarget.id
            const productoElegido = todosLosProductos.find(producto => producto.id == boton)
        
           
            if(productosCargados.some(producto => producto.id == boton)){
                let productoElegido2 = productosCargados.findIndex(producto => producto.id == boton)
               productosCargados[productoElegido2].cantidad++
                productosCargados.cantidad * productosCargados.precio
                localStorage.setItem("Productos del carrito", JSON.stringify(productosCargados))  
              
               
              }else{
                productosCargados.cantidad = 1
                    productosCargados.push(productoElegido)
                    localStorage.setItem("Productos del carrito", JSON.stringify(productosCargados)) 
                 
              }
                 
           productosCargados = JSON.parse(localStorage.getItem("Productos del carrito")) 

           if(!carritoLleno){
            carritoLleno = document.createElement("div")
            carritoLleno.classList.add("carrito-lleno")
            carritoLleno.innerHTML = `<i class="bi bi-exclamation-lg"></i>`
            }

            carritoActualizado()
            botonesEnCarrito()

           Toastify({
            text: "Producto Agregado",
            className: "info",
            duration: 2000,
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();       

          
        })
    })

}

// recorrerArrayProductos(todosLosProductos)   

fetch("productos.json")
.then(response => response.json())
.then(data => 
    recorrerArrayProductos(data))

 productosCargados = JSON.parse(localStorage.getItem("Productos del carrito")) 
localStorage.setItem("Productos", JSON.stringify(todosLosProductos))

///////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////

 
function carritoActualizado(){
   if(productosCargados === null || productosCargados.length == 0){

    carritoEnCSS.innerHTML = ""
    
    
        let div = document.createElement("div")
        div.innerHTML = `<h2 class="carrito--vacio">El carrito esta vacio</h2>`
        carritoEnCSS.append(div)
        
    
    
    }else{

       carritoEnCSS.innerHTML = ""
    
       productosCargados.forEach(item => {
        let carritoConProductos = document.createElement("div")
        carritoConProductos.classList.add("carritoEnCss")

        carritoConProductos.innerHTML = `<img src="${item.imagen}" alt="${item.Nombre}">

        <div class="parrafo-carrito"> 
            <h2>${item.Nombre}</h2>
            <p>$${item.Precio}</p>
            <p>Cantidad: ${item.cantidad}</p>
        </div>
            <button class="trash" id="${item.id}"">
            <i class="bi bi-trash3"></i>
        </button>`

        carritoEnCSS.append(carritoConProductos)

    })
    
}
   //////////////////////////////////////////////////////////////////////////////////////////////// Parte Final delCarrito ////////////////////////////}

       
        eliminarProductosCarrito()
}





function botonesEnCarrito (){

if(productosCargados === null || productosCargados.length == 0){

    PrecioFinal.innerHTML = ""
    botonesCarrito.innerHTML = ""
    carritoActualizado()
    
}else{

   PrecioFinal.innerHTML = ""
    botonesCarrito.innerHTML = ""

    precioTotal = document.createElement("p")
   let total = productosCargados.reduce((acumulador, item) => acumulador + item.Precio * item.cantidad, 0)
   
   precioTotal.innerHTML = `Precio Total: $${total}`
   precioTotal.classList.add("precioFinal")
   PrecioFinal.append(precioTotal)
   
   botonComprar = document.createElement("button")
   botonComprar.innerHTML = "Comprar"
   botonComprar.classList.add("botonCompras")
   botonesCarrito.append(botonComprar)
   
   
   botonEliminar = document.createElement("button")
   botonEliminar.innerHTML = "Limpiar Carrito"
   botonEliminar.classList.add("botonCompras")
   botonesCarrito.append(botonEliminar)
   
   botonComprar.addEventListener("click", () =>{

    if(traerMonedero > total){
        productosCargados.splice(0, productosCargados.length)
        carritoCargado.splice(0, carritoCargado.length)
        localStorage.setItem("Productos del carrito", JSON.stringify(productosCargados))
    
           carritoActualizado()
           botonesEnCarrito()
       
           Swal.fire({
               icon: 'success',
               title: 'Exitosa',
               text: 'Tu compra fue realizada con exito!',
             })

             let precioTotal2 = traerMonedero - total
             monederoEnCarrito.innerHTML = `Monedero: $${precioTotal2}`
             monederoEnCarrito.classList.add("display-none")
             carritoSuperior.append(monederoEnCarrito)

             desplegarCarrito.className = "display-none"
            desplazarProductos.className = "sinPadding"
            monederoEnCarrito.className = "display-none"

    }else{
        Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'Superaste el precio del monedero',
          })
    }
       
   
   })
   
   
   botonEliminar.addEventListener("click", () =>{
 productosCargados.splice(0, productosCargados.length)
 localStorage.setItem("Productos del carrito", JSON.stringify(productosCargados))
    carritoActualizado()
    botonesEnCarrito()
})

}
}

    ///////////////////////////////////////////////////////////////////////////// Eliminar Productos del carrito /////////////////////////////////////////////////////

function eliminarProductosCarrito (){

    botonBasura = document.querySelectorAll(".trash")
    botonBasura.forEach(item => {
        item.addEventListener("click", (e) => {
           
            let boton = e.currentTarget.id
            const productoElegido = productosCargados.findIndex(producto => producto.id == boton)

            productosCargados.splice(productoElegido, 1)
           
            carritoActualizado()
            botonesEnCarrito()

            localStorage.setItem("Productos del carrito", JSON.stringify(productosCargados))

           Toastify({
            text: "Producto Eliminado",
            className: "warning",
            duration: 2000,
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
     
        })
    })
}

