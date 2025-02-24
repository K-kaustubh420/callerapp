# caller_app
Caller Fraud Detection System in realtime 
This is a simple app demonstrating how a real-time fraud detection system can work during a call. This project is created specifically for demo purposes at the IDFC & NPCI Hackathon hosted at NIT Trichy.

Tech Stack
Frontend: Next.js
Speech-to-Text: NPM speech-to-text package
Database: Firebase
AI Model: Hosted on Google Colab
Dashboard: Displays real-time fraud detection results
How It Works
The app transcribes the live call using the speech-to-text package.
The transcribed text is sent to an AI model hosted on Colab.
The AI analyzes the context of the call and determines if it is fraudulent.
A dashboard updates in real time, displaying whether the call is likely fraud or not.
Features
Real-time call transcription
AI-powered fraud detection
Live dashboard for fraud status
