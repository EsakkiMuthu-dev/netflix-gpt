// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBsNXZOuCrQYBnGgkiu0ah1BF_WNuyqE2Y',
  authDomain: 'netflix-gpt-37b93.firebaseapp.com',
  projectId: 'netflix-gpt-37b93',
  storageBucket: 'netflix-gpt-37b93.appspot.com',
  messagingSenderId: '1001893320930',
  appId: '1:1001893320930:web:690a4ff9edba0243b7a6bb',
  measurementId: 'G-D1BKJFT1ZE'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//export auth
export const auth = getAuth();
