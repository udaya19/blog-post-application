import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import 'firebase/firestore'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC34KLOizQ2jV4zVC95jh0arOQKrD_-oag",
  authDomain: "react-hooks-blog-66d46.firebaseapp.com",
  projectId: "react-hooks-blog-66d46",
  storageBucket: "react-hooks-blog-66d46.appspot.com",
  messagingSenderId: "1007575473486",
  appId: "1:1007575473486:web:763d3e6b59a1fb3a18d21f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

