let procesarNombre = document.getElementById("enviar-nombre")
let sacarCartel = document.getElementById("sacar-cartel")
let eliminarCartel = document.getElementById("eliminar-cartel")
let parrafoDeAbajo = document.getElementById("parrafo-abajo")
let bienvenida = document.getElementById("bienvenida")
let body = document.querySelector("body")
let cambiarModo = document.getElementById("cambiar-modo")




const noMostrar = () => {
    eliminarCartel.className = "display-none"
}

let traerNombreDelLs = localStorage.getItem("Nombre")


procesarNombre.addEventListener("submit", (e) => {
     e.preventDefault()
    let inputs = e.target.children
   localStorage.setItem("Nombre", inputs[0].value)
})

sacarCartel.addEventListener("click", noMostrar)

// (traerNombreDelLs === "" || traerNombreDelLs.includes("@")) || noMostrar()
//   bienvenida.innerText = `Bienvenido ${traerNombreDelLs}!`

if(traerNombreDelLs === "" || traerNombreDelLs.includes("@")){
    parrafoDeAbajo.innerText = "Error. Su nombre no ha sido registrado"
}else{
    noMostrar()
    bienvenida.innerText = `Bienvenido ${traerNombreDelLs}!`
}



function activarModoOscuro (){
        body.classList.add("modo-oscuro")
        cambiarModo.innerHTML =  `<button id="cambiar-modo" class="boton-modos white"></i></button><i class="bi bi-sun-fill"></i>`
        
        localStorage.setItem("modo-oscuro", "activado")
}

function desactivarModoOscuro (){
         body.classList.remove("modo-oscuro")
         cambiarModo.innerHTML = ""
         cambiarModo.innerHTML =  `<button id="cambiar-modo" class="boton-modos"><i class="bi bi-moon-fill"></i></button>`
        localStorage.setItem("modo-oscuro", "desactivado")
}

cambiarModo.addEventListener("click", () => {
    body.classList.contains("modo-oscuro") ? desactivarModoOscuro() : activarModoOscuro()
})




