import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// configure this with your firebase project
const firebaseConfig = {
  apiKey: "Your Key",
  authDomain: "Your Key",
  projectId: "Your Key",
  storageBucket: "Your Key",
  messagingSenderId: "Your Key",
  appId: "Your Key",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
