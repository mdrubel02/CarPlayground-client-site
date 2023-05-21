import React from 'react';

const UpdateProductModal = ({myToy}) => {
    const {_id} = myToy
    return (
        <div>
            <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
            <div className="modal">
            <div className="modal-box text-black overflow-y-visible">
                {
                user?  
                <div>
                    <h3 className="font-bold text-lg mb-3 text-amber-500"> Update your review for "{serviceName}"</h3>
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
                                        <label htmlFor={`my-modal-${_id}`} className="btn">Cancel</label>
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
                        <label htmlFor={`my-modal-${_id}`} className="btn">Cancel</label>
                    </div>
                </div>
                }
            </div>
            </div>
        </div>
    );
};

export default UpdateProductModal;