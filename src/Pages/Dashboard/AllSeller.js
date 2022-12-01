import React, { useContext, useEffect, useState } from 'react';
import { getAllSeller } from '../../api/User';

import { AuthContext } from '../../contexts/AuthProvider';

const AllSeller = () => {

    const { user } = useContext(AuthContext);
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const [buyer, setBuyer] = useState([]);


    useEffect(() => {
        getAllSeller()
            .then(data => {
                console.log(data)
                setBuyer(data)
            })
    }, [])


    return (
        <div>
            <h2 className='text-3xl'>All Buyer List: {buyer?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyer?.map((buyer, i) => <tr key={buyer?._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.email}</td>

                                <td>
                                    <label onClick={() => setDeletingDoctor(buyer)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
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

export default AllSeller;