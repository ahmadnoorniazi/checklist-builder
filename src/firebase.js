// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCwuXqaxYIdlhq633vY7mhrqFP3h_D4wZc",
  authDomain: "checklistbuilder-46bf6.firebaseapp.com",
  projectId: "checklistbuilder-46bf6",
  storageBucket: "checklistbuilder-46bf6.appspot.com",
  messagingSenderId: "685374014946",
  appId: "1:685374014946:web:a23bfa3fb030ca9802e5bb",
  measurementId: "G-2G7QSLP27G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
