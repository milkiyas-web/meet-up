import Image from 'next/image'
import React from 'react'
import logo from '../assets/images/trademark.png'
// import { FaHeartbeat } from "react-icons/fa";
// import { MdKeyboardBackspace } from "react-icons/md";

const style = {
    wrapper: `flex flex-row space-x-24  items-center bg-white w-full h-20 p-8`,
    profileImage: `object-cover rouded-full`,

}
const CardHeader = () => {
  return (
    <div className={style.wrapper}>
        <MdKeyboardBackspace />
        <Image 
            src={logo}
            width={40}
            height={40}
            alt='logo'
            // className={style.profileImage}
        />
        <div className='flex items-center'>
            // <FaHeartbeat />
        </div>
    </div>
  )
}

export default CardHeader
