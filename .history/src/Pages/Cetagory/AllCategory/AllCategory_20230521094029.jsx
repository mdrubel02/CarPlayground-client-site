import React, { useEffect, useState } from 'react';
import Title from '../../../Shared/Title/Title';
import useTitle from '../../../Hook/useTitle' 
import ShortProductItems from '../../Home/ShortProducts/ShortProductItems';

const AllCategory = () => {
    const [services,setServices] = useState([])
    const [status,setStatus] = useState(false)
    const [size,setSize]=useState(6)
    const [count,setCount] = useState(0)
    const [page,setPage] = useState(0)

    useTitle('Services')
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    useEffect(()=>{
        fetch(`http://localhost:5000/products?productSize=${size}&pageSize=${page}`)
        .then(res=>res.json())
        .then(data=>{
            setStatus(data.status)
            setCount(data.count)
            setServices(data.data)
            window.scrollTo(0, 0)
        })
        .catch(err=>console.log(err.message))
    },[size,page])
    
    
    const pages = Math.ceil(count/size)

    const content = {
        head:"Quick pick",
        title:"Our Car Shop"
    }
    return (
        <>
        {
        status?
        <div className='py-6 md:py-16 px-5 md:px-16 xl:px-28'>
        <Title content={content}></Title>
        {
            services.length>0 ?
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
                services.map(service=><ShortProductItems key={service._id} serviceItem={service}></ShortProductItems>)
            }
            </div>
            :
            <div className='bg-yellow py-20 px-5 md:px-16 xl:px-28 text-center rounded-xl mb-10'>
                <h3 className='font-semibold text-2xl capitalize'>No Service found ,search another page</h3>
            </div>
        }
        <p className='text-center mb-4 text-gray-400'>current page {page+1} and size {size}</p>
        <div className="flex justify-center space-x-1 dark:text-gray-100">
            {
                [...Array(pages).keys()].map((number,index)=>{
                    return <button key={index} onClick={()=>setPage(number)} type="button" title="Page 1" className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md outline-none ${page===number?"bg-yellow":undefined}`}>{number+1}</button>
                })
            }
            <select onChange={(event)=>setSize(event.target.value)} defaultValue={size} className="inline-flex items-center justify-center px-4 h-8 text-sm font-semibold border rounded shadow-md outline-none">
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
            </select>
        </div>
        </div> :
        <div className='min-h-[90vh] flex justify-center items-center'>
            <div className="w-20 h-20 m-auto border-8 border-dashed rounded-full animate-spin border-orange-500"></div>
        </div>
        }
    </>
    );
};

export default AllCategory;