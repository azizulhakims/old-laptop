import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const conditions = ['excellent', 'good', 'fair']
const location = ['Chittagong', 'Dhaka', 'Barisal']



const AddProduct = () => {
    const { category } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostkey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostkey);

    const navigare = useNavigate();

    // const { data: title, isLoading } = useQuery({
    //     queryKey: ['title'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/categoryTitle');
    //         const data = await res.json();
    //         return data;
    //     }
    // })


    const handleAddDoctor = data => {
        // console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const newData = {
                        name: data.name,
                        price: data.price,
                        condition: data.condition,
                        number: data.number,
                        location: data.location,
                        description: data.description,
                        category: data.category,
                        purchasePrices: data.purchasePrices,
                        year: data.year,
                        image: imgData.data.url
                    }

                    //save information to the database
                    fetch('http://localhost:5000/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            Navigate('/dashboard/managedoctors')
                        })
                }
            })
    }
    // if (isLoading) {
    //     return <Loading></Loading>
    // }


    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add Product</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className='label-text'>Name</span></label>
                    <input type='text'
                        {...register('name', {
                            required: "Name is requeued"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className='label-text'>Price</span></label>
                    <input type='text'
                        {...register('price', {
                            required: "Name is requeued"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className='label-text'>Conditions</span></label>

                    <select
                        {...register('condition')}
                        className="select select-bordered w-full max-w-xs">

                        {
                            conditions?.map(title => <option
                                key={title}
                                value={title}
                            >{title}</option>)
                        }

                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className='label-text'>Mobile Number</span></label>
                    <input type='text'
                        {...register('number', {
                            required: "Number is requeued"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.Number && <p className='text-red-500'>{errors.Number.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className='label-text'>Location</span></label>

                    <select
                        {...register('location')}
                        className="select select-bordered w-full max-w-xs">

                        {
                            location?.map(title => <option
                                key={title}
                                value={title}
                            >{title}</option>)
                        }

                    </select>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className='label-text'>Description</span></label>
                    <input type='text'
                        {...register('description', {
                            required: true

                        })}

                        className="input input-bordered w-full max-w-xs" />
                    {errors.Description && <p className='text-red-500'>{errors.Description.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className='label-text'>Product Category</span></label>

                    <select
                        {...register('category')}
                        className="select select-bordered w-full max-w-xs">

                        {
                            category?.map(title => <option
                                key={title._id}
                                value={title._id}
                            >{title.title}</option>)
                        }

                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className='label-text'>Purchase Price</span></label>
                    <input type='text'
                        {...register('purchasePrices', {
                            required: true

                        })}

                        className="input input-bordered w-full max-w-xs" />
                    {errors.purchasePrices && <p className='text-red-500'>{errors.purchasePrices.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className='label-text'>Year of Purchase</span></label>
                    <input type='text'
                        {...register('year', {
                            required: true

                        })}

                        className="input input-bordered w-full max-w-xs" />
                    {errors.Year && <p className='text-red-500'>{errors.Year.message}</p>}

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className='label-text'>Photo</span></label>
                    <input type='file'
                        {...register('image', {
                            required: "Photo is requeued"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}

                </div>
                <input className='btn btn-accent w-full mt-4' value='Add Product' type="submit" />

            </form>
        </div>
    );
};

export default AddProduct;