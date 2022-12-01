import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import Spinner from '../../component/Spinner/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';


const Login = () => {
    const { userEmail, setUserEmail } = useState('')

    const { createUser, verifyEmail, loading, setLoading, signInWithGoogle, signin, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'



    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signin(email, password)
            .then(result => {
                toast.success('Login Successful....')
                //get token
                setAuthToken(result.user)
                navigate(from, { replace: true })

            }).catch(err => {
                toast.error(err.message)
                console.log(err);
                setLoading(false)
            })

    }

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                setAuthToken(result.user)
                navigate(from, { replace: true })
            })

    }
    const handleResset = () => {
        resetPassword(userEmail).then(() => {
            toast.success('Please chwck your email for reset link')
        })
            .catch(err => {
                toast.error(err.message)
                console.log(err)
                setLoading(false)
                console.log(handleResset);
            })

        // resetPassword()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
                    <h3 className='text-center text-3xl'>Login Here</h3>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address</span>
                                </label>
                                <input
                                    onBlur={(e) => setUserEmail(e.target.value)}
                                    name='email'
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered" />
                                <button onClick={handleResset}>Forget password?</button>
                            </div>
                            <div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-center">
                                        {loading ? <Spinner /> : 'Login'}
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p className='text-center'>---Social Account Login---</p>
                        <div className='text-center p-4'>
                            <button onClick={handleGoogleSignin} className="btn btn-primary">Google</button>
                            <button className="btn btn-secondary">Twitter</button>
                            <button className="btn btn-accent btn-outline">Github</button>
                        </div>

                        <p className='text-center'>New in Here? please <Link to='/registration' ><span className='text-red-400'>Registration</span></Link></p>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Login;