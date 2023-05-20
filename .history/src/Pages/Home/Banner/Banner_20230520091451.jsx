import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/bannerpng.png'

const Banner = () => {
    return (
        <div className="relative">
        <img
          src="https://w0.peakpx.com/wallpaper/632/398/HD-wallpaper-earth-communication-internet-concepts-networking-concepts-social-network-technology.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-[#282932] bg-opacity-90">
          <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-full md:px-24 lg:px-8  lg:py-5">
            <div className="lg:grid w-full grid-cols-12 items-center justify-between xl:flex-row">
              <div className="w-full col-span-4 mb-12 xl:mb-0 text-white">
                <h2 className="mb-6 font-sans lg:text-6xl font-bold tracking-tight sm:text-4xl text-3xl sm:leading-none">
                <span className="ml-2 font-bold tracking-wide text-gray-100">
                Homemade<span className='text-yellow'>Crunch</span>
              </span><br></br>
                <span className='text-yellow'>Home Delivery</span>
                </h2>
                <p className="max-w-xl mb-4 text-base  md:text-lg">
                Homemade food is usually prepared with natural ingredients compared to commercially prepared food. Plainly, the food has its taste however those are ready using unprocessed foods that are by no means healthy.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 bg-yellow px-10 py-4 rounded-full text-black"
                >
                  Learn more
                </Link>
              </div>
              <div className="w-full col-span-8 xl:px-8 ">
              <img src={bannerImg} alt="bannerImages" className='w-full'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;