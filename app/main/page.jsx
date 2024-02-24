"use client"
import React from 'react';
import Card from '../../components/Card'

const style = {
  wrapper: `h-[45rem] w-[27rem] flex flex-col rounded-lg overflow-hidden`,
  cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500`,
  noMoreWrapper: `flex flex-col justify-center items-center absolute`,
  noMoreText: `text-xL text-white`,
  swipesContainer: `w-full h-full overflow-hidden`,
}

const page = () => {
  return (
    // <div className={style.wrapper}>
    //   <CardHeader />
    //   <div className={style.cardMain}>
    //     <div className={noMoreWrapper}>
    //       <Image src={logo} alt='logo' width={55.64} height={35}/>
    //       <div className={style.noMoreText}>
    //         No more profiles in your location. come and check later...
    //       </div>
    //     </div>
    //     <div className={style.swipesContainer}>

    //     </div>
    //   </div>
    // </div>
    <>
      <Card />
    </>
  )
}

export default page