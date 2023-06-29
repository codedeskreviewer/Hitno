import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCkbdCcHREOJI5KoeGoidobsZ4jVRzJq24",
  authDomain: "hitno-97e2f.firebaseapp.com",
  projectId: "hitno-97e2f",
  storageBucket: "hitno-97e2f.appspot.com",
  messagingSenderId: "24542498226",
  appId: "1:24542498226:web:ac6ddb7ef89ee0b52828ab",
  measurementId: "G-SMQD1J8KE6",
};

// init firbase app
initializeApp(firebaseConfig);
export default getFirestore();
