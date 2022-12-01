import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { getAllBookedAdmin } from '../../api/bookings';
import { AuthContext } from '../../contexts/AuthProvider';

const AllBooking = () => {
    const { user } = useContext(AuthContext);
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const [booking, setBooking] = useState([]);

    useEffect(() => {
        getAllBookedAdmin().then(data => {
            console.log(data)
            setBooking(data)
        })
    }, [])

    const closeModal = () => {
        setDeletingDoctor(null);
    }





    // const { data: myBookedItem, isLoading, refetch } = useQuery({
    //     queryKey: ['myBookedItem'],
    //     queryFn: async () => {
    //         try {
    //             const res = await fetch('http://localhost:5000/productbook', {
    //                 headers: {
    //                     authorization: `bearer ${localStorage.getItem('accessToken')}`
    //                 }
    //             });
    //             const data = await res.json();
    //             return data;
    //         }
    //         catch (error) {
    //         }
    //     }
    // })
    return (
        <div>
            <h2 className='text-3xl'>All Booked Items: {booking?.length}</h2>
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
                            booking?.map((myBookedItem, i) => <tr key={myBookedItem?._id}>
                                <th>{i + 1}</th>
                                <td>{myBookedItem.email}</td>
                                <td>{myBookedItem.pnumber}</td>
                                <td>{myBookedItem.name}</td>
                                <td>{myBookedItem.price}</td>
                                <td>{myBookedItem.meeting}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(myBookedItem)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* {deletingDoctor && <ConfirmationModal
            title={`Are you sure you want to delete?`}
            message={`If you delete ${deletingDoctor.name} It cannot be undone.`}
            successAction={handleDeleteDoctor}
            successButtonName='Delete'
            modalData={deletingDoctor}
            closeModal={closeModal}
        ></ConfirmationModal>

        } */}

        </div>
    );
};

export default AllBooking;