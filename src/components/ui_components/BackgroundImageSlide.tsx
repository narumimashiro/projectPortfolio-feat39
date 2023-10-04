import { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import * as DefType from '@/common/deftype'
import styles from '@/styles/components/BackgroundImageSlide.module.sass'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// recoil
import { useRecoilValue } from 'recoil'
import { displayWidth } from '@/recoil/common'
import { displayHeight } from '@/recoil/common'

const s3ImageUrl = 'https://naru396-aws-storage.s3-ap-northeast-1.amazonaws.com'

const BackgroundImageSlide = ({ imageList }: {imageList: DefType.S3[]}) => {

  const dispWidth = useRecoilValue(displayWidth)
  const dispHeight = useRecoilValue(displayHeight)

  const settings = {
    arrows: false,
    infinite: true,
    speed: 9600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
  }
  
  return (
    <div className={styles['slide-box']}>
      <Slider {...settings}>
        {
          imageList.map((el: DefType.S3, index: number) => (
            <div key={el.ETag}
                 className={styles['slide-items']}>
              <Image key={el.ETag}
                     src={`${s3ImageUrl}/${imageList[index].Key}`}
                     alt={`${imageList[index].Key}`}
                     width={dispWidth}
                     height={dispHeight}></Image>
            </div>
          ))
        }
      </Slider>
    </div>
  )

}
export default BackgroundImageSlide