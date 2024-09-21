// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tal vez es la forma en que dices mi nombre", time: 12 },
  { text: "Tal vez es la forma en que juegas tu juego", time: 18 },
  { text: "Pero es tan bueno, nunca conocí a nadie como tú", time: 24 },
  { text: "Pero es tan bueno, nunca soñé con nadie como tú", time: 32 },
  { text: "Y he oído de un amor que llega una vez en la vida", time: 40 },
  { text: "Y estoy bastante segura de que eres ese amor mío", time: 47 },

  // Coro
  { text: "Porque estoy en un campo de dientes de león", time: 54 },
  { text: "Deseando que cada uno sea para que seas mío, mío", time: 58 },
  { text: "Y veo el para siempre en tus ojos", time: 65 },
  { text: "Me siento bien cuando veo tu sonrisa, sonrisa", time: 70 },
  { text: "Deseando en dientes de león todo el tiempo", time: 76 },
  { text: "Rezando a Dios que algún día seas mío", time: 83 },
  { text: "Deseando en dientes de león todo el tiempo", time: 90 },
  { text: "Todo el tiempo", time: 96 },

  { text: "Creo que tú eres el indicado para mí", time: 104 },
  { text: "Porque se vuelve tan difícil respirar", time: 109 },
  { text: "Cuando me miras", time: 115 },
  { text: "Nunca me he sentido tan viva y libre", time: 118 },
  { text: "Cuando me miras", time: 122 },
  { text: "Nunca me he sentido tan feliz", time: 126 },

  // Coro repetido
  { text: "Porque estoy en un campo de dientes de león", time: 135 },
  { text: "Deseando que cada uno sea para que seas mío, mío", time: 140 },
  { text: "Y veo el para siempre en tus ojos", time: 145 },
  { text: "Me siento bien cuando veo tu sonrisa, sonrisa", time: 150 },
  { text: "Deseando en dientes de león todo el tiempo", time: 157 },
  { text: "Rezando a Dios que algún día seas mío", time: 164 },
  { text: "Deseando en dientes de león todo el tiempo", time: 170 },
  { text: "Todo el tiempo", time: 175 },
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