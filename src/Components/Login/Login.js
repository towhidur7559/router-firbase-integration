import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../Hooks/useFirebase';
import{useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app);


const Login = () => {

     const [signInWithGoogle,user] = useSignInWithGoogle(auth);
     const location = useLocation();
     const Navigate = useNavigate();
     const from = location?.state?.from?.pathname || '/';
     const handleGoogleSignIn = () =>{
         signInWithGoogle()
         .then(()=>{
             Navigate(from,{replace:true})
         })
     }
    // const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin:'20px'}}>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            {/* <button onClick={()=>signInWithGoogle()}>Google Sign In</button> */}
            {/* <button onClick={signInWithGoogle}>Google Sign In</button> */}

            </div>
            <br />
            <form >
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Login" />

            </form>
        </div>
    );
};

export default Login;