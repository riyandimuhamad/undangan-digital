import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// MOCK DATA for MVP without real Firebase setup yet
export const mockInvitationData = {
  "sample-wedding": {
    bride: "Calon perempuan",
    brideFullName: "Calon Perempuan",
    brideParents: "Bapak Nama Ayah & Ibu Nama Ibu",
    bridePhoto: "https://api.dicebear.com/7.x/avataaars/svg?seed=bride1&backgroundColor=f8fafc",
    groom: "Adam",
    groomFullName: "Adam",
    groomParents: "Bapak Nama Ayah & Ibu Nama Ibu",
    groomPhoto: "https://api.dicebear.com/7.x/avataaars/svg?seed=groom1&backgroundColor=f8fafc",
    date: "2026-06-18T08:00:00",
    displayDate: "18 JUNI 2026",
    displayTime: "08.00 WIB",
    location: {
      name: "Grand Ballroom, Ritz Hotel",
      address: "123 Wedding Lane, City Center",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.305141208945!2d106.82274931476906!3d-6.223447995494498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f4c6579899%3A0x6e76d91d1e4c7674!2sThe%20Ritz-Carlton%20Jakarta%2C%20Mega%20Kuningan!5e0!3m2!1sen!2sid!4v1655182961525!5m2!1sen!2sid"
    },
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
    ],
    bankDetails: {
      bank: "BCA",
      accountNumber: "1234567890",
      accountName: "John Doe"
    },
    musicUrl: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
  }
};
