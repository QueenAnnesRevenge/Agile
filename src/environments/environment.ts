// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDaoDqBwwFmqd8gU_DytGIkoVKleGunKa4",
  authDomain: "agile-1a0c4.firebaseapp.com",
  databaseURL: "https://agile-1a0c4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "agile-1a0c4",
  storageBucket: "agile-1a0c4.appspot.com",
  messagingSenderId: "712661114316",
  appId: "1:712661114316:web:cde4ceef4373894a071169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);