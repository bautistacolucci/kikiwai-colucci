alert("Calculador de calidad de olas, califica las olas del 1 al 5");
let wind = parseInt(prompt("Ingrese un número segun la direccion del viento: 1. offshore 2. sideshore 3. onshore"));
let swell = parseInt(prompt("Ángulo que forma el swell con la costa, 0 a 90"));
let period = parseInt(prompt("Periodo de olas en segundos"));
let nombre = prompt("nombre con el que desea guardar el puntaje");

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

function calculador() {
    puntaje = (resultado1 + resultado2 + resultado3) / 3;
    alert("el puntaje de la ola es " + puntaje)
};

function guardar() {
    let guardado = new guardarPuntaje(nombre, puntaje)
    historial.push(guardado)   
};

calculador();
guardar();

historial.forEach()