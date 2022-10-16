import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/Usecontext';

const PrivateRoutes = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    console.log(user)
    if(loading){
        return <div><p className='text-center text-sm'>loading...</p></div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;