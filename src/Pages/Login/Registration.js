import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import Spinner from '../../component/Spinner/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';

const Registration = () => {

    const { createUser, updateUserProfile, verifyEmail, loading, setLoading, signInWithGoogle, resetPassword } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const image = e.target.image.files[0]

        // console.log(name, email, password, image);

        const formData = new FormData()
        formData.append('image', image)
        //6d2a5bab1fd6dc49251ff1e542f71575

        const url = 'https://api.imgbb.com/1/upload?key=6d2a5bab1fd6dc49251ff1e542f71575'

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data.display_url)
                //createUser
                createUser(email, password)
                    .then(result => {
                        setAuthToken(result.user)
                        updateUserProfile(name, data.data.display_url)

                            .then(
                                verifyEmail()
                                    .then(() => {
                                        toast.success(
                                            'Please chq your email for verification Link'

                                        )
                                        navigate(from, { replace: true })
                                    })
                            )
                            .catch(err => console.log(err))
                        // console.log(result)
                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false)
                    })
            })
            .catch(err => console.log(err))
        // return console.log(formData);


        //create user
        //

    }

    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
            console.log(result.user)
            setAuthToken(result.user)
            navigate(from, { replace: true })

        })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-center text-3xl pt-6'>Register</h2>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span></label>
                                <input
                                    type="text"
                                    name='name'
                                    id='name'
                                    placeholder="Name"
                                    className="input input-bordered"

                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name='email'
                                    id='email'
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'

                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input
                                    type="file"
                                    id='image'
                                    name='image'
                                    placeholder="image"
                                    className="input input-bordered"
                                    accept='image/*'
                                    required
                                />
                            </div>
                            <div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-center">
                                        {loading ? <Spinner /> : 'Register'}
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

                        <p className='text-center'>Have Account? please <Link to='/login' ><span className='text-red-400'>Login</span></Link></p>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Registration;