//Indicadores economicos

function obtenerIndicadores() {
  fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(data => {
      // Extrae los valores de todas las variables de la API
      const dolar = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(data.dolar.valor);
      const euro = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(data.euro.valor);
      const uf = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(data.uf.valor);
      const ipc = data.ipc.valor;
      const ivp = data.ivp.valor;
      const tpm = data.tpm.valor;
      const libra_cobre = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(data.libra_cobre.valor);
      const tasa_desempleo = data.tasa_desempleo.valor;
      const bitcoin = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(data.bitcoin.valor);

      // Agrega los indicadores al HTML
      const indicadoresContainer = document.querySelector('.indicadores');
      indicadoresContainer.innerHTML = `
        <p>Dólar: ${dolar}</p>
        <p>Euro: ${euro}</p>
        <p>UF: ${uf}</p>
        <p>IPC: ${ipc}%</p>
        <p>IVP: $${ivp}</p>
        <p>TPM: ${tpm}%</p>
        <p>Libra de Cobre: ${libra_cobre}</p>
        <p>Tasa de Desempleo: ${tasa_desempleo}%</p>
        <p>Bitcoin: ${bitcoin}</p>
      `;
    })
    .catch(error => console.error(error));
}

// Ejecutar la función cada 5 segundos (5000 milisegundos)
setInterval(obtenerIndicadores, 5000);

//Abrir pestañas

function abrirBiobiochile() {
  window.open("https://www.biobiochile.cl");
}

function abrirCooperativa() {
  window.open("https://www.cooperativa.cl");
}

function abrirDiarioOficial(){
  window.open("https://www.diariooficial.interior.gob.cl/#close");
}

function abrirleychile(){
  window.open("https://www.bcn.cl/leychile/");
}  

function abrirhoyxhoy(){
  window.open("https://www.hoyxhoy.cl/");
}
function abrirpublimetro(){
  window.open("https://www.publimetro.cl/");
}
 
 //Las Ultimas Noticias

 (function() {
  function actualizarEnlace() {
    var fecha = new Date(document.getElementById("fecha").value);
    var fecha_enlace = fecha.toISOString().slice(0, 10);
    console.log(fecha_enlace);
    document.getElementById("enlace").href =
      "https://www.lun.com/Pages/NewsDetail.aspx?dt=" +
      fecha_enlace +
      "&EsAviso=0&PaginaId=1&bodyid=0";
  }

  function actualizarImagen() {
    var fecha = new Date(document.getElementById("fecha").value);
    fecha.setUTCHours(0, 0, 0, 0); // establecer la zona horaria de la fecha a UTC
    console.log("Fecha en UTC:", fecha.toUTCString());
    console.log("Fecha en zona horaria local:", fecha.toLocaleString());
    var mes = fecha.toLocaleString("default", { month: "short" });
    var fecha_img =
      fecha.getFullYear() +
      "/" +
      mes.toLowerCase() +
      "/" +
      (fecha.getDate() < 10 ? "0" : "") +
      fecha.getDate();
    console.log(fecha_img);

    fecha.setDate(fecha.getDate() + 1); // Agregamos un día a la fecha
    mes = fecha.toLocaleString("default", { month: "short" }); // Actualizamos el valor de mes

    var dia = fecha.getDate().toString().padStart(2, "0");
    var mes_num = (fecha.getMonth() + 1).toString().padStart(2, "0");

    var url_final =
      "https://images.lun.com/lunservercontents/NewsPaperPages/" +
      fecha.getFullYear() +
      "/" +
      mes.toLowerCase() +
      "/" +
      dia +
      "/LUCST01LU" +
      dia +
      mes_num +
      "_550.jpg";
    console.log(url_final);
    document.getElementById("imagen").src = url_final;
  }

  function actualizarEnlaces() {
    actualizarEnlace();
    actualizarImagen();
  }

  function setearHoy() {
    var hoy = new Date();
    var dd = String(hoy.getDate()).padStart(2, "0");
    var mm = String(hoy.getMonth() + 1).padStart(2, "0"); // Enero es 0
    var yyyy = hoy.getFullYear();
    var fecha = yyyy + "-" + mm + "-" + dd;
    document.getElementById("fecha").value = fecha;
    actualizarEnlaces(); //link LUN
  }

  setearHoy(); // Llama a la función setearHoy al cargar la página

  // Asignar las funciones a los eventos correspondientes
  document.getElementById("fecha").addEventListener("change", actualizarEnlaces);
  document.getElementById("enlace").addEventListener("click", actualizarImagen);
})();

//Publimetro
(function() {
  function actualizarEnlace_2() {
    var fecha = new Date(document.getElementById("fecha").value);
    var dia = ("0" + (fecha.getDate() +1)).slice(-2);
    var mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
    var anio = fecha.getFullYear();
    var fecha_enlace = anio + mes + dia;
    console.log(fecha_enlace);
    var enlace = document.getElementById("enlace_2");
    enlace.href = "https://www.readmetro.com/es/chile/santiago/" + fecha_enlace + "/1/";
    enlace.target = "_blank";
  }

  // Resto del código

  function actualizarEnlaces_1() {
    actualizarEnlace_2();
    // Resto de funciones para actualizar enlaces
  }

  // Resto del código

  // Asignar las funciones a los eventos correspondientes
  document.getElementById("fecha").addEventListener("change", actualizarEnlaces_1);
  document.getElementById("enlace_2").addEventListener("click", actualizarEnlace_2);
})();

// La Tercera

function actualizarEnlaces() {
  var fecha = document.getElementById("fecha").value;
  var partesFecha = fecha.split("-");
  var año = partesFecha[0];
  var mes = partesFecha[1].padStart(2, '0');
  var dia = partesFecha[2].padStart(2, '0');
  var urlImagen = "https://img.kiosko.net/" + año + "/" + mes + "/" + dia + "/cl/cl_tercera.750.jpg";
  document.getElementById("imagen_3").src = urlImagen;
  console.log(urlImagen)
}

function setearHoy() {
  var fechaHoy = new Date();
  var año = fechaHoy.getFullYear();
  var mes = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
  var dia = fechaHoy.getDate().toString().padStart(2, '0');
  var fechaActual = año + "-" + mes + "-" + dia;
  document.getElementById("fecha").value = fechaActual;
  actualizarEnlaces_3();
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("fecha").valueAsDate = new Date(); // Establece la fecha actual en el campo de fecha
  actualizarEnlaces(); // Actualiza los enlaces con la fecha actual al cargar la página
});





