import React, { useContext } from 'react';
import { AuthContext } from '../context/Usecontext';
import Swal from 'sweetalert2';

const Register = () => {
    const { makeUser,userWithGoogle } = useContext(AuthContext);
    console.log(makeUser)
    const registerHandler = event =>{
        event.preventDefault()
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,email,password)
         makeUser(email,password)
         .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset()
            Swal.fire(
                'Good job!',
                'Registration successful!',
                'success'
            )
         })
         .catch(error =>{
            console.error(error)
            Swal.fire(
                'sorry',
                `${error}`,
                'error'
            )
         })

    }
    const googleHandler =() =>{
      userWithGoogle()
      .then(result =>{
        const user = result.user;
        console.log(user)
        Swal.fire(
            'Good job!',
            'Registration successful!',
            'success'
        )
      })
      .catch(error =>{
        console.log(error)
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
                        <h1 className="text-4xl font-semibold">Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={registerHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                                <button onClick={googleHandler} className="btn btn-primary text-sm text-gray-200">Google+</button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Twitter</button>
                            </div>
                    </div>
                </div>
            </div></h2>
        </div>
    );
};

export default Register;