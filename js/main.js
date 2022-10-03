let nombre;
let fecha;
let wind;
let swell;
let period;

let resultado1;
let resultado2;
let resultado3;

let puntaje;

let btnCalcular = document.getElementById("calcular");
let btnGuardar = document.getElementById("guardar");
let btnNombre = document.getElementById("btnNombre");
let btnFecha = document.getElementById("btnFecha");
let btnClima = document.getElementById("btnClima");
let btnCoord = document.getElementById("btnCoord");

let textResultado = document.getElementById("resultado");
let textHistorial = document.getElementById("historial");
let textClima = document.getElementById("textClima");
let textCoord = document.getElementById("textCoord");

let buscarNombre;
let buscarFecha;
let longitud = document.getElementById("longitud");
let latitud = document.getElementById("latitud");
let buscarCoord = document.getElementById("buscarCoord");

const historial = [];
class puntajeGuardado {
  constructor(nombre, fecha, puntaje) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.puntaje = puntaje;
  }
}

btnCalcular.addEventListener("click", calcular);
function calcular(e) {
  e.preventDefault();
  wind = parseInt(document.getElementById("wind").value);
  swell = parseInt(document.getElementById("swell").value);
  period = parseInt(document.getElementById("period").value);

  resultado1 = wind == 1 ? 5 : wind == 2 ? 2.5 : 1;
  resultado2 = swell >= 70 ? 5 : swell >= 50 ? 2.5 : 1.5;
  resultado3 = period >= 8 ? 5 : period >= 6 ? 2.5 : 1.5;

  puntaje = (resultado1 + resultado2 + resultado3) / 3;
  textResultado.innerHTML = `La calidad de la ola es de ${puntaje} estrellas`;
}

btnGuardar.addEventListener("click", guardar);
function guardar(e) {
  e.preventDefault();

  nombre = document.getElementById("name").value;
  fecha = document.getElementById("date").value;

  let guardado = new puntajeGuardado(nombre, fecha, puntaje);
  historial.push(guardado);
  let historialJson = JSON.stringify(historial);
  localStorage.setItem("historial", historialJson);

  Toastify({
    text: "Guardado con exito",

    duration: 2000,
    stopOnFocus: true,
  }).showToast();
}

btnFecha.addEventListener("click", buscarPorFecha);
function buscarPorFecha(e) {
  e.preventDefault();

  let getHistorial = localStorage.getItem("historial");
  let historialParse = JSON.parse(getHistorial);

  buscarFecha = document.getElementById("buscarFecha").value;

  const historialFiltrado = historialParse.filter(
    (el) => el.fecha == buscarFecha
  );
  textHistorial.innerHTML = ``;
  for (const item of historialFiltrado) {
    let li = document.createElement("li");
    li.innerHTML = `${item.fecha} ${item.puntaje}`;
    textHistorial.appendChild(li);
  }
}

btnNombre.addEventListener("click", buscar);
function buscar(e) {
  e.preventDefault();

  let getHistorial = localStorage.getItem("historial");
  let historialParse = JSON.parse(getHistorial);

  buscarNombre = document.getElementById("buscarNombre").value;

  const historialFiltrado = historialParse.filter(
    (el) => el.nombre == buscarNombre
  );
  textHistorial.innerHTML = ``;
  for (const item of historialFiltrado) {
    let li = document.createElement("li");
    li.innerHTML = `${item.nombre} ${item.puntaje}`;
    textHistorial.appendChild(li);
  }
}

const getCoordenadas = () => {
  fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=f8ca8b53-c77a-46c4-8227-6aeef0841407&geocode=${buscarCoord.value}&lang=en-US&format=json&skip=1`
  )
    .then((response) => response.json())
    .then((data) => {
      let coord =
        data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
      textCoord.innerHTML = `Longitud y latitud: ${coord}`;
    });
};

const getClima = () => {
  fetch(
    `https://marine-api.open-meteo.com/v1/marine?latitude=${parseFloat(latitud.value)}&longitude=${parseFloat(longitud.value)}&daily=wave_height_max,wave_direction_dominant,wave_period_max,wind_wave_direction_dominant,swell_wave_direction_dominant&timezone=auto`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      textClima.innerHTML = `
      Swell: ${data.daily.swell_wave_direction_dominant[0]}° <br>
      Wave height: ${data.daily.wave_height_max[0]}m <br>
      Wave period: ${data.daily.wave_period_max[0]}s <br>
      Wind direction ${data.daily.wave_direction_dominant[0]}°
      `;
    });
};

btnCoord.addEventListener("click", coord);
function coord(e) {
  e.preventDefault();
  getCoordenadas();
}

btnClima.addEventListener("click", clima);
function clima(e) {
  e.preventDefault();
  getClima()
}

/* fetch(`https://api.windy.com/api/point-forecast/v2`, {
      method: "POST",
      body: JSON.stringify({
        lat: 49.8,
        lon: 16.78,
        model: "GFS Wave",
        parameters: ["waves", "swell1"],
        levels: ["surface"],
        key: "MTIWdrPw8zXuTaZJKt1KwKPyluU87fXC",
      }),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
      })
      .catch((reject) => console.log(reject)); */

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
