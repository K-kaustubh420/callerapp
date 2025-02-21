import React from 'react';
import { Phone, PhoneOff, Mic, MicOff } from 'lucide-react';
import { useCallStore } from '../store/useCallStore';

export const CallControls: React.FC<{
  onEndCall: () => void;
}> = ({ onEndCall }) => {
  const [isMuted, setIsMuted] = React.useState(false);
  const { localStream } = useCallStore();

  const toggleMute = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 p-4 bg-white rounded-lg shadow-md">
      <button
        onClick={toggleMute}
        className={`p-4 rounded-full ${
          isMuted ? 'bg-red-500' : 'bg-gray-200'
        } hover:opacity-80 transition-opacity`}
      >
        {isMuted ? (
          <MicOff className="w-6 h-6 text-white" />
        ) : (
          <Mic className="w-6 h-6 text-gray-700" />
        )}
      </button>
      <button
        onClick={onEndCall}
        className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
      >
        <PhoneOff className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};