import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    rating: 0,
    description: "",
    picture: "",
    quantity: "",
    brand: ""
  })
  const { name, price, rating, description, picture } = formData
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // get input value
  const handleInputData = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData({ ...formData, [name]: value })
  }


  // user login
  const serviceAddHandle = (event) => {
    event.preventDefault()
    const form = event.target
    const products = {
      name,
      price,
      rating,
      description,
      picture,
      quantity,
    }
    console.log(products);

    // if (name && price && rating && description && picture) {
    //   fetch('https://homemade-crunch-server.vercel.app/services', {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(products)
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       form.reset()
    //       toast.success('Service added successfull', { autoClose: 1000 })
    //     })
    // } else {
    //   toast.error('Please provide us all valid information', { autoClose: 1000 })
    // }
  }
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/s3XXwSg/gallery-10.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 min-h-screen">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="text-center xl:flex-row">
            <div className="w-full xl:px-8 md:w-10/12 lg:w-8/12 m-auto">
              <div className="bg-yellow rounded shadow-2xl p-2 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Add a car
                </h3>
                <form onSubmit={serviceAddHandle}>
                  <div className="mb-1 sm:mb-2">
                    <div className='relative  mb-3'>
                      <img src="https://i.ibb.co/k4CCmVP/3377055-bowl-food-noodle-ramen-icon-1.png" alt="" className='absolute left-[-5px] top-0 text-black' />
                      <input
                        onBlur={handleInputData}
                        placeholder="Car name"
                        required
                        type="text"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className='relative  mb-3'>
                      <img src="https://i.ibb.co/k4CCmVP/3377055-bowl-food-noodle-ramen-icon-1.png" alt="" className='absolute left-[-5px] top-0 text-black' />
                      <select className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        onChange={handleInputData}
                        placeholder="Select Your Brand"
                        required
                        type="text"
                        id="brand"
                        name="brand"
                        value={formData} 
                      >
                        <option disabled selected value=''>Select Your Brand</option>
                        <option value='Toyota'>Toyota</option>
                        <option value='Ford'>Ford</option>
                        <option value='Audi'>Audi</option>
                      </select>
                    </div>
                    <div className='relative  mb-3'>
                      <img src="https://i.ibb.co/k4CCmVP/3377055-bowl-food-noodle-ramen-icon-1.png" alt="" className='absolute left-[-5px] top-0 text-black' />
                      <input
                        onBlur={handleInputData}
                        placeholder="Product Image URL"
                        required
                        type="text"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="picture"
                        name="picture"
                      />
                    </div>
                    <div className='relative mb-3'>
                      <img src="https://i.ibb.co/k4CCmVP/3377055-bowl-food-noodle-ramen-icon-1.png" alt="" className='absolute left-[-5px] top-0 text-black' />
                      <input
                        onBlur={handleInputData}
                        placeholder="Price"
                        required
                        type="number"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="price"
                        name="price"
                      />
                    </div>
                    <div className='relative mb-3'>
                      <img src="https://i.ibb.co/k4CCmVP/3377055-bowl-food-noodle-ramen-icon-1.png" alt="" className='absolute left-[-5px] top-0 text-black' />
                      <input
                        onBlur={handleInputData}
                        placeholder="quantity"
                        required
                        type="number"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="quantity"
                        name="quantity"
                      />
                    </div>
                    <div className='relative  mb-3'>
                      <img src="https://i.ibb.co/k4CCmVP/3377055-bowl-food-noodle-ramen-icon-1.png" alt="" className='absolute left-[-5px] top-0 text-black' />
                      <input
                        onBlur={handleInputData}
                        placeholder="Rating"
                        required
                        type="number"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="rating"
                        name="rating"
                      />
                    </div>
                    <textarea
                      onBlur={handleInputData}
                      name="description" id="description" cols="30" rows="3"
                      placeholder='Description...'
                      className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-10  transition duration-200 placeholder:text-black font-medium  outline-none bg-none"
                    ></textarea>
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full py-4 px-6 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black"
                    >
                      Add Car
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;