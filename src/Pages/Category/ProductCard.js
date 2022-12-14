import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';



const ProductCard = ({ data }) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [bookNowModal, setBookNowModal] = useState(false);

    const { user } = useContext(AuthContext);

    const navigare = useNavigate();

    const closeModal = () => {
        setBookNowModal(false);
    }

    const onSubmit = formData => {
        const newData = {
            clientName: user?.displayName,
            price: data?.price,
            meeting: formData?.meeting,
            pnumber: formData?.pnumber,
            name: data?.name,
            email: user?.email
        }
        console.log(newData);
        fetch('https://nodejs-express-lemon.vercel.app/productbook', {
            method: 'POST',

            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
                'content-type': 'application/json',
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                toast.success(`${data.name} is Booked successfully`)
                Navigate('/')
            })
    }
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="container card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-60' src={data.image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.name}
                            <div className="badge badge-secondary">Resale:{data.price}/-</div>
                        </h2>
                        <p>{data.description}</p>
                        <div>
                            <p>Original Price: {data.purchasePrices}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Location: {data.location}</div>
                            <div className="badge badge-outline">{data.condition}</div>
                        </div>

                        <div>
                            <label htmlFor="my-modal-3" className="btn">Click Hear for Book</label>
                        </div>
                        <div><button className='btn'><Link to='/category'>Back Category Page</Link></button></div>
                    </div>


                </div>
            </div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">???</label>
                    <h3 className="text-lg font-bold">Please Entry Your Meat location & Phone Number</h3>
                    {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className='label-text'>Name</span> <span> <input type='text'
                                defaultValue={user?.displayName}
                                readOnly


                                className="input input-bordered w-full max-w-xs" /></span></label>


                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className='label-text'>Email</span> <span> <input type='text'
                                defaultValue={user?.email}
                                readOnly
                                className="input input-bordered w-full max-w-xs" /></span></label>


                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className='label-text'>Product Name</span> <span> <input type='text'
                                defaultValue={data.name}
                                readOnly
                                className="input input-bordered w-full max-w-xs" /></span></label>


                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className='label-text'>Price</span><span> <input type='text'
                                defaultValue={data.price}
                                readOnly
                                className="input input-bordered w-full max-w-xs" /></span></label>


                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className='label-text'>Phone Number</span> <span> <input type='text'
                                {...register('pnumber', {
                                    required: "Name is requeued"

                                })}
                                className="input input-bordered w-full max-w-xs" /></span></label>

                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className='label-text'>Meeting Location</span> <span> <input type='text'
                                {...register('meeting', {
                                    required: "Name is requeued"

                                })}
                                className="input input-bordered w-full max-w-xs" /></span></label>

                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                        </div>


                        <input className='btn btn-accent w-full mt-4' value='Submit' type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductCard;