import Image from 'next/image'
import * as DefType from 'common/deftype'
import { s3ImageUrl } from 'common/define'
import styles from '~/components/BackgroundImageSlide.module.sass'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BackgroundImageSlide = ({ imageList }: {imageList: DefType.S3[]}) => {

  const settings = {
    arrows: false,
    infinite: true,
    speed: 9600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
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
                     fill={true}
                     objectFit="cover"
              />
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
export default BackgroundImageSlide