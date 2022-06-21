let btnCalcular = document.getElementById("calcular");

let wind = parseInt(document.getElementById("wind").value)
let swell = parseInt(document.getElementById("swell").value)
let period = parseInt(document.getElementById("period").value)

let puntaje 
let nombre

let resultado1
let resultado2
let resultado3

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
class Puntajes {
    constructor(nombre, puntaje) {
        this.nombre = nombre;
        this.puntaje = puntaje;
    }
}
const historial = [];

btnCalcular.addEventListener("click", () => {
    wind = document.getElementById("wind").value
    swell = document.getElementById("swell").value
    period = document.getElementById("period").value
    nombre = document.getElementById("nombre").value;
    ola()
    puntaje = (resultado1 + resultado2 + resultado3) / 3;
    const puntajeGuardado = new Puntajes(nombre, puntaje);
    historial.push(puntajeGuardado);

    let guardados = document.getElementById("guardados")
    guardados.innerHTML = ""
    for (const guardado of historial) {
        let li = document.createElement("li");
        li.innerText = `${guardado.nombre} ${guardado.puntaje}`
        guardados.appendChild(li)
    };
    
    let resultado = document.getElementById("resultado")
    resultado.innerText = "Resultado: " + puntaje;
});

let btnBuscar = document.getElementById("buscar");
let busqueda

btnBuscar.addEventListener("click", () => {
    busqueda = document.getElementById("busqueda").value;
    const filtradora = historial.filter((el) => el.nombre === busqueda)
    filtrados.innerHTML = ""
    for (const filtrado of filtradora) {
        let li = document.createElement("li");
        li.innerText = `${filtrado.nombre} ${filtrado.puntaje}`
        filtrados.appendChild(li)
    };
});

