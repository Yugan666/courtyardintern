import React from 'react'
import logoTop from '../assets/images/logo-top.svg'
const Footer = () => {
    return (
        <>
            <div className="bg-[#5C6C68]  pt-[100px] pb-8 h-screen  sticky top-0 -z-10">
                <div className="flex flex-col md:flex-row items-center px-[10px] md:px-[100px]">
                    <div className=" w-full">
                        <ul className='list-none flex  md:overflow-hidden overflow-x-auto md:block md:space-x-0 space-x-8 md:space-y-11 font-anti text-2xl md:text-4xl w-full  text-white'>
                            <li className='hover:tracking-[5px] hover:font-semibold cursor-pointer'>Rooms</li>
                            <li className='hover:tracking-[5px] hover:font-semibold cursor-pointer'>Wellness</li>
                            <li className='hover:tracking-[5px] hover:font-semibold cursor-pointer'>Gastro</li>
                            <li className='hover:tracking-[5px] hover:font-semibold cursor-pointer'>Resort</li>
                        </ul>
                    </div>
                    <div className="space-y-9 md:w-[50%] w-full mt-3 md:mt-0  md:space-y-20 text-white">
                        <div className="text-center flex items-center justify-center flex-col space-y-6">
                            <img src={logoTop} alt="Logo" className='object-contain' />
                            <h2 className='font-logo text-xl md:text-3xl font-semibold '>Courtyard Castle</h2>
                            <h5 className='text-xl'>Hotels & Resort</h5>
                        </div>
                        <div className="">
                            <p className='text-md leading-12 text-center'>
                                North street <br />
                                962 31 Colomus – Pondichery <br />
                                India
                            </p>
                        </div>

                        <div className="">
                            <p className='text-md text-center leading-12'>
                                +421 45 530 00 00 <br />
                                aeroian@resort.com <br />
                                Contacts  →
                            </p>
                        </div>
                    </div>
                    <div className="w-[33%]"></div>
                </div>
            </div>
            <div className="wave-style relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
                    <path fill="#ccc" fill-opacity="1" d="M0,160L34.3,154.7C68.6,149,137,139,206,128C274.3,117,343,107,411,96C480,85,549,75,617,96C685.7,117,754,171,823,181.3C891.4,192,960,160,1029,144C1097.1,128,1166,128,1234,112C1302.9,96,1371,64,1406,48L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>

                <div className="flex items-center justify-center ">
        <p className='text-md md:text-xl absolute bottom-1'>&copy; copy right  illusiview -2024 </p>
                </div>


            </div>

            {/* <div className=" px-[10px] md:px-[100px] grid grid-cols-2 md:grid-cols-3 max-w-full font-urban text-white">
                    <div className="">
                        <ul className=' space-y-5 md:space-y-10  text-md' >
                            <li>Rooms</li>
                            <li>Wellness</li>
                            <li>Gastro</li>
                            <li>Resort</li>
                        </ul>
                    </div>

                    <div className="space-y-9 md:space-y-20">
                        <div className="text-center flex items-center justify-center flex-col space-y-6">
                            <img src={logoTop} alt="Logo" className='object-contain' />
                            <h2 className='font-logo text-xl '>Courtyard Castle</h2>
                            <h5 className='text-xl'>Hotels & Resort</h5>
                        </div>
                        <div className="">
                            <p className='text-md leading-12 text-center'>
                                North street <br />
                                962 31 Colomus – Pondichery <br />
                                India
                            </p>
                        </div>

                        <div className="">
                            <p className='text-md text-center leading-12'>
                                +421 45 530 00 00 <br />
                                aeroian@resort.com <br />
                                Contacts  →
                            </p>
                        </div>
                    </div>

               

                    <div className=" space-y-6">
                        <h2 className='font-anti text-2xl md:text-[22px]'>Peaceful your stay</h2>
                        <p className='text-md'>Comfortable rooms, suites and <br />
                            villas are always ready for your visit.</p>

                            <button class="inline-block transition-all duration-200 relative overflow-hidden z-10 text-white px-7 py-2 cursor-pointer text-lg  bg-transparent border border-gray-300 shadow-lg hover:border-0 hover:text-[#5C6C68] button2">
                           Book Now
                        </button>
                    </div>

                </div>
                <div className="grid grid-cols-2 md:text-md text-[14px]  text-white pt-[40px] px-[10px] md:px-[100px]">
                    <p>Developed by Illusiview</p>
                    <p className='whitespace-nowrap'>© 2023 Courtyardcastle.com</p>
                    <p></p>
                    <p></p>
                </div> */}

        </>
    )
}

export default Footer