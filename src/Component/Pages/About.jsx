import React, { useEffect} from 'react'
import bg from '../../assets/images/bg-1.png'
import downarrow from '../../assets/images/down-arrow.svg'
import circleText from '../../assets/images/circle-text.png'
import aboutOne from '../../assets/images/about-1.png'
import aboutTwo from '../../assets/images/about-2.png'
import aboutThree from '../../assets/images/about-31.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAnim } from '../Context'
import TextAnimation from '../AnimatedHeading'


const About = () => {

    const {ref} =useAnim()
   
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>

            <div className="slider sticky top-0 h-screen w-full bg-gradient-to-tl from-gray-700 to-gray-700 -z-10" >
                <div className="h-screen  bg-center bg-cover bg-no-repeat object-contain w-full absolute mix-blend-overlay" style={{ backgroundImage: `url(${bg})` }}>
                </div>

            </div>

            <div className="h-screen absolute top-1/2 left-1/2 -z-10  transform -translate-x-1/2 -translate-y-1/2">

                <div className="h-screen items-center justify-center flex flex-col  text-center text-white space-y-10">
                <h1 className='font-anti text-5xl md:text-6xl xl:text-7xl font-w-[400px]'><TextAnimation typingSpeed={100} text="Courtyard Castle" className='font-anti text-5xl  font-w-[400px]' /> </h1>
                    <p className='font-curban text-xl xl:text-2xl anim' ref={ref}>
                        Culinary art is an important part of the <br />
                        unforgettable experience
                    </p>
                </div>



            </div>

            {/* scroll donw */}

            <div className="absolute bottom-14 right-20 hidden md:block">
                <div className="  w-[100px] h-[100px] rounded-full bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${circleText})` }}>
                    <img src={downarrow} alt="scroll-down" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20px] animate-ping aimate-bounse' />
                </div>

            </div>


            {/* second section  */}

         <div className="bg-white h-max">
         <div className=" h-[300px] md:h-screen items-center justify-center flex text-center px-[20px] md:px-[100px] text-[#5C6C68]">
                <h2 className='text-2xl md:text-[64px] leading-snug  font-anti anim' ref={ref}>The idea of "Courtyard Castle" was born out of an enthusiasm for great food and culture.</h2>
            </div>


            <div className=" px-[20px] md:px-[100px] w-full  relativeh-[100px] md:h-[300px] flex items-start justify-between">
                <div className='hidden md:block'>
                    <h2 className='text-[#5C6C68] text-2xl font-anti absolute -left-16 md:left-0  rotate-[-90deg]'>Hotel & Resorts <span data-aos='fade-top' data-aos-delay='600' className='border-b-3 w-24 h-[1px] bg-[#5C6C68] inline-block'></span></h2>
                </div>


                <div className=" ">
                    <h2 className='text-4xl md:text-[128px] text-[#5C6C68] font-anti opacity-50' data-aos='zoom-in' data-aos-delay='600'>The Story</h2>
                </div>
            </div>


            {/* about-section */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-[10px] md:px-[100px]">
                <img src={aboutOne} alt="about_bg" className='object-contain ' data-aos='fade-down' data-aos-delay='600' />

                <div className=" px-[30px] font-urban text-xl xl:text-3xl leading-10 ">
                    <p ref={ref} className='anim'>
                        At Courtyard , we believe that the ultimate luxury lies in the time and connections we make. Hence, the facilities and experiences are carefully crafted to rejuvenate the senses and foster connections with nature, family, and friends. Relax, rejuvenate, and reconnect with the world around you .
                    </p>
                </div>
            </div>

            <div className=" h-auto bg-[#DEE2E1] w-full relative">
           <div className="mt-[200px]">
           <div className="grid grid-cols-1 md:grid-cols-2 text-[#5C6C68]   font-urban">
                    <div className="px-[10px] -mt-24 md:px-[100px]">
                        <p className='border-t-2 border-b-2 xl:text-2xl w-fit'>SPECIALIZE</p>
                        <h2 className='text-4xl md:text-[64px] leading-tight' data-aos='fade-down' data-aos-delay='600'>
                            Peacefull Life <br />
                            style
                        </h2>
                        <p className='text-xl xl:text-3xl my-8'>
                            The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time.
                        </p>
                    </div>
                    <div className="">
                        <img src={aboutTwo} alt="About_bg" className='object-contain' data-aos='zoom-in' data-aos-delay='600' />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  relative">
                   <div className="relative">
                   <img src={aboutThree} alt="About_bg" className='object-contain '  />
                    <div className="content-above absolute flex items-start justify-center text-xl leading-relaxed h-full w-full  top-0  space-y-2  text-white flex-col px-[60px]" data-aos='zoom-in' data-aos-delay='600'>
                        <h2 className='text-6xl font-anti'>Our Rooms</h2>
                        <p className=' xl:text-2xl'>The people, food and the prime locations <br /> make Rodich the perfect place good fri</p>
                    </div>
                   </div>
                    <div className=" px-[30px] font-urban text-xl leading-relaxed  flex flex-col items-center justify-center ">
                        <h2 className='text-4xl md:text-6xl text-[#5C6C68] font-anti opacity-50 py-8'>Contact Us</h2>
                        <p className='xl:text-2xl'>
                            The people, food and the prime locations <br /> make Rodich the perfect place good fri
                        </p>
                    </div>
                </div>


           </div>
         </div>
        </>
    )
}

export default About