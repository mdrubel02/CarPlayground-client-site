import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../Hook/useTitle';
import { AuthContext } from '../../../Context/AuthProvider'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const MyToys = () => {
    const { user, myReviewRefresh, setMyReviewRefresh } = useContext(AuthContext)
    const [status, setStatus] = useState(false)
    const [myToys, setMyToys] = useState([])
    const [updateModal, setUpdateModal] = useState()
    const [updateProduct, setUpdateProduct] = useState({
        price: 0,
        description: "",
        quantity: 0,
    })
    const { price, description, quantity } = updateProduct
    useTitle('MyToys')
    console.log(updateModal);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setStatus(data.status)
                setMyToys(data.data)
            }
            )
    }, [myReviewRefresh])
    console.log(user?.email);

    const handleInputData = (event) => {
        const name = event.target.name
        const value = event.target.value
        setUpdateProduct({ ...updateProduct, [name]: value })

    }

    const handleUpdateReview = (event) => {
        event.preventDefault()
        const form = event.target

        const products = {
            price,
            description,
            quantity
        }

        if (price && description && quantity) {
            fetch(`http://localhost:5000/updateProduct/${updateModal}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(products)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        setMyReviewRefresh(!myReviewRefresh)
                        toast.success('Review update successfull', { autoClose: 1000 })
                        form.reset()
                    }
                })
                .catch(error => toast.error(error.message, { autoClose: 1000 }))
        }
    }

    return (

        <>
            {status ? <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myToys.map((myToy, index) => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myToy?.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myToy?.userName}</div>
                                            <div className="text-sm opacity-50">Bangladesh</div>
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span className="badge badge-ghost badge-sm">{myToy?.description.slice(0, 50)}</span>
                                </td>
                                <td>{myToy?.quantity}</td>
                                <td>{myToy?.price}</td>
                                <th>

                                    <a onClick={() => setUpdateModal(myToy?._id)} className="cursor-pointer inline-flex items-center justify-center w-full py-2 px-2 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black btn" href="#my-modal-2" >Edit</a>
                                </th>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </th>

                            </tr>
                            )

                        }

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </tfoot>

                </table>
                <div>
                    <div className="modal" id="my-modal-2">
                        <div className="modal-box">
                            <form onSubmit={handleUpdateReview}>
                                <div className="mb-1 sm:mb-2">
                                    <div className='mb-3'>
                                        <label htmlFor="rating" className='font-semibold mb-2 inline-block'>Update Your Product </label>
                                        <input
                                            onBlur={handleInputData}
                                            placeholder="Price"
                                            required
                                            type="number"
                                            className="py-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium outline-none bg-none"
                                            id="price"
                                            name="price"
                                        />
                                        <input
                                            onBlur={handleInputData}
                                            placeholder="quantity"
                                            required
                                            type="number"
                                            className="py-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium outline-none bg-none"
                                            id="quantity"
                                            name="quantity"
                                        />
                                    </div>
                                    <textarea
                                        onBlur={handleInputData}
                                        name="description" id="description" cols="30" rows="3"
                                        placeholder='Description...'
                                        className="py-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none bg-none"
                                    ></textarea>
                                    <div className='flex justify-end items-center'>
                                        <div className="modal-action">
                                            <a href="#" className="btn">Cancel</a>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn mt-5 ml-2 bg-yellow border-none"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                :
                <div className='min-h-[90vh] flex justify-center items-center'>
                    <div className="w-20 h-20 m-auto border-8 border-dashed rounded-full animate-spin border-orange-500"></div>
                </div>}
        </>
    );
};

export default MyToys;