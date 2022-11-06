import React from 'react'
import BannerImage from '../../public/hero.jpg'
import Styles from './style.module.scss'


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
  Scrollbar,
  FreeMode
} from "swiper/core";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);


const Banner = ({cardsData}) => {

    const Estilos={
        homeBanner:{
            backgroundImage: `url(${BannerImage.src})`,
        }
    }
  return (
    <div className={`${Styles.homeBanner} bg-bannerColor`}>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-40 pb-40'>
                <div className=''>
                    <h1 className='pb-40 leading-none font-bold text-2xl text-white'>A complete <span className='text-primaryColor'>PokemonTCG</span> database app</h1>
                    <p className='text-white font-400 text-lg'>Welcome to the PokemonTCG App, check all the cards and expansions from this awesome TCG, also you can check the prices on the best card stores.</p>
                </div>
                <div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        freeMode={true}
                        breakpoints={{
                            0:{
                                slidesPerView:1,
                            },
                            768:{
                            slidesPerView: 2,
                            },
                            992:{
                                slidesPerView: 4
                            }}
                        }
                        modules={[FreeMode, Scrollbar]}
                        scrollbar={{ draggable: true }}
                        // pagination
                        className='cardSlider'
                    >
                        {cardsData.filter((higherCards)=>{
                             if(higherCards.rarity === 'Rare Rainbow'){
                                return higherCards
                             }   
                        })
                        .map((cardSingle,i)=>{
                            return(
                                <SwiperSlide key={i}>
                                    {cardSingle.name}
                                    <img className='h-auto object-cover' src={cardSingle.images.large}></img>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner