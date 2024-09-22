// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ya se que no hay reglas ni en el amor, ni en la amistad", time: 7 },
  { text: "Lo que es muy importante es hablarse con honestidad", time: 15 },
  { text: "Por eso hoy te traigo", time: 24 },
  { text: "Unas palabras que regalarte", time: 28 },
  { text: "No soy ningún poeta", time: 34 },
  { text: "Ni busco impresionarte", time: 38 },
  { text: "Es que me gustas tuuuuuuuu", time: 43 },
  { text: "Me haces feliz en un segundo", time: 48 },
  { text: "No sé si sea tu luuuuuuuuz", time: 52 },
  { text: "Pero te veo y quedo mudo", time: 57 },
  { text: "Baby i love youuuu", time: 61 },
  { text: "Yo quiero que te quedes en mi mundo", time: 65 },
  { text: "Quiero confesarte", time: 70 },
  { text: "Que aunque te conozco poco", time: 73 },
  { text: "Ya te quiero mucho", time: 78 },
  { text: "Mucho, mucho, mucho", time: 83 },
  { text: "No vayas a pensar que es una declaración casual", time: 90 },
  { text: "No busca una respuesta, busco que tu sepas nada más", time: 99 },
  { text: "Que me gustas tuuuuuu", time: 106 },
  { text: "Me haces feliz en un segundo", time: 111 },
  { text: "No sé si sea tu luuuuuuz", time: 114 },
  { text: "Pero te veo y quedo mudo", time: 120 },
  { text: "Baby i love youuuu", time: 123 },
  { text: "Yo quiero que te quedes en mi mundo", time: 128 },
  { text: "Quiero confesarte", time: 133 },
  { text: "Que aunque te conozco poco", time: 136 },
  { text: "Ya se que talvez te sorprenda mi sinceridad", time: 141 },
  { text: "Mi sinceridad", time: 146 },
  { text: "Pero no hay nada malo", time: 149 },
  { text: "En decirte la verdad", time: 153 },
  { text: "Es que me gustas tuuuuuuuuu", time: 157 },
  { text: "Me haces feliz en un segundo", time: 163 },
  { text: "No sé si sea tu luuuuuuuuz", time: 166 },
  { text: "Pero te veo y me quedo mudo", time: 172 },
  { text: "Baby i love youuuu", time: 175 },
  { text: "Yo quiero que te quedes en mi mundo", time: 180 },
  { text: "Quiero confesarte, que aunque te conozco poco", time: 184 },
  { text: "Ya te quiero mucho", time: 192 },
  { text: "Mucho, mucho, mucho", time: 197 },
  { text: "Pero mucho, muchoooo, muchooooo", time: 201 },












];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);