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

    if (wind == 1) {
        resultado1 = 5
    } else if (wind == 2) {
        resultado1 = 2.5
    } else if (wind == 3) {
        resultado1 = 1
    };
    if (swell <= 30) {
        resultado2 = 1
    } else if (swell <= 50) {
        resultado2 = 2.5
    } else if (swell <= 70) {
        resultado2 = 4
    } else if (swell > 70) {
        resultado2 = 5
    };
    if (period <= 5) {
        resultado3 = 1
    } else if (period < 7) {
        resultado3 = 2.5
    } else if (period < 9) {
        resultado3 = 3.5
    } else if (period >= 9) {
        resultado3 = 5
    };
   
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