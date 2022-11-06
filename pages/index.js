import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Header from '../components/header'
import Banner from '../components/banner'

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
import Styles from '../styles/scss/pages/home.module.scss'

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);


export default function Home({data, cardsData}) {
  console.log({data})
  console.log('cards', {cardsData})

  return (
    <main className='bg-bgColor'>
      <Header />
      <Banner cardsData={cardsData}/>
      <div className='container mx-auto'>
        <div className='pt-40 pb-40'>
          <h1 className='text-1xl text-banneColor'>Standard Sets</h1>
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
              className='setSlider'
            >
              {
                data.filter((setStandard)=>{
                  if(setStandard.legalities?.standard === 'Legal') {
                    return setStandard
                  }
                })
                .map((set,i) => {
                  return(
                    <SwiperSlide key={i}>
                        <div className={`${Styles.cards}`}>
                          <div className={Styles.cardImage}>
                            <img className='h-auto object-cover' src={set.images.logo}></img>
                          </div>
                          <p>{set.name}</p>
                          <p>{set.series}</p>
                        </div>
                    </SwiperSlide>
                  )
                })
            }
          </Swiper>
        </div>
      </div>
    </main>
  )
}

export const getStaticProps = async () => {
  const baseUrl = "https://api.pokemontcg.io/v2"

  const res = await axios.get(`${baseUrl}/sets`);
  const cards = await axios.get(`${baseUrl}/cards?q=set.id:swsh11`);
  return {
    props: { 
      data: res.data.data,
      cardsData: cards.data.data
    },
  };
};