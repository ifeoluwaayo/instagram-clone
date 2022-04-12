import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCOLjZc7GwG6ruIQLJaieeZL8ojEeJ7_vw",
	authDomain: "instagram-clone-889a3.firebaseapp.com",
	projectId: "instagram-clone-889a3",
	storageBucket: "instagram-clone-889a3.appspot.com",
	messagingSenderId: "313352869729",
	appId: "1:313352869729:web:a58529e7743518c93bd720",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
