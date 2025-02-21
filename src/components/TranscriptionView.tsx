import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useCallStore } from '../store/useCallStore';

export const TranscriptionView: React.FC = () => {
  const { transcription, scamDetected } = useCallStore();
  const transcriptionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (transcriptionRef.current) {
      transcriptionRef.current.scrollTop = transcriptionRef.current.scrollHeight;
    }
  }, [transcription]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {scamDetected && (
        <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 rounded-r">
          <div className="flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
            <p className="text-red-700">
              Warning: This call has been flagged as potentially fraudulent
            </p>
          </div>
        </div>
      )}
      <div
        ref={transcriptionRef}
        className="bg-white p-4 rounded-lg shadow-md h-64 overflow-y-auto"
      >
        {transcription.split('\n').map((line, i) => (
          <p key={i} className="mb-2">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};