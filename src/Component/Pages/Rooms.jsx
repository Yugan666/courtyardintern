import React, { useEffect, useState } from 'react'
import rooms from '../../assets/images/rooms.png'
import downarrow from '../../assets/images/down-arrow.svg'
import circleText from '../../assets/images/circle-text.png'
import roomsmain from '../../assets/images/rooms-main.png'
import roomsOne from '../../assets/images/rooms-1.png'
import roomsTwo from '../../assets/images/rooms-2.png'
import roomsThree from '../../assets/images/rooms-3.png'
import amenIconOne from '../../assets/images/amen-icon-1.svg'
import amenIconTwo from '../../assets/images/amen-icon-2.svg'
import amenIconThree from '../../assets/images/amen-icon-3.svg'
import amenIconFour from '../../assets/images/amen-icon-4.svg'
import amenIconFive from '../../assets/images/amen-icon-5.svg'
import amenIconSix from '../../assets/images/amen-icon-6.svg'
import amenIconSeven from '../../assets/images/amen-icon-7.svg'
import amenIconEigth from '../../assets/images/amen-icon-8.svg'
import rightarrow from '../../assets/images/right-arrow.svg'
import igOne from '../../assets/images/ig-1.png'
import igTwo from '../../assets/images/ig-2.png'
import igThree from '../../assets/images/ig-3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Animation.css'
import { useAnim } from '../Context'
import TextAnimation from '../AnimatedHeading'



