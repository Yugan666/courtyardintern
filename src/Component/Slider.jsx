import React from 'react'
import slider from '../assets/images/slider-1.png'
import slider2 from '../assets/images/slider-2.png'
import slider3 from '../assets/images/slider-1.png'
import './Animation.css'
import Sliders from 'react-slick'
import { useAnim } from './Context'


const Slider = () => {
  const { ref } = useAnim()
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // To ensure the centered slide is recognized for scaling
    focusOnSelect: true,
    // Add any more settings you require
  };


  return (

    <>
      <div className="relative md:h-screen  h-auto w-full">

        <div className="absolute h-auto md:h-screen w-full bg-[#C7D4D1]"></div>
        <div className=" mx-auto flex items-center justify-center absolute z-10 md:h-[100vh] top-4 w-full">
          <div className="bg-white absolute top-24 z-10 p-[20px] w-[300px] md:w-[400px]  xl:w-[450px] text-wrap ">
            <div className="border border-gray-300 p-[30px] text-center">
              <div className='font-urban text-md md:text-2xl xl:text-2xl anim space-y-3 ' > 
              <p>Courtyard Castle , we</p> 
               <p data-aos='fade-bottom' data-aos-delay='100'>believe that the ultimate</p> 
             <p data-aos='fade-bottom' data-aos-delay='300'>luxury lies in the time and</p> 
             <p data-aos='fade-bottom' data-aos-delay='500'>connections we make. </p>
             <p data-aos='fade-bottom' data-aos-delay='700'>Hence, the facilities and</p>  
            <p data-aos='fade-bottom' data-aos-delay='900'>experiences are carefully</p> </div>
            </div>
          </div>

        </div>

        <div className=" w-full md:w-[80vw] mx-auto  overflow-hidden items-center justify-center h-screen">
          <Sliders {...settings} className='w-full overflow-hidden sm:h-[500px] md:h-[80vh] top-14 relative'>

            <div className="h-screen relative ">

              <div className="absolute flex items-center justify-center h-[500px] md:h-screen w-full">
                <img src={slider} alt="Slider_img" className='bg-center bg-cover  object-cover w-full h-[500px] md:h-screen  slow-spin' />
              </div>
            </div>
            <div className="h-screen relative ">


              <div className="absolute flex items-center justify-center h-[500px] md:h-screen w-full">
                <img src={slider2} alt="Slider_img" className='bg-center bg-cover  object-cover w-full h-[500px] md:h-screen  slow-spin' />

              </div>
            </div>
            <div className="h-screen relative ">


              <div className="absolute flex items-center justify-center h-[500px] md:h-screen w-full">
                <img src={slider3} alt="Slider_img" className='bg-center bg-cover  object-cover w-full h-[500px] md:h-screen  slow-spin' />

              </div>
            </div>

            {/* <div className="h-screen relative ">

              <div className="absolute flex items-center justify-center h-[500px] w-full md:h-screen">
                <img src={slider3} alt="Slider_img" className='bg-center bg-cover  object-cover sm:w-full sm:h-full h-[500px] md:h-screen mx-[100px] slow-spin' />

              </div>

            </div> */}

          </Sliders>
        </div>
      </div>




    </>


  )
}

export default Slider