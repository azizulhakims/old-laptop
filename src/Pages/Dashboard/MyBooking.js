import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState(null);

    const closeModal = () => {
        setProduct(null);
    }

    const { data: myBookedItem, isLoading, refetch } = useQuery({
        queryKey: ['myBookedItem'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/productbook?email=${user?.email}`, {
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
    return (
        <div>
            <h2 className='text-3xl'>My Booked Items: {myBookedItem?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Meeting Please</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookedItem?.map((myBookedItem, i) => <tr key={myBookedItem?._id}>
                                <th>{i + 1}</th>
                                <td>{myBookedItem.email}</td>
                                <td>{myBookedItem.pnumber}</td>
                                <td>{myBookedItem.name}</td>
                                <td>{myBookedItem.price}</td>
                                <td>{myBookedItem.meeting}</td>
                                <td>
                                    <label onClick={() => setProduct(myBookedItem)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* { && <ConfirmationModal
            title={`Are you sure you want to delete?`}
            message={`If you delete ${.name} It cannot be undone.`}
            successAction={handleDeleteDoctor}
            successButtonName='Delete'
            modalData={}
            closeModal={closeModal}
        ></ConfirmationModal>

        } */}

        </div>
    );
};

export default MyBooking;