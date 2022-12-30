import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
	apiKey: "AIzaSyBlqV6OlNelClztM_s6r4kRo2ouV3i3efs",
	authDomain: "disney-bf7a5.firebaseapp.com",
	projectId: "disney-bf7a5",
	storageBucket: "disney-bf7a5.appspot.com",
	messagingSenderId: "59842356872",
	appId: "1:59842356872:web:000713e88d6f73f139613d",
	measurementId: "G-TJYHJ91N2C",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
