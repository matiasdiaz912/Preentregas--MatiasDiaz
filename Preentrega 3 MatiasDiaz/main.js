let procesarNombre = document.getElementById("enviar-nombre")
let sacarCartel = document.getElementById("sacar-cartel")
let eliminarCartel = document.getElementById("eliminar-cartel")
let parrafoDeAbajo = document.getElementById("parrafo-abajo")
let bienvenida = document.getElementById("bienvenida")
let modoLight = document.getElementById("modo-light")
let modoDark = document.getElementById("modo-dark")
let body = document.body




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


    modoLight.addEventListener("click", () => {
        body.classList.remove("modo-oscuro")
    })

   modoDark.addEventListener("click", () => {
        body.classList.add("modo-oscuro")

   })
