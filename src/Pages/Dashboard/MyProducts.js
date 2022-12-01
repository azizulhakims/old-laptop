import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getMyProducts } from '../../api/Product';
import { AuthContext } from '../../contexts/AuthProvider';
import ConfirmationModal from '../../Share/ConfirmationModal';

// import Loading from '../../../Share/Loading/Loading';

const MyBookedItem = () => {
    const { user, email } = useContext(AuthContext);
    const [product, setProduct] = useState(null);

    // const [product, setProduct] = useState([]);

    // useEffect(() => {
    //     getMyProducts()
    //         .then(data => {
    //             console.log(data);
    //             setProduct(data)
    //         })
    // }, [])

    const closeModal = () => {
        setProduct(null);
    }

    const { data: addproduct, isLoading, refetch } = useQuery({
        queryKey: ['addproduct'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/addproduct`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
            }
        }
    })

    const handleDeleteDoctor = addproduct => {
        fetch(`http://localhost:5000/addproduct/${addproduct._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${addproduct.name} deleted successfully`)
                }
            })
    }

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h2 className='text-3xl'>My Products: {addproduct?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addproduct?.map((addproduct, i) => <tr key={addproduct?._id}>
                                <th>{i + 1}</th>
                                <td><div className='avatar' >
                                    <div className='w-24 rounded-full'>
                                        <img src={addproduct.image} alt='' />
                                    </div>

                                </div></td>
                                <td>{addproduct.name}</td>
                                <td>{addproduct.price}</td>
                                <td>{addproduct.location}</td>
                                <td>
                                    <label onClick={() => setProduct(addproduct)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {product && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${product.name} It cannot be undone.`}
                successAction={handleDeleteDoctor}
                successButtonName='Delete'
                modalData={product}
                closeModal={closeModal}
            ></ConfirmationModal>

            }

        </div>
    );
};

export default MyBookedItem;