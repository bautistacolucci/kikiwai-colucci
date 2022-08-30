let wind = parseInt(document.getElementById("wind").value)
let swell = parseInt(document.getElementById("swell").value)
let period = parseInt(document.getElementById("period").value)
/* let nombre = document.getElementById("date").value */

let btnCalcular = document.getElementById("calcular")
let btnGuardar = document.getElementById("guardar")
let btnBuscar = document.getElementById("buscar")

let pResultado = document.getElementById("resultado")

let resultado1
let resultado2
let resultado3

let puntaje

const historial = [];

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
class guardarPuntaje {
    constructor(nombre, puntaje) {
        this.nombre = nombre;
        this.puntaje = puntaje;
    }
};

btnCalcular.addEventListener("click", calcular);
function calcular(e){
    e.preventDefault();
    puntaje = (resultado1 + resultado2 + resultado3) / 3;
    pResultado.innerHTML=`La calidad de la ola es de ${puntaje} estrellas`
};

btnGuardar.addEventListener("click", guardar)
function guardar() {
    let guardado = new guardarPuntaje(nombre, puntaje)
    historial.push(guardado)   
};

/* function calcular() {
    puntaje = (resultado1 + resultado2 + resultado3) / 3;
    alert("el puntaje de la ola es " + puntaje)
}; 

function guardar() {
    let guardado = new guardarPuntaje(nombre, puntaje)
    historial.push(guardado)   
};
*/

/* calculador();
guardar(); */