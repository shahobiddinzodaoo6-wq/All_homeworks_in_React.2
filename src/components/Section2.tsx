import React from 'react'
import map from '../assets/image 2.png'




const Section2 = () => {
  return (
    <>
     <div className='w-[95%] h-[830px] bg-[#F4EDDE] rounded-[30px] m-auto max-sm:h-[1100px] '>
          <h1 className='text-[30px] p-[40px]'>Карта доставки</h1>
          <p className='ml-[40px]'>Доставка осуществляется каждый день с 06:00 до 12:00. <br />Выбор интервала — 2 часа.</p>
          <div className='flex justify-center gap-[50px] mt-[30px] ml-[40px] max-sm:flex-col max-sm:items-center'>
              <img src={map} alt="" />
              <div className=' max-sm:text-center'>
                <button className='w-[300px] h-[43px] rounded-[20px] border-[1px] border-solid border-[#1EB949]'> По городу бесплатно</button>
                <button className='w-[300px] h-[43px] rounded-[20px] mt-[40px] border-[1px] border-solid border-[#34A2FE]'> Пригород 25 км — 100 ₽</button>
                <button className='w-[300px] h-[43px] rounded-[20px] mt-[40px] border-[1px] border-solid border-[#FFBC4F]'> Пригород 35 км — 300 ₽</button>
                <button className='w-[300px] h-[43px] rounded-[20px] mt-[40px] border-[1px] border-solid border-[#FC5239]'>Пригород 50 км — 500 ₽</button>
                <p className='mt-[50px]'>Уточните стоимость и время доставки</p>
                <div>
                    <h1 className='text-[25px] mt-[40px]'>+7 988 500-1-700</h1>
                    <p>c 09:00 до 21:00</p>
                </div>
                <button className='w-[300px] h-[43px] rounded-[20px] bg-[#4D8F76] text-[white] mt-[40px]'>Перезвоните мне</button>
              </div>
          </div>
     </div>
    </>
  )
}

export default Section2