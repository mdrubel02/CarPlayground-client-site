import React from 'react';
import Title from '../../../Shared/Title/Title';

const Gallery = () => {
    const content = {
        head:"Quick pick",
        title:"Food Gallery"
    }
    return (
        <section className="py-6 md:py-16 px-5 md:px-16 xl:px-28">
        <Title content={content}></Title>
    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img src="https://i.ibb.co/s3XXwSg/gallery-10.jpg" alt="carGallary" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/bzpWTYZ/gallery-1.jpg" />
        <img alt="foodGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Cn30w7f/gallery-2.jpg" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/hg8s5Gt/gallery-4.jpg" />
        <img alt="foodGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/qMnSQ1q/gallery-5.jpg" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/gzybJbk/gallery-9.jpg" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/yk7kq0J/gallery-6.jpg" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/CvzQSZT/gallery-7.jpg" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/sbjs1TV/gallery-8.jpg" />
        <img src="https://i.ibb.co/4Zztwsy/gallery-3.jpg" alt="carGallary" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
    </div>
    </section>
    );
};

export default Gallery;