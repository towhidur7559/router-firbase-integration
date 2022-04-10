import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../Hooks/useFirebase';

const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(auth);
    // const {user} = useFirebase();
    return (
        <div>
            <h2>knock ! knock</h2>
            <h5>{user? user.displayName :'ooo..dear!'}</h5>
        </div>
    );
};

export default Products;