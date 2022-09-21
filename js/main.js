let nombre
let fecha
let wind
let swell
let period

let resultado1
let resultado2
let resultado3

let puntaje

let btnCalcular = document.getElementById("calcular")
let btnGuardar = document.getElementById("guardar")
let btnNombre = document.getElementById("btnNombre")
let btnFecha = document.getElementById("btnFecha")


let textResultado = document.getElementById("resultado")
let textHistorial = document.getElementById("historial")

let buscarNombre
let buscarFecha

const historial = [];
class puntajeGuardado {
    constructor(nombre, fecha, puntaje) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.puntaje = puntaje;
    }
};

btnCalcular.addEventListener("click", calcular);
function calcular(e){
    e.preventDefault();
    wind = parseInt(document.getElementById("wind").value)
    swell = parseInt(document.getElementById("swell").value)
    period = parseInt(document.getElementById("period").value)

    resultado1 = wind == 1 ?  5 : wind == 2 ? 2.5 : 1;
    resultado2 = swell >= 70 ? 5 : swell >= 50 ? 2.5 : 1.5;
    resultado3 = period >= 8 ? 5 : period >= 6 ? 2.5 : 1.5; 

    puntaje = (resultado1 + resultado2 + resultado3) / 3;
    textResultado.innerHTML=`La calidad de la ola es de ${puntaje} estrellas`
};

btnGuardar.addEventListener("click", guardar)
function guardar(e) {
    e.preventDefault();

    nombre = document.getElementById("name").value
    fecha = document.getElementById("date").value;

    let guardado = new puntajeGuardado(nombre, fecha, puntaje)
    historial.push(guardado)
    let historialJson = JSON.stringify(historial)
    localStorage.setItem("historial", historialJson)

    Toastify({

        text: "Guardado con exito",
        
        duration: 2000,
        stopOnFocus: true,
        
        }).showToast();
};

btnFecha.addEventListener("click", buscarPorFecha)
function buscarPorFecha(e) {
    e.preventDefault();
    
    let getHistorial = localStorage.getItem("historial")
    let historialParse = JSON.parse(getHistorial)
    
    buscarFecha = document.getElementById("buscarFecha").value
    
    const historialFiltrado = historialParse.filter((el) => el.fecha == buscarFecha)
    textHistorial.innerHTML=``
    for (const item of historialFiltrado) {
        let li = document.createElement("li")
        li.innerHTML= `${item.fecha} ${item.puntaje}`
        textHistorial.appendChild(li)
    }
};

btnNombre.addEventListener("click", buscar)
function buscar(e) {
    e.preventDefault();

    let getHistorial = localStorage.getItem("historial")
    let historialParse = JSON.parse(getHistorial)

    buscarNombre = document.getElementById("buscarNombre").value
    
    const historialFiltrado = historialParse.filter((el) => el.nombre == buscarNombre)
    textHistorial.innerHTML=``
    for (const item of historialFiltrado) {
        let li = document.createElement("li")
        li.innerHTML= `${item.nombre} ${item.puntaje}`
        textHistorial.appendChild(li)
    }
};


/* btnBuscar.addEventListener("click", buscar)
function buscar(e) {
    e.preventDefault();

    let getHistorial = localStorage.getItem("historial")
    let historialParse = JSON.parse(getHistorial)

    buscarNombre = document.getElementById("buscarNombre").value
    
    const historialFiltrado = historialParse.filter((el) => el.nombre == buscarNombre)
    textHistorial.innerHTML=``
    for (const item of historialFiltrado) {
        let li = document.createElement("li")
        li.innerHTML= `${item.nombre} ${item.puntaje}`
        textHistorial.appendChild(li)
    }
}; */

/* if (buscarFecha = undefined){
    const historialFiltrado = historialParse.filter((el) => el.nombre == buscarNombre)
    textHistorial.innerHTML=``
    for (const item of historialFiltrado) {
        let li = document.createElement("li")
        li.innerHTML= `${item.nombre} ${item.puntaje}`
        textHistorial.appendChild(li)
    }
} else if (buscarNombre == undefined){
    const historialFiltrado = historialParse.filter((el) => el.fecha == buscarFecha)
    textHistorial.innerHTML=``
    for (const item of historialFiltrado) {
        let li = document.createElement("li")
        li.innerHTML= `${item.fecha} ${item.puntaje}`
        textHistorial.appendChild(li)
    }
} */