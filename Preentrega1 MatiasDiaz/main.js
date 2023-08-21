let promo = prompt("Hoy estamos de promo con 30% de descuento y con hasta 6 cuotas sin interes en productos seleccionados \n Presione Enter o aceptar para conocer mas")
let productos = prompt("Los productos son \n - Computadora HP \n - Tablet Samsung \n  - IPhone 13 \n - Heladera Philips \n seleccione una para ver los detalles ").toLowerCase()


let precioCompu = 150000
let precioTablet = 100000
let precioIphone = 300000
let precioHeladera = 200000

const multi = (num) => num * 0.7

function bucle (param1){
    for(let i = 2; i <= 6; i++){
       let iteracion = param1 / i
       alert(`En ${i} cuotas quedaria en $${iteracion}`)
    }
}

function bucleEterno (){
let ingresaCuotas = parseInt(prompt("Ingrese las cuotas que desee"))

while (ingresaCuotas > 6 ){

    alert("ERROR. no ingresaste las cuotas")
    ingresaCuotas = parseInt(prompt("Ingrese las cuotas que desee"))
}
alert("Sus cuotas han sido realizadas con exito")
}



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





if (productos == "computadora hp" || productos == "computadora"){
   const precioCompu1 = multi(precioCompu)
   
    alert(`La computadora HP tiene un valor de $150.000 pero con el 30% de descuento quedaria en $${precioCompu1}`)
    let elegirCuotasOCaracter = prompt(`A continuacion apareceran las cuotas para poder adquirirlo o sino escriba "Caracteristicas" para ver los detallesdel producto`).toLowerCase()
   
    if(elegirCuotasOCaracter == "caracteristicas"){
        alert(objetoCompu)
    }else{
        alert("")
    }
    bucle(precioCompu1)
    bucleEterno ()

}else if (productos == "tablet samsung" || productos == "tablet"){
   const tablet2 = multi(precioTablet)
    alert(`La Tablet Samsung tiene un valor de $100.000 pero con el 30% de descuento quedaria en $${tablet2} \n A continuacion apareceran las cuotas para poder adquirirlo`)
    
    bucle(tablet2)
    bucleEterno ()

}else if(productos == "iphone 13" || productos == "iphone"){
    
  const iPhone1 = multi(precioIphone)
    alert(`El Iphone 13 tiene un valor de $300.000 pero con el 30% de descuento quedaria en $${iPhone1}} \n A continuacion apareceran las cuotas para poder adquirirlo`)
    bucle(iPhone1)
    bucleEterno ()
}else if (productos == "heladera philips" || productos == "heladera"){

   const heladera2 = multi(precioHeladera)
    alert(`La heladera Philips tiene un valor de $200.000 pero con el 30% de descuento quedaria en $${heladera2} \n A continuacion apareceran las cuotas para poder adquirirlo`)
     bucle(heladera2)
     bucleEterno ()
}else{
    alert("Error. No ha ingresado ni un producto en descuento")
}

