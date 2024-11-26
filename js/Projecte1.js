const startButton = document.getElementById('startButton');
const result = document.getElementById('result');
let recognition;

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'es-ES';

    let finalTranscript = '';

    recognition.onresult = function(event) {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            let transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript + '\n';
            } else {
                interimTranscript += transcript;
            }
        }
        result.value = finalTranscript + interimTranscript;
    };

    recognition.onerror = function(event) {
        console.error('Error en el reconeixement de veu:', event.error);
    };

    startButton.onclick = function() {
        if (recognition.isStarted) {
            recognition.stop();
            startButton.textContent = 'Iniciar Transcripció';
        } else {
            recognition.start();
            startButton.textContent = 'Apagar Transcripció';
        }
        recognition.isStarted = !recognition.isStarted;
    };
} else {
    startButton.style.display = 'none';
    result.value = 'El reconeixement de veu no està suportat en aquest navegador.';
}

