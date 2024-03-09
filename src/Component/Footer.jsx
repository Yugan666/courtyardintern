import React from 'react'
import logoTop from '../assets/images/logo-top.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className="bg-[#194141]  pt-[100px] pb-8 h-screen  sticky top-0 -z-10">
                <div className="bg-overlay hidden md:block"></div>
                <div className="flex flex-col md:flex-row items-center px-[10px] md:px-[100px]">
                    <div className=" w-[100%] md:w-[30%]">
                        <ul className='list-none flex  md:overflow-hidden overflow-x-auto md:block md:space-x-0 space-x-8 md:space-y-11 font-anti text-2xl md:text-4xl xl:text-6xl w-full  text-white'>
                            <li className='hover:tracking-[5px] hover:font-semibold cursor-pointer'><Link to="">Rooms</Link></li>
                            <li className='hover:tracking-[5px] hover:font-semibold cursor-pointer'><Link to="">Wellness</Link></li>
                            <li className='hover:tracking-[5px] hover:font-semibold cursor-pointer'><Link to="">Gastro</Link></li>
                            <li className='hover:tracking-[5px] hover:font-semibold cursor-pointer'><Link to="">Resort</Link></li>
                        </ul>
                    </div>
                    <div className="w-[100%] md:w-[40%] text-white text-xl md:text-xl xl:text-2xl items-center flex flex-col space-y-2 md:space-y-10 mt-3 md:mt-0 ">
                        <h4>More about rooms</h4>
                        <p>23 spacious suites</p>
                        <p>47 comfortable rooms</p>
                        <p>5 private villas
                            Packages</p>
                    </div>

                    <div className="space-y-9 w-[100%] md:w-[40%]  mt-3 md:mt-0 check-bgs md:space-y-20 text-white">
                        <div className="text-center flex items-center justify-center flex-col space-y-6">
                            <img src={logoTop} alt="Logo" className='object-contain' />
                            <h2 className='font-logo text-xl md:text-3xl xl:text-3xl font-semibold '>Courtyard Castle</h2>
                            <h5 className='text-xl xl:text-xl'>Hotels & Resort</h5>
                        </div>
                        <div className="">
                            <p className='text-md md:text-xl xl:text-2xl leading-12 text-center'>
                                North street <br />
                                962 31 Colomus – Pondichery <br />
                                India
                            </p>
                        </div>

                        <div className="">
                            <p className='text-md md:text-xl xl:text-2xl text-center leading-12'>
                                +421 45 530 00 00 <br />
                                aeroian@resort.com <br />
                                Contacts  →
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="wave-style relative z-10 md:overflow-hidden ">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
                    <path fill="#194141" fill-opacity="1" d="M0,160L34.3,154.7C68.6,149,137,139,206,128C274.3,117,343,107,411,96C480,85,549,75,617,96C685.7,117,754,171,823,181.3C891.4,192,960,160,1029,144C1097.1,128,1166,128,1234,112C1302.9,96,1371,64,1406,48L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute top-10 -z-10 wave-anim-1'>
                    <path fill="#141616" fill-opacity="0.7" d="M0,0L60,16C120,32,240,64,360,101.3C480,139,600,181,720,170.7C840,160,960,96,1080,64C1200,32,1320,32,1380,32L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-10 -z-10 wave-anim-2'>
                    <path fill="#112e2e" fill-opacity="0.9" d="M0,160L34.3,154.7C68.6,149,137,139,206,128C274.3,117,343,107,411,96C480,85,549,75,617,96C685.7,117,754,171,823,181.3C891.4,192,960,160,1029,144C1097.1,128,1166,128,1234,112C1302.9,96,1371,64,1406,48L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute top-3 -z-10 wave-anim-3'>
                    <path fill="#141616" fill-opacity="0.6" d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,106.7C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>

                <div className="flex items-center justify-center  text-white">
                    <div className="top-line-footer text-white absolute bottom-14 text-xl md:flex items-center hidden justify-around  w-full">
                        <h3>Find your stay</h3>
                        <p>
                            Comfortable rooms, suites and <br /> villas are always ready for your visit.
                        </p>
                        <button className='footer-btn'>Booking</button>
                    </div>
                    <p className='text-md md:text-xl xl:text-md absolute bottom-3'>&copy; copy right  illusiview -2024 </p>
                </div>


            </div>

        </>
    )
}

export default Footer