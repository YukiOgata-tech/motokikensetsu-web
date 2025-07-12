// src/lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "demo",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "demo",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "demo",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "demo",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||
    "demo",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "demo",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "demo",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    console.warn("Analytics not supported", e);
  }
}
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
