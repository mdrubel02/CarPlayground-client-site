import React, { useEffect, useState } from 'react';
import ShortProductItems from './ShortProductItems';
import { FaServicestack } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Title from '../../../Shared/Title/Title';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ShortProducts = () => {
    const [services, setServices] = useState([])
    const [audiProducts, setAudiProducts] = useState([])
    const navigate = useNavigate()
    console.log(audiProducts);

    useEffect(() => {
        fetch('http://localhost:5000/products?size=6')
            .then(res => res.json())
            .then(data => setServices(data.data))
    }, [])

    const content = {
        head: "Quick pick",
        title: "Our Car"
    }
    //http://localhost:5000/audi
    const handleAudi = async () => {
        console.log('click');
        // useEffect(() => {
        //     fetch('http://localhost:5000/products?size=6')
        //         .then(res => res.json())
        //         .then(data => console.log(data.data))
        // }, [])
        const res = await fetch('http://localhost:5000/audi')
        const data = await res.json()
        setAudiProducts(data.data);
    }
    return (
        <>

            <div className='py-6 md:py-16 px-5 md:px-16 xl:px-28'>
                <Title content={content}></Title>
                <div>
                    <Tabs>
                        <TabList className="">
                            <Tab></Tab>
                            <Tab onClick={handleAudi}>Audi</Tab>
                            <Tab>Toyota</Tab>
                            <Tab>Ford</Tab>
                        </TabList>

                        <TabPanel>

                            <div>
                                <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                                    {
                                        services.map(service => <ShortProductItems key={service._id} serviceItem={service}></ShortProductItems>)
                                    }
                                </div>
                                <button onClick={() => navigate('/toyShop')} className='bg-yellow py-4 px-10 font-semibold flex rounded-full items-center mt-5 m-auto text-lg hover:bg-black hover:text-white transition ease-in-out delay-150 duration-300 '>See All <FaServicestack className='text-[13px] ml-2'></FaServicestack></button>
                               
                            </div>

                        </TabPanel>

                        <TabPanel>
                            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                                {
                                    audiProducts.map(service => <ShortProductItems key={service._id} serviceItem={service}></ShortProductItems>)
                                }
                            </div>

                        </TabPanel>
                    </Tabs>
                </div>


            </div>

        </>
    );
};

export default ShortProducts;