import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDcHgECJC9Ph9ZI9yH2iFiGfoXa3Ki9Lo",
  authDomain: "app-1dcec.firebaseapp.com",
  databaseURL: "https://app-1dcec-default-rtdb.firebaseio.com",
  projectId: "app-1dcec",
  storageBucket: "app-1dcec.appspot.com",
  messagingSenderId: "828078763203",
  appId: "1:828078763203:web:cfa44a003d35ed251c4676"
};

export const app = initializeApp(firebaseConfig);