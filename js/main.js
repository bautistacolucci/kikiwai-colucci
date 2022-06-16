function ola() {
    wind = parseInt(prompt("Ingrese un número segun la direccion del viento: 1. offshore 2. sideshore 3. onshore"));
    swell = parseFloat(prompt("Ingresa el ángulo que forma el swell con la costa, 0 a 90, siendo 90 lo mas perpendicular a la costa posible"));
    period = parseFloat(prompt("Ingrese el periodo de olas en segundos"));
    if (wind == 1) {
        wind = 5
    } else if (wind == 2) {
        wind = 2.5
    } else if (wind == 3) {
        wind = 1
    };
    if (swell <= 30) {
        swell = 1
    } else if (swell <= 50) {
        swell = 2.5
    } else if (swell <= 70) {
        swell = 4
    } else if (swell > 70) {
        swell = 5
    };
    if (period <= 5) {
        period = 1
    } else if (period < 7) {
        period = 2.5
    } else if (period < 9) {
        period = 3.5
    } else if (period >= 9) {
        period = 5
    };
};

class Puntajes {
    constructor(nombre, puntaje) {
        this.nombre = nombre;
        this.puntaje = puntaje;
    }
}

const historial = [];

let pregunta = prompt("Hola, si queres conocer la calidad de la ola que estas por surfear presiona enter, para salir ingresa NO.").toUpperCase();

while (pregunta != "NO") {
    ola();
    let puntaje = (wind + swell + period) / 3;
    let nombre = prompt("ingresa el nombre con el que quieres guardar el puntaje en el historial");
    const puntajeGuardado = new Puntajes(nombre, puntaje);
    historial.push(puntajeGuardado);

    if (isNaN(puntaje)) {
        alert("Datos mal ingresado, prueba con un numero");
    } else {
        alert("el puntaje de la ola es de " + puntaje);
    }

    for (const guardado of historial) {
        alert("Se guardo en el historial tu puntaje de " + guardado.puntaje + " con el nombre de " + guardado.nombre);
    };

    const buscar = historial.find((el) => el.nombre === prompt("Para buscar un puntaje en el historial, ingresa el nombre con el que lo guardaste"));

    alert("buscate el puntaje " + buscar.nombre + " de " + buscar.puntaje)

    pregunta = prompt("Hola, si queres conocer la calidad de la ola que estas por surfear presiona enter, para salir ingresa NO.");
};