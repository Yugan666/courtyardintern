import React, { useState } from 'react'
import gallery from '../../assets/images/gallery-bg.png'
import downarrow from '../../assets/images/down-arrow.svg'
import circleText from '../../assets/images/circle-text.png'
import galOne from '../../assets/images/gal-1.png'
import galTwo from '../../assets/images/gal-2.png'
import galThree from '../../assets/images/gal-3.png'
import galFour from '../../assets/images/gal-4.png'
import galFive from '../../assets/images/gal-5.png'
import galSix from '../../assets/images/gal-6.png'
import galSeven from '../../assets/images/gal-7.png'
import galEight from '../../assets/images/gal-8.png'
import galNighen from '../../assets/images/gal-9.png'
import galTen from '../../assets/images/gal-10.png'
import galElevan from '../../assets/images/gal-11.png'
import galtwelle from '../../assets/images/gal-12.png'
import cross from '../../assets/images/int.svg'
import 'aos/dist/aos.css';
import Aos from 'aos'
import TextAnimation from '../AnimatedHeading'


const galleryData = [
    {
        id: 1,
        img: galOne,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
    {
        id: 2,
        img: galTwo,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
    {
        id: 3,
        img: galThree,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
    {
        id: 4,
        img: galFour,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
    {
        id: 5,
        img: galFive,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
    {
        id: 6,
        img: galSix,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
    {
        id: 7,
        img: galSeven,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
    {
        id: 8,
        img: galEight,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
    {
        id: 9,
        img: galNighen,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
    {
        id: 10,
        img: galTen,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
    {
        id: 11,
        img: galElevan,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
    {
        id: 12,
        img: galtwelle,
        title1: "SPECIALIZE",
        title2: "Double Cetric HeRoom",
    },
]

const Gallery = () => {
    document.addEventListener('DOMContentLoaded', (e) => {
        Aos.init()
    })

    const [selected, setSelected] = useState(null);

    const handelClick = (index) => {
        setSelected(galleryData[index]);
    }

    return (
        <>

            <div className="slider relative h-screen w-full bg-gradient-to-tl from-gray-900 to-gray-400 -z-10">
                <div className="h-screen  bg-center bg-cover bg-no-repeat object-contain w-full mix-blend-overlay absolute" style={{ backgroundImage: `url(${gallery})` }}>
                </div>

            </div>

            <div className="h-screen absolute top-1/2 left-1/2 -z-10  transform -translate-x-1/2 -translate-y-1/2">

                <div className="h-screen items-center justify-center flex flex-col text-center text-white space-y-10">
                    <h1 className='font-anti text-5xl md:text-6xl xl:text-7xl font-w-[400px]'><TextAnimation typingSpeed={100} text="Courtyard Castle" className='font-anti text-5xl  font-w-[400px]' /> </h1>
                    <p className='font-curban text-2xl'>
                        Culinary art is an important part of the <br />
                        unforgettable experience
                    </p>
                </div>



            </div>

            {/* scroll donw */}

            <div className="absolute bottom-14 right-20">
                <div className="  w-[100px] h-[100px] rounded-full bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${circleText})` }}>
                    <img src={downarrow} alt="gallery" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20px] animate-ping aimate-bounse' />
                </div>

            </div>


            <div className=" ">
                <h2 className='text-4xl md:text-[78px] text-right p-[10px] md:pt-[40px] text-[#5C6C68] font-anti opacity-50' data-aos='zoom-in' data-aos-delay='600'>Our Gallery</h2>
            </div>


            {/* gallery imgaes */}

            {
                selected !== null &&
                <div className="pop-up-gallery">
                    <img src={cross} alt="int" className='cross-int' onClick={() => setSelected(null)} />
                    <div className="img-part">
                        <img src={selected.img} alt="galleryImg" />
                    </div>
                </div>
            }

            <div className="p-[10px] md:p-[100px]">

                <div className="grid md:grid-cols-4 grid-cols-2 gap-2   min-w-full  items-start">
                    {
                        galleryData.map((item, index) => (
                            <div className="w-full overflow-hidden" data-aos='zoom-in' data-aos-delay='600' key={index}>
                                <img src={item.img} alt="gallery" className='object-contain zom' onClick={() => handelClick(index)} />
                                <p className='font-urban -tracking-tighter text-md xl:text-2xl mt-8 text-[#292E36]'>{item.title1}</p>
                                <p className='font-anti text-[#5C6C68] text-xl xl:text-2xl'>{item.title2}</p>

                            </div>
                        ))
                    }

                </div>
            </div>





        </>
    )
}

export default Gallery