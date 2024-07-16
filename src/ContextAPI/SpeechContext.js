import React, { createContext, useContext, useState } from 'react';

const SpeechContext = createContext()

export const useSpeech = () => useContext(SpeechContext)


const SpeechProvider = ({ children }) => {
    const [speaking, setSpeaking] = useState(false);
    const [volume, setVolume] = useState(1);
    const [language, setLanguage] = useState('en-US');
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);

    const speak = (text) => {
        if (window.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.volume = volume;
            utterance.lang = language;
            utterance.pitch = pitch;
            utterance.rate = rate;
            utterance.onstart = () => setSpeaking(true);
            utterance.onend = () => setSpeaking(false);
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('Speech Synthesis not supported');
        }
    };

    return (
        <SpeechContext.Provider value={{ speaking, speak, volume, setVolume, language, setLanguage, pitch, setPitch, rate, setRate }}>
            {children}
        </SpeechContext.Provider>
    );
}



export default SpeechProvider
