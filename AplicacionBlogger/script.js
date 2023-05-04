// COPIAR CODIGO

document.getElementById("copy-button").addEventListener("click", function() {
  copyToClipboard(document.getElementById("code-to-copy").innerText);
  alert("¡El código se ha copiado correctamente!");
});

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}



//INICIO CODIGO VISUAL


//Imagen Portada
const botonImagenPortada = document.getElementById('boton-enviar'); 
const texto = document.getElementById('code-to-copy');

//NombreJuego
const inputNombreJuego = document.getElementById('nombre'); 
//ImagenPortadaJuego
const inputImagenPortada = document.getElementById('imagenPortada'); 
//Informacion
const inputInformacion = document.getElementById('informacion'); 
//Carrusel
const inputCarrusel1 = document.getElementById('carrusel1'); 
//Carrusel
const inputCarrusel2 = document.getElementById('carrusel2'); 
//Carrusel
const inputCarrusel3 = document.getElementById('carrusel3'); 
//Video
const inputVideo = document.getElementById('video'); 


function mostrarImagenPortada() {

  //NombreJuego
  const nombre = inputNombreJuego.value;
  //ImagenPortadaJuego
  const imagenPortada = inputImagenPortada.value;
  //Informacion
  const informacion = inputInformacion.value;
  //Carrusel
  const carrusel1 = inputCarrusel1.value;
  //Carrusel
  const carrusel2 = inputCarrusel2.value;
  //Carrusel
  const carrusel3 = inputCarrusel3.value;
  //Video
  const video = inputVideo.value;

  texto.textContent = `

  ${nombre}

  <center>

  <div class="separator" style="clear: both;">
  <a href="${imagenPortada}" style="display: block; padding: 1em 0px; text-align: center;">
  <img alt="" border="0" data-original-height="500" data-original-width="500" src="${imagenPortada}" />
  </a>
  </div>
  <br>
  ${informacion}
  <br>
  <hr>

  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="${carrusel1}" class="d-block w-100" alt="imagen1">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="${carrusel2}" class="d-block w-100" alt="imagen2">
    </div>
    <div class="carousel-item">
      <img src="${carrusel3}" class="d-block w-100" alt="imagen3">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
${video}

<script>
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframe) => {
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '480p');
  });
</script>

<hr>

</center>
 `
 
 ;

}




botonImagenPortada.addEventListener('click', mostrarImagenPortada);




//INICIO CODIGO BOTONES

const botonBotones = document.getElementById('boton-enviar-boton'); 
const textoBotones = document.getElementById('code-to-copy2');

//ImagenPortadaJuego
const inputBoton = document.getElementById('boton'); 
//Formato
const inputFormato = document.getElementById('formato'); 

function mostrarBotones() {

  //Boton1
  const boton1 = inputBoton.value;
  //Boton1
  const formato = inputFormato.value;
  

  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button">Texto Personalizado</button>
  <hr>
  `
//INICIO DE SERVIDORES ACTUALIZADOS

//1FICHIER

if(texto.textContent.includes("1fichier") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga 1Fichier XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("1fichier") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga 1Fichier Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("1fichier") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga 1Fichier NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//Google Drive

if(texto.textContent.includes("drive.google") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Google Drive XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("drive.google") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Google Drive Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("drive.google") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Google Drive NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//Send.cm

if(texto.textContent.includes("send.cm") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Send.CM XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("send.cm") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Send.CM Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("send.cm") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Send.CM NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//megaup.net

if(texto.textContent.includes("megaup.net") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga MegaUp XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("megaup.net") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga MegaUp Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("megaup.net") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga MegaUp NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//uptobox

if(texto.textContent.includes("uptobox") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Uptobox XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("uptobox") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Uptobox Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("uptobox") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Uptobox NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//mega.nz

if(texto.textContent.includes("mega.nz") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Mega XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("mega.nz") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Mega Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("mega.nz") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Mega NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//mediafire

if(texto.textContent.includes("mediafire") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Mediafire XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("mediafire") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Mediafire Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("mediafire") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Mediafire NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//rapidgator

if(texto.textContent.includes("rapidgator") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Rapidgator XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("rapidgator") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Rapidgator Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("rapidgator") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Rapidgator NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//uploadhub

if(texto.textContent.includes("uploadhub") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Uploadhub XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("uploadhub") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Uploadhub Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("uploadhub") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Uploadhub NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//upload-4ever

if(texto.textContent.includes("upload-4ever") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Upload-4ever XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("upload-4ever") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Upload-4ever Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("upload-4ever") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Upload-4ever NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//ddownload

if(texto.textContent.includes("ddownload") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Ddownload XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("ddownload") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Ddownload Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("ddownload") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Ddownload NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//filefactory

if(texto.textContent.includes("filefactory") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Filefactory XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("filefactory") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Filefactory Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("filefactory") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga Filefactory NSP </button>
   <hr>
  `
}

// ---------------------------------------------------------------------------------------------------------------

//file-upload

if(texto.textContent.includes("file-upload") & inputFormato.value === "xci"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga File-upload XCI </button>
   <hr>
  `
}
else if (texto.textContent.includes("file-upload") & inputFormato.value === "update"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga File-upload Update </button>
   <hr>
  `
}
else if (texto.textContent.includes("file-upload") & inputFormato.value === "nsp"){
  texto.textContent = `
  <button class="btn btn-primary" onclick="window.location.href='${boton1}'"
   type="button"> Descarga File-upload NSP </button>
   <hr>
  `
}



}

botonBotones.addEventListener('click', mostrarBotones);
















  





























