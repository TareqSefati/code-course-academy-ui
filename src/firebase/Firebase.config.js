// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwIdIOQnUoD7tfCE3XrBJivi5ce0dns1M",
  authDomain: "code-course-academy-ui.firebaseapp.com",
  projectId: "code-course-academy-ui",
  storageBucket: "code-course-academy-ui.appspot.com",
  messagingSenderId: "656353278624",
  appId: "1:656353278624:web:46892cbdf79ddecce3e7c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;