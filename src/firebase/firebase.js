import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import malariaData from './Data/malariaData.json';


const firebaseConfig = {
    apiKey: "AIzaSyCp_k_jcYQqziR9wlGEYe3xbsa2JkwwhME",
  authDomain: "malaria-question-and-answer.firebaseapp.com",
  projectId: "malaria-question-and-answer",
  storageBucket: "malaria-question-and-answer.firebasestorage.app",
  messagingSenderId: "687564992506",
  appId: "1:687564992506:web:75f17b06740f7614977e43",
  measurementId: "G-EEQE7ES4QG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
