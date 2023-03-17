// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmsBSCm_5EnHMefUIOZcPGIpg21B5S5b8",
  authDomain: "netflix-clone-nextjs-146bf.firebaseapp.com",
  projectId: "netflix-clone-nextjs-146bf",
  storageBucket: "netflix-clone-nextjs-146bf.appspot.com",
  messagingSenderId: "353991615535",
  appId: "1:353991615535:web:66b7aba1f8af7fab1592da"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }


