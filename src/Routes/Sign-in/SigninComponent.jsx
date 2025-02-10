import React from 'react'
import { signInWithGooglePopup,createDocumentFromAuth } from '../../Utils/firebase/FirebaseUtils';


const SigninComponent = () => {
    const logGoogleUser = async () => {   //whenever you make to call to some databse ,this is going to be asynchronous
        
        const {user} = await signInWithGooglePopup();
        // console.log(response);
        const userDocRef = await createDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>sign with google</button>
        </div>
    )
}
export default SigninComponent
