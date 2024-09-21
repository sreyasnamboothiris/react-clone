
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCa2EOrD3UGLEOjnRs_GtzIu0Dcth5fJjs",
  authDomain: "netflix-clone-4f06b.firebaseapp.com",
  projectId: "netflix-clone-4f06b",
  storageBucket: "netflix-clone-4f06b.appspot.com",
  messagingSenderId: "1093894812163",
  appId: "1:1093894812163:web:285734ceca948acd0e9436"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try{
       const res =  await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:'local',
        email,
       });
    } catch (error){
        console.log(error);
        alert('invalid input');

    }
}

const login = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }catch (error){
        alert('invalid input')
        console.log(error)
    }
}

const logout = ()=>{
    signOut(auth);

}

export {auth, db, login, signup,  logout};