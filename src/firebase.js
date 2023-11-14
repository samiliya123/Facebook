import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrClJ-gvKgwc2KO9n766tWo6KAJTWowpQ",
    authDomain: "facebook-clone-8b7d4.firebaseapp.com",
    projectId: "facebook-clone-8b7d4",
    storageBucket: "facebook-clone-8b7d4.appspot.com",
    messagingSenderId: "225029042956",
    appId: "1:225029042956:web:c7669e0b1edff127350f29",
    measurementId: "G-RWMN7532RF"
  };

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export default app



 

 


   