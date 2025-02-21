import React from 'react';
import { Phone } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { CallControls } from './components/CallControls';
import { TranscriptionView } from './components/TranscriptionView';
import { useCallStore } from './store/useCallStore';

function App() {
  const {
    isCallActive,
    setLocalStream,
    setCallActive,
    setSessionId,
    reset
  } = useCallStore();

  const startCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setLocalStream(stream);
      setSessionId(uuidv4());
      setCallActive(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const endCall = () => {
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Secure Audio Calls
          </h1>
          <p className="text-gray-600">
            Make secure calls with real-time transcription and fraud detection
          </p>
        </header>

        {!isCallActive ? (
          <div className="text-center">
            <button
              onClick={startCall}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg
                hover:bg-blue-600 transition-colors flex items-center
                justify-center mx-auto space-x-2"
            >
              <Phone className="w-6 h-6" />
              <span>Start New Call</span>
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <TranscriptionView />
            <CallControls onEndCall={endCall} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;