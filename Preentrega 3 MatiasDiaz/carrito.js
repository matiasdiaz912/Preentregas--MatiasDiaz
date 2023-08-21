const carrito = [
    {Nombre: "Celular Samsung Galaxy A04e 64/3gb Copper - Multipoint", Precio: 80000, imagen: "./img/img-main1.jpg",  Marca: "Samsung", Categoria: "Celulares"},
    {Nombre: "Iphone 14 Max pro ||  12 y 18 cuotas sin interes", Precio: 740000 , imagen: "./img/img.main2.jpg",  Marca: "Apple", Categoria: "Celulares"},
    {Nombre: "Celular Motorola E13 64GB Natural | Cuotas sin interes", Precio: 75000 , imagen: "./img/img.main3.jpg",  Marca: "Motorola", Categoria: "Celulares"},
    {Nombre: "Heladeras Samsung: la gama completa | Samsung Argentina", Precio: 300000 , imagen: "./img/img.main6.avif",  Marca: "Samsung", Categoria: "Heladeras"},
    {Nombre: "HELADERA DREAN 364 LTRS BLANCA (HDR370F11S)", Precio: 255000 , imagen: "./img/img-main4.jpg",  Marca: "Sbs Dream", Categoria: "Heladeras"},
    {Nombre: "Heladera SBS Drean YEP26FGTFSS 719 Lts Inoxidable", Precio: 750000 , imagen: "./img/img.main5.jpg",  Marca: "Sbs Dream", Categoria: "Heladeras"},
    {Nombre: "Tablets Smart Tab Serie Yoga | 12 cuotas sin interes", Precio: 200000 ,  imagen: "./img/img-main7.jpg",  Marca: "Smart Tab", Categoria: "Tablets"},
    {Nombre: "Tablet Samsung Galaxy Tab S6 Lite 10.4 64gb Y 4gb Ram Nox",Precio: 150000 , imagen: "./img/img-main8.webp",  Marca: "Samsung", Categoria: "Tablets"},
    {Nombre: "Licuadora de Pie Oster 1,5Lts 3 Velocidades BLSTPYG1211NBG", Precio: 45000 , imagen: "./img/img-main9.jpg",  Marca: "Oster", Categoria: "Licuadoras"},
    {Nombre: "Licuadora Midea 800W INOX | MIDEA | cuotas sin interes",Precio: 30000, imagen: "./img/img-main10.jpg",  Marca: "Midea", Categoria: "Licuadoras"},
    {Nombre: "Batidora Amasadora Philips HR7912/90 || cuotas s/ interes", Precio: 60000, imagen: "./img/batidoras.jpg",  Marca: "Philips", Categoria: "Batidoras"},
    {Nombre: "Batidora Amasadora Philips H832947890 || cuotas s/interes",Precio: 60000, imagen: "./img/batidoras1.jpg",  Marca: "Philips", Categoria: "Batidoras"},
]

let activarHover = document.querySelectorAll(".active-hover-js")
let productos = document.getElementById("productos")
let tituloVariado = document.getElementById("titulo-variado")

function recorrerArrayProductos (array){
   
    productos.innerHTML = ""
    array.forEach((item) => {
        let div = document.createElement("div")
        div.classList.add("productos-por-separado")
        div.innerHTML += `<img src="${item.imagen}" alt="${item.Nombre}">
         <h2 class="titulo-productos">${item.Nombre}</h2>
         <p class="price">$${item.Precio}</p>
         <button class="btn-productos">Comprar</button>
     `
     productos.append(div)
}
)}

localStorage.setItem("Productos", JSON.stringify(carrito))

recorrerArrayProductos(carrito)

activarHover.forEach(item => {
    item.addEventListener("click", (e) => {

        activarHover.forEach((item) => {
            item.classList.remove("active")
        })
        e.currentTarget.classList.add("active")

        if(e.currentTarget.id != "todos-completo"){
            let productosPorBoton = carrito.filter((producto) => producto.Categoria === e.currentTarget.id)
            console.log(productosPorBoton);
        recorrerArrayProductos(productosPorBoton)
            tituloVariado.innerHTML = productosPorBoton[0].Categoria
        
      }else{
        recorrerArrayProductos(carrito)
        tituloVariado.innerHTML = "Todos Los Productos"
      }

      })

});
     