import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpVDBKw39ftpikAuuQVQGkHzlqgPHxNlw",
  authDomain: "jobbazaar-20c12.firebaseapp.com",
  projectId: "jobbazaar-20c12",
  storageBucket: "jobbazaar-20c12.firebasestorage.app",
  messagingSenderId: "1023720739961",
  appId: "1:1023720739961:web:a7247dde397fd7ab06b0a8",
  measurementId: "G-D2ZFYC207T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const setUpRecaptcha = (phoneNumber) => {
  const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
  });
  return signInWithPhoneNumber(auth, phoneNumber, recaptcha);
};