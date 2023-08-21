//Variables

alert("Hoy estamos de promo con 30% de descuento y con hasta 6 cuotas sin interes en productos seleccionados \n Presione Enter o aceptar para conocer mas")
let productos = prompt("Los productos son \n - Computadora HP \n - Tablet Samsung \n  - IPhone 13 \n - Heladera Philips \n seleccione una para ver los detalles ").toLowerCase()


let precioCompu = 150000
let precioTablet = 100000
let precioIphone = 300000
let precioHeladera = 200000


////////////////////////// Function




const multi = (num) => num * 0.7

function calcularCuotas (param1){
    for(let i = 2; i <= 6; i++){
       let iteracion = param1 / i
       alert(`En ${i} cuotas quedaria en $${iteracion}`)
    }
}

function determinarCuotas (){
let ingresaCuotas = parseInt(prompt("Ingrese las cuotas que desee"))

while (ingresaCuotas > 6 ){

    alert("ERROR. no ingresaste las cuotas")
    ingresaCuotas = parseInt(prompt("Ingrese las cuotas que desee"))
}
alert("Sus cuotas han sido realizadas con exito")
}





///////////////// Objetos


class Caracteristicas{
    constructor(fabricado, tamaño, marca, garantia){
        this.fabricado = fabricado
        this.tamaño = tamaño
        this.marca = marca
        this.garantia = garantia
    }
}

const objetoCompu = new Caracteristicas("Hecho en Argentina", "75 X 50", "HP", "1 Año")
const objetoTablet = new Caracteristicas("Hecho en Corea", "40 x 25", "Samsung", "1 Año")
const objetoIphone = new Caracteristicas("Hecho en Usa", "20 X 7", "Apple", "1 año")
const objetoHeladera = new Caracteristicas("Hecho en Usa", "1.50m x 80cm", "Philips", "1 Año")



///////// Condicionales

if (productos == "computadora hp" || productos == "computadora"){
   
    const precioCompu1 = multi(precioCompu)
   
    alert(`La computadora HP tiene un valor de $150.000 pero con el 30% de descuento quedaria en $${precioCompu1}`)
    // let Caracter = prompt(`A continuacion apareceran las caracteristicas del producto que haya elegido`)
   
    let pedirCaracteristicas = prompt(`A continuacion apareceran las caracteristicas que puede elegir \n - Fabricado \n - Tamaño \n - Marca \n - Garantia \n si no quiere ver ni una otra caracteristica presione enter`).toLowerCase()

    // if(pedirCaracteristicas in objetoCompu){
    //     alert(objetoCompu[pedirCaracteristicas])
    // }else{
    //     alert("La caracteristica no existe")
    // }

    while(pedirCaracteristicas in objetoCompu){
        alert(objetoCompu[pedirCaracteristicas])
        pedirCaracteristicas = prompt(`A continuacion apareceran las caracteristicas que puede elegir \n fabricado \n tamaño \n marca \n garantia \n si no quiere ver ni una otra caracteristica presione enter`)

    }
    // for (const propiedades in objetoCompu){
    //     alert(propiedades + ": " + objetoCompu[propiedades]);
    // }
    
    alert(`A continuacion apareceran las cuotas para poder adquirirlo`)

    calcularCuotas(precioCompu1)
    determinarCuotas()

}else if (productos == "tablet samsung" || productos == "tablet"){
   const tablet2 = multi(precioTablet)
    alert(`La Tablet Samsung tiene un valor de $100.000 pero con el 30% de descuento quedaria en $${tablet2}`)
    
    let pedirCaracteristicas = prompt(`A continuacion apareceran las caracteristicas que puede elegir \n - Fabricado \n - Tamaño \n - Marca \n - Garantia \n si no quiere ver ni una otra caracteristica presione enter`).toLowerCase()
      

    while(pedirCaracteristicas in objetoTablet){
        alert(objetoTablet[pedirCaracteristicas])
        pedirCaracteristicas = prompt(`A continuacion apareceran las caracteristicas que puede elegir \n fabricado \n tamaño \n marca \n garantia \n si no quiere ver ni una otra caracteristica presione enter`)

    }
    // for (const propiedades in objetoTablet){
    //     alert(propiedades + ": " + objetoTablet[propiedades]);
    // }

    alert(`A continuacion apareceran las cuotas para poder adquirirlo`)


    calcularCuotas(tablet2)
    determinarCuotas ()

}else if(productos == "iphone 13" || productos == "iphone"){
    
  const iPhone1 = multi(precioIphone)
    alert(`El Iphone 13 tiene un valor de $300.000 pero con el 30% de descuento quedaria en $${iPhone1}`)
    
    let pedirCaracteristicas = prompt(`A continuacion apareceran las caracteristicas que puede elegir \n - Fabricado \n - Tamaño \n - Marca \n - Garantia \n si no quiere ver ni una otra caracteristica presione enter`).toLowerCase()

    while(pedirCaracteristicas in objetoIphone){
        alert(objetoIphone[pedirCaracteristicas])
        pedirCaracteristicas = prompt(`A continuacion apareceran las caracteristicas que puede elegir \n fabricado \n tamaño \n marca \n garantia \n si no quiere ver ni una otra caracteristica presione enter`)

    }
    // for (const propiedades in objetoIphone){
    //     alert(propiedades + ": " + objetoIphone[propiedades]);
    // }

    alert(`A continuacion apareceran las cuotas para poder adquirirlo`)


    calcularCuotas(iPhone1)
    determinarCuotas()
}else if (productos == "heladera philips" || productos == "heladera"){

   const heladera2 = multi(precioHeladera)
    alert(`La heladera Philips tiene un valor de $200.000 pero con el 30% de descuento quedaria en $${heladera2}`)
    
    let pedirCaracteristicas = prompt(`A continuacion apareceran las caracteristicas que puede elegir \n - Fabricado \n - Tamaño \n - Marca \n - Garantia \n si no quiere ver ni una otra caracteristica presione enter`).toLowerCase()
    
    while(pedirCaracteristicas in objetoHeladera){
        alert(objetoHeladera[pedirCaracteristicas])
        pedirCaracteristicas = prompt(`A continuacion apareceran las caracteristicas que puede elegir \n fabricado \n tamaño \n marca \n garantia \n si no quiere ver ni una otra caracteristica presione enter`)

    }
   
    // for (const propiedades in objetoHeladera){
    //     alert(propiedades + ": " + objetoHeladera[propiedades]);
    // }

    alert(`A continuacion apareceran las cuotas para poder adquirirlo`)


    calcularCuotas(heladera2)
     determinarCuotas ()
}else{
    alert("Error. No ha ingresado ni un producto en descuento")
}






