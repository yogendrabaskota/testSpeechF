import React, { useState, useEffect } from 'react';

const Recorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcription, setTranscription] = useState("");
    const [recognition, setRecognition] = useState(null);

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window)) {
            alert("Speech Recognition not supported in this browser.");
            return;
        }
        const speechRecognition = new window.webkitSpeechRecognition();
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        speechRecognition.lang = 'en-US';

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
    }, []);

    const startRecording = () => {
        if (recognition) {
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
