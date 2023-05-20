import React from 'react';

const Blogs = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 my-6 md:my-16">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl mb-5">Question</h2>
            <div className="space-y-4">  
                   <details  className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Hello</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Answer</p>
                    </details>
            </div>
        </div>
    </section>
    );
};

export default Blogs;