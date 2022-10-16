import React, { useContext } from 'react';
import { AuthContext } from '../context/Usecontext';

const Home = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h2 className='text-center font-semibold text- text-gray-300'>Hey,{user?.email} Good Noon!</h2>
        </div>
    );
};

export default Home;