import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../Hook/useTitle';
import { AuthContext } from '../../../Context/AuthProvider'
import { Link } from 'react-router-dom';


const MyToys = () => {
    const {user,myReviewRefresh,setMyReviewRefresh} = useContext(AuthContext)
    const [status, setStatus] = useState(false)
    const [myToys, setMyToys] = useState([])
    let review = 'omuk'
    let rating = 'tomuk'
    const [reviewData,setReviewData] = useState(
        {
        reviews:review,
        ratings:rating,
        }
    )
    const {ratings,reviews} = reviewData

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
    // get input value
    const handleInputData=(event)=>{
        const name = event.target.name 
        const value = event.target.value 
        setReviewData({...reviewData,[name]:value})
      
    }
    const handleUpdateReview=(event)=>{
        event.preventDefault()
        const form = event.target
      
        // const reviewer = {
        //     review:reviews,
        //     rating:ratings,
        //     date:date.format("YYYY/MM/DD hh:mm a")
        // }
       
        // if(ratings && reviews){
        //     fetch(`https://homemade-crunch-server.vercel.app/myreviews/${_id}`,{
        //         method:'PATCH',
        //         headers:{
        //             'content-type':'application/json',
        //             authorization:`Bearer ${localStorage.getItem('HomemadeCrunch-Token')}`
        //         },
        //         body:JSON.stringify(reviewer)
        //     })
        //     .then(res=>{
        //         if(res.status===401 || res.status===403){
        //             toast.error('Unauthoroized user',{autoClose:1000})
        //             logOut()
        //         }
        //         return res.json()
        //     })
        //     .then(data=>{
        //        if(data.modifiedCount>0){
        //         setMyReviewRefresh(!myReviewRefresh)
        //         toast.success('Review update successfull',{autoClose:1000})
        //         form.reset()
        //        }
        //     })
        //     .catch(error=>toast.error(error.message,{autoClose:1000}))
        // }
        // else{
        //     toast.error("your review not found,Please provide us valid information",{autoClose:1000})
        // }
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
                                    <button className="">Edit</button>
                                    <label htmlFor='#my-modal-2'className="cursor-pointer inline-flex items-center justify-center w-full py-2 px-2 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black">Edit</label>
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
                    <div>
                        <input type="checkbox" id='my-modal-2' className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box text-black overflow-y-visible">
                                {
                                    user ?
                                        <div>
                                            <h3 className="font-bold text-lg mb-3 text-amber-500"> Update your review for </h3>
                                            <div>
                                                <form onSubmit={handleUpdateReview}>
                                                    <div className="mb-1 sm:mb-2">
                                                        <div className='mb-3'>
                                                            <label htmlFor="rating" className='font-semibold mb-2 inline-block'>Add a Rating : </label>
                                                            <input
                                                                onBlur={handleInputData}
                                                                placeholder="Ratings"
                                                                required
                                                                defaultValue={rating}
                                                                type="number"
                                                                className="py-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium outline-none bg-none"
                                                                id="ratings"
                                                                name="ratings"
                                                            />
                                                        </div>
                                                        <textarea
                                                            onBlur={handleInputData}
                                                            name="reviews" id="reviews" cols="30" rows="3"
                                                            defaultValue={review}
                                                            placeholder='Type Review....'
                                                            className="py-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none bg-none"
                                                        ></textarea>
                                                        <div className='flex justify-end items-center'>
                                                            <div className="modal-action">
                                                                <label htmlFor="#my-modal-2" className="btn">Cancel</label>
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
                                        </div> :
                                        <div className='text-center'>
                                            <h3 className='font-semibold text-2xl pt-5'>Please login to add a review</h3>
                                            <Link to="/login" className='font-semibold text-xl bg-yellow px-10 py-3 rounded-lg mt-5 inline-block'>Login</Link>
                                            <div className="modal-action mt-10">
                                                <label htmlFor="#my-modal-2" className="btn">Cancel</label>
                                            </div>
                                        </div>
                                }
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