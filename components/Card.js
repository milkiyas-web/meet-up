import React from 'react'
import CardHeader from './CardHeader'
import CardItem from './CardItem'
import logo from '../assets/images/trademark.png';
import Image from 'next/image';

const style = {
  wrapper: `h-[45rem] w-[27rem] flex flex-col rounded-lg overflow-hidden`,
  cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500`,
  noMoreWrapper: `flex flex-col justify-center items-center absolute`,
  tinderLogo: `text-5xl text-red-500 mb-4`,
  noMoreText: `text-xl text-white`,
  swipesContainer: `w-full h-full overflow-hidden`
  }
  

const Card = () => {
  return (
    <div className={style.wrapper}>
      <CardHeader />
      <div className={style.cardMain}>
        <div className={style.noMoreWrapper}>
          <Image src={logo} alt='logo' width={55.64} height={35}/>
          <div className={style.noMoreText}>
            No more profiles in your location. come and check later...
          </div>
        </div>
        <div className={style.swipesContainer}>
            <CardItem />
        </div>
      </div>
    </div>
  )
}

export default Card