const productosArray = [
    {producto: "microondas", Marca: "philips", Color: "negro", Precio: 32000},
    {producto: "microondas", Marca: "lg", Color: "blanco", Precio: 29000},
    {producto: "lavarropas", Marca: "samsung", Color: "negro", Precio: 90000},
    {producto: "lavarropas", Marca: "lg", Color: "blanco", Precio: 95000},
    {producto: "horno electrico", Marca: "bg", Color: "negro", Precio: 40000},
    {producto: "horno electrico", Marca: "whirlpool", Color: "plateado", Precio: 43000},
    {producto: "batidora", Marca: "whirlpool", Color: "roja", Precio: 15000},
    {producto: "batidora", Marca: "philips", Color: "blanca", Precio: 14000},
    {producto: "licuadora", Marca: "lg", Color: "blanca", Precio: 15000},
    {producto: "licuadora", Marca: "philips", Color: "negra", Precio: 17000},
]



    alert("¿Por ultimo queres ver otro producto? \n En el siguiente buscador encontra algun producto que quieras y al precio que quieras")

    productosArray.forEach((item) => {
        alert(`Los productos que te podrian interesar son : ${item.producto}`)
        alert(`De la marca ${item.Marca}`)
    })
    



let elegirElectrodomestico = prompt("Eliga un electrodomestico (Solo el Nombre)").toLowerCase()
const filtrarElectros = productosArray.filter(item => item.producto === elegirElectrodomestico)


if(filtrarElectros != ""){
filtrarElectros.forEach((item) => {
    alert(`Producto: ${item.producto} \n Marca: ${item.Marca} \n Color: ${item.Color} \n Precio: $${item.Precio}`)
})

let findElectro = prompt("Ingrese por la marca el producto que quiera").toLowerCase()

let total = filtrarElectros.find((item) => item.Marca === findElectro)
alert(`El producto que usted eligio es ${total.producto} de la marca ${total.Marca} de color ${total.Color} a $${total.Precio}`)



////////Otro Producto 


let otroProducto = prompt("Si desea comprar otro producto aprete enter sino escriba ESC")



if(otroProducto != "ESC"){
   
    let elegirElectrodomestico = prompt("Eliga un electrodomestico (Solo el Nombre)").toLowerCase()
const filtrarElectros = productosArray.filter(item => item.producto === elegirElectrodomestico)


if(filtrarElectros != ""){
filtrarElectros.forEach((item) => {
    alert(`Producto: ${item.producto} \n Marca: ${item.Marca} \n Color: ${item.Color} \n Precio: $${item.Precio}`)
})

let findElectro = prompt("Ingrese por la marca el producto que quiera").toLowerCase()

let total2 = filtrarElectros.find((item) => item.Marca === findElectro)
alert(`El producto que usted eligio es ${total2.producto} de la marca ${total2.Marca} de color ${total2.Color} a $${total2.Precio}`)




const arrayVacio = []

arrayVacio.push(total.Precio)
arrayVacio.push(total2.Precio)

const sumaPrecio = arrayVacio[0] + arrayVacio[1]

// let sumaDeTotales = total.Precio + total2.Precio

alert(`El Precio final es $${sumaPrecio}`)


}else{
    alert("No ingreso el producto correcto")
}


}else{
    alert("Muchas gracias por su compra \n Vuelva pronto")
}

}else{
    alert("No ingreso el producto correcto")
}
