const Rooms = () => {


    const { ref } = useAnim()

    const [activeImg1, setActiveImg1] = useState(false);
    const [activeImg2, setActiveImg2] = useState(false);
    const [activeImg3, setActiveImg3] = useState(false);

    const firstImg =(e)=>{
        e.preventDefault();
        setActiveImg1(true)
        setActiveImg2(false)
        setActiveImg3(false)
    }

    const secondImg =(e)=>{
        e.preventDefault();
        setActiveImg2(true)
        setActiveImg1(false)
        setActiveImg3(false)
    }
    const thirdImg =(e)=>{
        e.preventDefault();
        setActiveImg3(true)
        setActiveImg2(false)
        setActiveImg1(false)
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="slider sticky top-0 h-screen w-full bg-gradient-to-tl from-gray-900 to-gray-600 -z-10">
                <div className="h-screen  bg-center bg-cover bg-no-repeat object-contain w-full mix-blend-overlay absolute" style={{ backgroundImage: `url(${rooms})` }}>
                </div>

            </div>

            <div className="h-screen absolute top-1/2 left-1/2 -z-10  transform -translate-x-1/2 -translate-y-1/2">

                <div className="h-screen items-center justify-center flex flex-col text-center text-white space-y-10">
                    
                    <h1 className='font-anti text-5xl md:text-6xl xl:text-7xl font-w-[400px]'><TextAnimation typingSpeed={100} text="Luxury Room" className='font-anti text-5xl  font-w-[400px]' /> </h1>
                    <p className='font-curban text-2xl anim' ref={ref}>
                        Explore the Gallery and get <br />
                        unforgettable experience
                    </p>
                </div>



            </div>

            {/* scroll donw */}

            <div className="absolute bottom-14 right-20 hidden md:block">
                <div className="  w-[100px] h-[100px] rounded-full bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${circleText})` }}>
                    <img src={downarrow} alt="scroll_down" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20px] animate-ping aimate-bounse' />
                </div>

            </div>


            <div className="bg-white h-max">
                <div className=" ">
                    <h2 className='text-4xl sm:text-4xl md:text-[128px] text-right p-[10px] md:p-[100px] text-[#5C6C68] font-anti opacity-50' data-aos="fade-up">Rooms</h2>
                </div>

                {/* rooms section */}

                <div className="grid grid-cols-1 md:grid-cols-2 p-[10px] md:px-[100px]" >
                    <div className="" data-aos='fade-up'>
                        <div className="dfc" >
                            {
                                activeImg1 ?
                                    <img src={roomsOne} alt="rooms_img" className='object-contain dis' data-aos='zoom-in' data-aos-delay="500" data-aos-easing="ease-in" /> :
                                    activeImg2 ?
                                        <img src={roomsTwo} alt="rooms_img" className='object-contain dis' data-aos='zoom-in' data-aos-delay="500" data-aos-easing="ease-in" /> :
                                        activeImg3 ?
                                            <img src={roomsThree} alt="rooms_img" className='object-contain dis' data-aos='zoom-in' data-aos-delay="500" data-aos-easing="ease-in" /> :
                                            <img src={roomsmain} alt="rooms_img" className='object-contain dis' data-aos='zoom-in' data-aos-delay="500" data-aos-easing="ease-in" />
                            }
                        </div>
                        <div className="grid grid-cols-3 my-2 gap-2">
                            <div className="w-[100%] overflow-hidden" onClick={firstImg}>
                                <img src={roomsOne} alt="rooms" className='object-contain dis' />
                            </div>
                            <div className="w-[100%] overflow-hidden" onClick={secondImg}>
                                <img src={roomsTwo} alt="rooms" className='object-contain dis' />
                            </div>
                            <div className="w-[100%] overflow-hidden" onClick={thirdImg}>
                                <img src={roomsThree} alt="rooms" className='object-contain dis' />
                            </div>
                        </div>
                    </div>

                    <div className="px-10 text-[#5C6C68] w-full space-y-7" data-aos='fade-down'>
                        <h2 className='text-3xl md:text-6xl'>Vintage Villas</h2>
                        <p className='text-md md:text-xl xl:text-2xl'>The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time.</p>

                        <h5 className='text-xl md:text-3xl md:py-4 font-semibold xl:text-4xl'>Our Amenties</h5>

                        <div className="amenties space-y-10">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex gap-4 items-center text-xl">
                                    <p><img src={amenIconOne} alt="swimming pool" /></p>
                                    <p>Swimming Pool</p>
                                </div>
                                <div className="flex gap-4 text-xl items-center">
                                    <p><img src={amenIconTwo} alt="beds" /></p>
                                    <p>2 Beds </p>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex gap-4 items-center text-xl">
                                    <p><img src={amenIconThree} alt="spa" /></p>
                                    <p>Traditional Spa</p>
                                </div>
                                <div className="flex gap-4 text-xl items-center">
                                    <p><img src={amenIconFour} alt="Rooms" /></p>
                                    <p>2 Baths </p>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex gap-4 items-center text-xl">
                                    <p><img src={amenIconFive} alt="fitness center" /></p>
                                    <p>Fitness Centre</p>
                                </div>
                                <div className="flex gap-4 text-xl items-center">
                                    <p><img src={amenIconSix} alt="wifi" /></p>
                                    <p>Free Wifi </p>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex gap-4 items-center text-xl">
                                    <p><img src={amenIconSeven} alt="parking" /></p>
                                    <p>Parking Facilities</p>
                                </div>
                                <div className="flex gap-4 text-xl items-center">
                                    <p><img src={amenIconEigth} alt="resturant" /></p>
                                    <p>Restaurant</p>
                                </div>

                            </div>

                            <button className='py-2 px-4  border border-gray-500'><span><img src={rightarrow} alt="border" className='inline pr-2' /></span><span className='inline'>Book Now</span></button>
                        </div>
                    </div>
                </div>


                {/* rooms sub title */}

                <h2 className='px-[10px] md:px-[100px] text-2xl my-7 text-[#5C6C68] md:text-4xl'>Check out <br />
                    Our Authentic Villas
                </h2>

                {/* image full cover rooms section */}

                <div className="grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-0">
                    <div className="relative bg-s overflow-hidden  ">
                        <img src={igOne} alt="img" className='object-contain ' />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl font-urban text-hides space-y-6">
                            <h2 className='md:text-[64px] font-light'>Blossom</h2>
                            <h3 className='md:text-[64px] font-normal'>world</h3>
                        </div>
                        <div className="bootom-bg">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur, ducimus quod exercitationem quaerat animi.</p>
                        </div>
                    </div>
                    <div className="relative bg-s overflow-hidden">
                        <img src={igTwo} alt="img" className='object-contain' />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl font-urban space-y-6 text-hides">
                            <h2 className='md:text-[64px] font-light'>Bliss</h2>
                            <h3 className='md:text-[64px] font-normal'>world</h3>
                        </div>
                        <div className="bootom-bg">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur, ducimus quod exercitationem quaerat animi.</p>
                        </div>
                    </div>
                    <div className="relative bg-s overflow-hidden">
                        <img src={igThree} alt="img" className='object-contain' />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 hov-hide -translate-y-1/2 text-center text-white text-4xl font-urban space-y-6 text-hides">
                            <h2 className='md:text-[64px] font-light'>Sauna</h2>
                            <h3 className='md:text-[64px] font-normal'>world</h3>
                        </div>
                        <div className="bootom-bg">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur, ducimus quod exercitationem quaerat animi.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Rooms