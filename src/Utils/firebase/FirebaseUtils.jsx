import { initializeApp } from 'firebase/app'; //initializeApp is a function

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    Firestore
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8Cfuw4aWXeRh8exu1n1s-bIqel_80OsA",
    authDomain: "clothing-db-7b339.firebaseapp.com",
    projectId: "clothing-db-7b339",
    storageBucket: "clothing-db-7b339.firebasestorage.app",
    messagingSenderId: "1072639300409",
    appId: "1:1072639300409:web:cfe0e108e383cf1997cee8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // to use the google authentication first need the provider //this is a class
provider.setCustomParameters({         //some kind of configuratons object
    prompt:"select_account"         //which will be select select_account
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);


export const db = getFirestore();

export const createDocumentFromAuth = async(userAuth) =>{
    const userDocRef = doc(db,'users',userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists())
    {
        const {displayName,email}=userAuth;
        const createdAt = new Date();
        try
        {
            await setDoc(userDocRef ,{
                displayName,
                email,
                createdAt
            });
        }
        catch(err){

            console.log("error creating the user",err.message);
        }
        
    }
    return userDocRef;  
};