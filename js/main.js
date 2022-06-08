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

let pregunta = prompt("Hola, si queres conocer la calidad de la ola que estas por surfear presiona enter, para salir ingresa NO.").toUpperCase();
while (pregunta != "NO") {
    ola();
    let puntaje = (wind + swell + period) / 3;
    if (isNaN(puntaje)) {
        alert("Datos mal ingresado, prueba con un numero")
    } else {
        alert("el puntaje de la ola es de " + puntaje);
    }
    pregunta = prompt("Hola, si queres conocer la calidad de la ola que estas por surfear presiona enter, para salir ingresa NO.");
};