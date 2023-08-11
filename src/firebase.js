import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyARD9HAa7kkSvmXJP8HE81vSOjsCBvwzM8",
  authDomain: "reactproject1-6de30.firebaseapp.com",
  projectId: "reactproject1-6de30",
  storageBucket: "reactproject1-6de30.appspot.com",
  messagingSenderId: "638673423307",
  appId: "1:638673423307:web:ae67da00ae83e8d727044e"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth};