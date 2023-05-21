import React from 'react';

const DeleteProduct = ({ productDeleteHandler, deleteProduct }) => {
    const { _id, name } = deleteProduct
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

                    <div className='flex justify-end items-center'>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Cancel</label>
                        </div>
                        <button
                            type="submit"
                            className="btn mt-5 ml-2 bg-yellow border-none modal-action"
                        >
                          <label onClick={()=>productDeleteHandler(deleteProduct?._id)} htmlFor="my-modal" className="btn">delete</label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;