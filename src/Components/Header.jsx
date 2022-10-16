import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/Usecontext';

const Header = () => {
    const { user,  userSignOut } = useContext(AuthContext);
    const signOutHandler = () =>{
        userSignOut()
        .then(()=>{
            Swal.fire(
                'Log out',
                'successfully',
                'warning'
            )
        })
        .catch(error =>{ console.log(error) })
    }
    return (
        <div>
            <div className=" bg-base-300 px-10 flex justify-between items-center py-3">
                <div className="">
                    <a className="btn btn-ghost normal-case text-2xl font-bold" href='# '>Log in form</a>
                </div>
                <div>
                    <ul className="p-0 flex gap-2">
                        <Link className='bg-gray-400 py-1 px-2 rounded-sm text-white shadow-md shadow-slate-800 hover:bg-gray-500 duration-200' to='/home'>Home</Link>
                        <Link className='bg-gray-400 py-1 px-2 rounded-sm text-white shadow-md shadow-slate-800 hover:bg-gray-500 duration-200' to='/orders'>Orders</Link>
                        <Link className='bg-gray-400 py-1 px-2 rounded-sm text-white shadow-md shadow-slate-800 hover:bg-gray-500 duration-200' to='/register'>Register</Link>
                        <Link className='bg-gray-400 py-1 px-2 rounded-sm text-white shadow-md shadow-slate-800 hover:bg-gray-500 duration-200' to='/login'>Login</Link>
                    </ul>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='bg-gray-700 py-1 px-2 rounded-sm text-sm text-white shadow-md shadow-slate-800'>
                        {
                            user?.email && <span>welcome,{user.email}</span>
                        }
                    </div>
                    <div>
                    <button onClick={signOutHandler} className="bg-gray-400 hover:bg-gray-500 text-white rounded-md py-1 px-3">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;