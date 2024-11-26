const textoInput = document.getElementById('textoInput');
const btnGenerar = document.getElementById('btnGenerar');
const btnPausar = document.getElementById('btnPausar');
const btnReanudar = document.getElementById('btnReanudar');
const btnDetener = document.getElementById('btnDetener');
const audioControls = document.getElementById('audioControls');

let utterance = null;
let isPaused = false;

btnGenerar.addEventListener('click', generarAudio);
btnPausar.addEventListener('click', pausarAudio);
btnReanudar.addEventListener('click', reanudarAudio);
btnDetener.addEventListener('click', detenerAudio);

function generarAudio() {
    const texto = textoInput.value;
    if (texto) {
        utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'es-ES';
        utterance.onend = () => {
            audioControls.style.display = 'none';
        };
        speechSynthesis.speak(utterance);
        audioControls.style.display = 'block';
    }
}

function pausarAudio() {
    if (utterance) {
        speechSynthesis.pause();
        isPaused = true;
    }
}

function reanudarAudio() {
    if (utterance && isPaused) {
        speechSynthesis.resume();
        isPaused = false;
    }
}

function detenerAudio() {
    if (utterance) {
        speechSynthesis.cancel();
        audioControls.style.display = 'none';
    }
}