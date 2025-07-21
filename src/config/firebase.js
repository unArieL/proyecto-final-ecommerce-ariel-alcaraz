import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: 'api-rest-tres-node-js',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: '651147712710',
    appId: process.env.FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };