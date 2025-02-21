import { create } from 'zustand';
import SimplePeer from 'simple-peer';

interface CallState {
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  peer: SimplePeer.Instance | null;
  isCallActive: boolean;
  sessionId: string | null;
  transcription: string;
  scamDetected: boolean;
  setLocalStream: (stream: MediaStream) => void;
  setRemoteStream: (stream: MediaStream) => void;
  setPeer: (peer: SimplePeer.Instance) => void;
  setCallActive: (active: boolean) => void;
  setSessionId: (id: string) => void;
  updateTranscription: (text: string) => void;
  setScamDetected: (detected: boolean) => void;
  reset: () => void;
}

export const useCallStore = create<CallState>((set) => ({
  localStream: null,
  remoteStream: null,
  peer: null,
  isCallActive: false,
  sessionId: null,
  transcription: '',
  scamDetected: false,
  setLocalStream: (stream) => set({ localStream: stream }),
  setRemoteStream: (stream) => set({ remoteStream: stream }),
  setPeer: (peer) => set({ peer }),
  setCallActive: (active) => set({ isCallActive: active }),
  setSessionId: (id) => set({ sessionId: id }),
  updateTranscription: (text) => set((state) => ({ 
    transcription: state.transcription + '\n' + text 
  })),
  setScamDetected: (detected) => set({ scamDetected: detected }),
  reset: () => set({
    localStream: null,
    remoteStream: null,
    peer: null,
    isCallActive: false,
    sessionId: null,
    transcription: '',
    scamDetected: false,
  }),
}));