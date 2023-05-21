import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../Hook/useTitle';
import { AuthContext } from '../../../Context/AuthProvider'
import { Link } from 'react-router-dom';


const MyToys = () => {
    const { user, myReviewRefresh, setMyReviewRefresh } = useContext(AuthContext)
    const [status, setStatus] = useState(false)
    const [myToys, setMyToys] = useState([])

    useTitle('MyToys')

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
                                    
                                    <a className="cursor-pointer inline-flex items-center justify-center w-full py-2 px-2 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black btn" href="#my-modal-2" >Edit</a>
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
                            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <div className="modal-action">
                                <a href="#" className="btn">Yay!</a>
                            </div>
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