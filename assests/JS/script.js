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


//Indicadores 2
/*const url = "https://mindicador.cl/api";

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById("dolar").textContent = `$ ${data.dolar.valor.toFixed(2)}`;
    document.getElementById("euro").textContent = `$ ${data.euro.valor.toFixed(2)}`;
    document.getElementById("uf").textContent = `$ ${data.uf.valor.toFixed(2)}`;
    document.getElementById("ipc").textContent = `$ ${data.ipc.valor.toFixed(2)}`;
    document.getElementById("utm").textContent = `$ ${data.utm.valor.toFixed(2)}`;
    document.getElementById("bitcoin").textContent = `$ ${data.bitcoin.valor.toFixed(2)}`;
    // duplicar los elementos para repetir los indicadores
    document.getElementById("dolar2").textContent = `$ ${data.dolar.valor.toFixed(2)}`;
    document.getElementById("euro2").textContent = `$ ${data.euro.valor.toFixed(2)}`;
    document.getElementById("uf2").textContent = `$ ${data.uf.valor.toFixed(2)}`;
    document.getElementById("ipc2").textContent = `$ ${data.ipc.valor.toFixed(2)}`;
    document.getElementById("utm2").textContent = `$ ${data.utm.valor.toFixed(2)}`;
  })
  .catch(error => console.log(error));
*/

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
 
 
 //Las Ultimas Noticias
 /*
 (function() {
 function actualizarEnlace() {
    var fecha = new Date(document.getElementById("fecha").value);
    var fecha_enlace = fecha.toISOString().slice(0, 10);
    console.log(fecha_enlace)
    document.getElementById("enlace").href = "https://www.lun.com/Pages/NewsDetail.aspx?dt=" + fecha_enlace + "&EsAviso=0&PaginaId=1&bodyid=0";
  }

  function actualizarImagen() {
    var fecha = new Date(document.getElementById("fecha").value);
    fecha.setUTCHours(0, 0, 0, 0); // establecer la zona horaria de la fecha a UTC
    console.log("Fecha en UTC:", fecha.toUTCString());
    console.log("Fecha en zona horaria local:", fecha.toLocaleString());
    var mes = fecha.toLocaleString('default', { month: 'short' });
    var fecha_img = fecha.getFullYear() + "/" + mes.toLowerCase() + "/" + (fecha.getDate() < 10 ? '0' : '') + fecha.getDate();
    //var fecha_img = fecha.getFullYear() + "/" + mes.toLowerCase() + "/" + fecha.getDate().toString().padStart(2, '0');
    console.log(fecha_img)

    //fecha_img = fecha_img.replace(/\//g, '/');
    //fecha.setDate(fecha.getDate() + 1); // Agregamos un día a la fecha
    fecha.setDate(fecha.getDate() + 1); // Agregamos un día a la fecha
    mes = fecha.toLocaleString('default', { month: 'short' }); // Actualizamos el valor de mes
    
    var dia = fecha.getDate().toString().padStart(2, '0');
    var mes_num = (fecha.getMonth() + 1).toString().padStart(2, '0');
    
    var url_final = "https://images.lun.com/lunservercontents/NewsPaperPages/" + fecha.getFullYear() + "/" + mes.toLowerCase() + "/" + dia + "/LUCST01LU" + dia + mes_num + "_550.jpg";
    console.log(url_final)
    document.getElementById("imagen").src = url_final;
  }

    var paralelepipedo = "Dann LeBeau"
    console.log(paralelepipedo)

  function actualizarEnlaces() {
    actualizarEnlace();
    actualizarImagen();
  }

  //Funcion de reseteo a hoy

  function setearHoy() {
    var hoy = new Date();
    var dd = String(hoy.getDate()).padStart(2, '0');
    var mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Enero es 0
    var yyyy = hoy.getFullYear();
    var fecha = yyyy + '-' + mm + '-' + dd;
    document.getElementById('fecha').value = fecha;
    actualizarEnlaces(); //link LUN
  } 
 })();  
*/

  

