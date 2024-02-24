import React from 'react'
import TinderCard from 'react-tinder-card'
import monica from './monica.jpg'
const style = {
    tinderCardWrapper: `w-full h-full absolute`,
  wrapper: `w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center relative px-4 py-4`,
  space: `flex justify-between h-3/4 items-end mb-6`,
  name: `flex text-white text-3xl font-extrabold items-center -mb-4`,
  age: `ml-4 font-semibold text-xl`,
  walletAddress: `font-bolder text-xl text-white mb-2`,
  reactionsContainer: `flex justify-between w-full px-2 gap-5`,
  buttonContainer: `h-16 w-16 rounded-full flex items-center justify-center cursor-pointer border-2`,
  buttonSymbol: `text-3xl`,
  backColors: `border-white text-white`,
  xColors: `border-red-500 text-red-500`,
  starColors: `border-blue-400 text-blue-400`,
  lightningColors: `border-purple-500 text-purple-500`,
  
}
const CardItem = () => {
    const onSwipe = (dir) => {
        if(dir === 'right'){
            handleRightSwipe(card, currentAccount)
        }
    }
  return (
    <TinderCard 
        className={style.tinderCardWrapper}
        preventSwipe={['up', 'down']}
        onSwipe={onSwipe}
    >
        <div className={style.wrapper} style={{backgroundImage: `url('https://plus.unsplash.com/premium_photo-1684433903741-36061f7352b8?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZWFufGVufDB8fDB8fHww')`}}>
            <div className={style.space}>
                <div className={style.name}>
                    Monica
                    <span className={style.age}>27</span>
                </div>
            </div>
            <div className={style.bio}>I liked richard</div>
        </div>
    </TinderCard>
  )
}

export default CardItem