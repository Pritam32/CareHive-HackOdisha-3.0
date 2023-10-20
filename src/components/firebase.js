import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

 const firebaseConfig = {
    apiKey: "AIzaSyBpV_l6g3WucXH-Iw0SqcH7vQKfpHapOZ0",
    authDomain: "airways-fe3cc.firebaseapp.com",
    projectId: "airways-fe3cc",
    storageBucket: "airways-fe3cc.appspot.com",
    messagingSenderId: "277353785923",
    appId: "1:277353785923:web:acdb2c2be19f16c687c2f6",
    measurementId: "G-C67H5G72ZS"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };