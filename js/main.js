// Variables
let btnCalcular = document.getElementById("calcular");
let btnBuscar = document.getElementById("buscar");

let wind
let swell
let period

let puntaje
let nombre

let resultado1
let resultado2
let resultado3

// Función para evaluar los parametros
function ola() {
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
}

// Contructor de objetos y array para guardarlos
class Puntajes {
    constructor(nombre, puntaje) {
        this.nombre = nombre;
        this.puntaje = puntaje;
    }
}
const historial = [];

// Eventos botones "calcular" y "buscar"
btnCalcular.addEventListener("click", () => {
    wind = document.getElementById("wind").value
    swell = document.getElementById("swell").value
    period = document.getElementById("period").value
    nombre = document.getElementById("nombre").value;
    ola()
    puntaje = (resultado1 + resultado2 + resultado3) / 3;
    const puntajeGuardado = new Puntajes(nombre, puntaje);

    if (isNaN(puntaje)) {
        alert("Dato mal ingresado")
    } else {
        historial.push(puntajeGuardado);
        const almacenado = JSON.stringify(puntajeGuardado);
        localStorage.setItem(`${puntajeGuardado.nombre}`, `${almacenado}`);

        let guardados = document.getElementById("guardados")
        guardados.innerHTML = ""
        for (const guardado of historial) {
            let li = document.createElement("li");
            li.innerText = `${guardado.nombre} ${guardado.puntaje}`
            guardados.appendChild(li)
        };

        let resultado = document.getElementById("resultado")
        resultado.innerText = `Resultado: ${puntaje}`
    }
});

btnBuscar.addEventListener("click", () => {
    let busqueda = document.getElementById("busqueda").value;
    buscado = JSON.parse(localStorage.getItem(busqueda));

    let li = document.createElement("li");
    li.innerText = `${buscado.nombre} ${buscado.puntaje}`
    buscados.appendChild(li)
});