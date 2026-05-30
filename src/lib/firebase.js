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
    bride: "Revi",
    brideFullName: "Revi Meriskha",
    brideParents: "Bapak Iman Pirmansyah & Ibu Teni Safitri",
    bridePhoto: "https://api.dicebear.com/7.x/avataaars/svg?seed=bride1&backgroundColor=f8fafc",
    groom: "Adam",
    groomFullName: "Adam Siva Kusdinar",
    groomParents: "Bapak H. Agus & Ibu Hj. Nurhayati",
    groomPhoto: "https://api.dicebear.com/7.x/avataaars/svg?seed=groom1&backgroundColor=f8fafc",
    date: "2026-06-18T09:00:00",
    displayDate: "18 JUNI 2026",
    displayTime: "09.00 WIB",
    location: {
      name: "Kediaman Mempelai Wanita",
      address: "Kp Ciwangsa, RW.01, Tanjung, Kawalu, Tasikmalaya, Jawa Barat",
      mapUrl: "https://maps.google.com/maps?q=-7.395803167564179,108.1955547916187&t=&z=17&ie=UTF8&iwloc=&output=embed",
      linkUrl: "https://www.google.com/maps/dir/?api=1&destination=-7.395803167564179,108.1955547916187"
    },
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
    ],
    bankDetails: {
      bank: "SeaBank",
      accountNumber: "901256971505",
      accountName: "Adam Siva Kusdinar"
    },
    // Karena banyak website memblokir hotlinking, sangat disarankan menggunakan file mp3 sendiri
    musicUrl: "/wedding-song.mp3"
  }
};
