import React, { useContext } from 'react';
import { AuthContext } from '../context/Usecontext';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const loginHandler = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
                navigate('/home')
            })
            .catch(error => {
                console.error(error)
                Swal.fire(
                    'sorry',
                    `${error}`,
                    'error'
                )
            })
    }
    return (
        <div data-theme="dark">
            <h2><div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-semibold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={loginHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="# " className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <p><small>Don't have account?<Link className='text-violet-700 hover:underline' to='/register'> register</Link></small></p>
                </div>
            </div></h2>
        </div>
    );
};

export default Login;