import { Flex } from 'antd'
import { motion } from "framer-motion";

const Tools = () => {
    return (
        <Flex className='lg:w-[74.5%] w-[95%] space-y-7 ms-auto min-h-screen flex-col'>
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className=" w-full"
            >
                <Flex className='flex-col sm:leading-[5.3rem] leading-[3rem]'>
                    <p className='inter-semibold sm:text-[5rem] text-[2.5rem] text-[#9E9D9B]'>Specialized tools.</p>
                    <p className='inter-semibold sm:text-[5rem] text-[2.5rem]'>Scalable foundation.</p>
                </Flex>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className=" w-full"
            >
                <p className='inter-medium sm:text-[1.2rem] lg:w-[65%] w-[90%] text-[#A2A19F]'>Build your business on a comprehensive, extensible data layer while providing each team with an intuitive everyday tool tailored to their needs.</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className=" w-full"
            >
                <Flex className='flex-col'>
                    <p className='text-[#575551] inter-medium text-[1.2rem] '>Opinionated data primitives</p>
                    <p className='inter-medium sm:text-[1.2rem] lg:w-[65%] w-[100%] text-[#A2A19F]'>Represent everything about your business and customers,
                        from products to org structures, in a clean, customer-centric data model.</p>
                </Flex>
            </motion.div>
            <hr className='w-[65%]' />
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className=" w-full"
            >
                <Flex className='flex-col'>
                    <p className='text-[#575551] inter-medium text-[1.2rem] '>Advanced data transformation</p>
                    <p className='inter-medium sm:text-[1.2rem] lg:w-[65%] text-[#A2A19F]'>Combine and transform static and time-series data into meaningful, high-fidelity metrics using a low-code interface. </p>
                </Flex>
            </motion.div>
            <hr className='w-[65%]' />
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className=" w-full"
            >
                <Flex className='flex-col'>
                    <p className='text-[#575551] inter-medium text-[1.2rem] '>Deeply custom objects</p>
                    <p className='inter-medium sm:text-[1.2rem] lg:w-[65%] text-[#A2A19F]'>Freely customize object names and properties. Show different object configurations depending on user role and customer segment.</p>
                </Flex>
            </motion.div>
            <hr className='w-[65%]' />
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className=" w-full"
            >
                <Flex className='flex-col'>
                    <p className='text-[#575551] inter-medium text-[1.2rem] '>Granular access control</p>
                    <p className='inter-medium sm:text-[1.2rem] lg:w-[65%] text-[#A2A19F]'>Grant access by user role and team all the way from entire modules and capabilities to individual object properties.</p>
                </Flex>
            </motion.div>
            <hr className='w-[65%]' />
            <Flex className="ml-6 bg-[#D44A00] mx-auto hover:bg-[#EB5200] inter-medium text-[0.9rem] cursor-pointer text-white px-4 py-3 rounded-3xl">
                <p>Explore the platform</p>
            </Flex>
        </Flex>
    );
};

export default Tools;