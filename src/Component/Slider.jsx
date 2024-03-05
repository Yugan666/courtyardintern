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
        <div className=" mx-auto flex items-center justify-center absolute z-10 md:h-[80vh] top-14 w-full">
          <div className="bg-white absolute top-24 z-10 p-[20px] w-[250px] md:w-[350px] 2xl:w-[400px] text-wrap ">
            <div className="border border-gray-300 p-[30px] text-center">
              <p className='font-urban text-md md:text-xl 2xl:text-2xl anim' ref={ref} > Courtyard Castle , we <br />  believe that the ultimate <br /> luxury lies in the time and <br /> connections we make. <br /> Hence, the facilities and  <br />experiences are carefully </p>
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