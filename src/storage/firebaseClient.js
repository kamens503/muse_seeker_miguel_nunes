import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey            : process.env.APIKEY,
  authDomain        : "react-test-48284.firebaseapp.com",
  projectId         : "react-test-48284",
  storageBucket     : "react-test-48284.appspot.com",
  messagingSenderId : "604840918176",
  appId             : process.env.APPID,
  measurementId     : "G-RRY5CTFBK6"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

async function queryProducts(db) {
  const coll = collection(db, 'logos');
  const productsDocs = await getDocs(coll);
  const data = productsDocs.docs.map(doc => doc.data());
  return data;
}

export default queryProducts(db)