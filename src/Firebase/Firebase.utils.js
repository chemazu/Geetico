import firebase from "@firebase/app"
import "firebase/storage"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA6tvXiZk2Fr8QVJlv2SsT2GgcWxNKte-Q",
    authDomain: "geetico-529e9.firebaseapp.com",
    databaseURL: "https://geetico-529e9.firebaseio.com",
    projectId: "geetico-529e9",
    storageBucket: "geetico-529e9.appspot.com",
    messagingSenderId: "417014414716",
    appId: "1:417014414716:web:8c5668633c9409d0f3f8f9",
    measurementId: "G-8KB4MLXN7N"
  };
  firebase.initializeApp(firebaseConfig);

  //important functions
  export const storage = firebase.storage()
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  //creating SIGN IN  with GOOGLE
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({ prompt:'select_account'});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

  //SAVING USER DATA
  export const createUserProfile= async(userAuth , additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`) //this creates a firebase doc that can be searched
    const snapShot = await userRef.get() //.get() checks for userRef will await waits
     if(!snapShot.exists) {
        const {displayName , email,photoURL} = userAuth;
        const createdAt = new Date();
        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            photoURL,
            ...additionalData
          })
        }
        catch(error){
          console.log('error creating user', error.message);
        }
     }
  }


  export const createProduct= async(ProductItems) =>{
    const userRef = firestore.doc(`products/ProductItems`) //this creates a firebase doc that can be searched
    // const snapShot = await userRef.get() //.get() checks for userRef will await waits
        try{
          await userRef.set({
            ProductItems
          })
        }
        catch(error){
          console.log('error creating user', error.message);
        }

  }
