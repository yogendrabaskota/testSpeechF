import  { useState, useEffect } from 'react';

const Recorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcription, setTranscription] = useState("");
    const [recognition, setRecognition] = useState(null);
    const [language, setLanguage] = useState("en-US"); // Default to English

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window)) {
            alert("Speech Recognition not supported in this browser.");
            return;
        }

        const speechRecognition = new window.webkitSpeechRecognition();
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        speechRecognition.lang = language; // Set language dynamically

        speechRecognition.onresult = (event) => {
            let finalTranscript = "";
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript + " ";
                }
            }
            setTranscription(prev => prev + finalTranscript);
        };

        setRecognition(speechRecognition);
    }, [language]); // Reinitialize on language change

    const startRecording = () => {
        if (recognition) {
            recognition.lang = language; // Update language before starting
            recognition.start();
            setIsRecording(true);
        }
    };

    const stopRecording = () => {
        if (recognition) {
            recognition.stop();
            setIsRecording(false);
        }
    };

    const clearTranscription = () => {
        setTranscription("");
    };

    return (
        <div className="main-content">
            <div className="language-selector">
                <label htmlFor="language">Choose Language: </label>
                <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="en-US">English (US)</option>
                    <option value="ne-NP">Nepali</option>
                </select>
            </div>
            <button 
                onClick={isRecording ? stopRecording : startRecording}
                className="recorder-btn"
            >
                {isRecording ? "Stop Recording" : "Start Recording"}
            </button>
            <button 
                onClick={clearTranscription}
                className="clear-btn"
            >
                Clear Text
            </button>
            <div className="transcription">
                <h3>Live Transcription:</h3>
                <p>{transcription || "listening..."}</p>
            </div>
        </div>
    );
};

export default Recorder;
