import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBDnzS7VuE0hHmbMeMruRbohMV2cQpXcdc",
  authDomain: "bluemountain-9c147.firebaseapp.com",
  projectId: "bluemountain-9c147",
  storageBucket: "bluemountain-9c147.appspot.com",
  messagingSenderId: "749817193116",
  appId: "1:749817193116:web:5b3de0a9337a71f1638359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app)