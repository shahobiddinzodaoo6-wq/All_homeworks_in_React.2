import React from 'react'
import food from '../assets/107823765_764851841011463_3291585847262786341_n 1.png'
import Section from '../components/Section'
import food2 from '../assets/food.png'
import strel2 from '../assets/Group 44.png'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import doira from '../assets/Ellipse 15.png'
import tell from '../assets/Group 160.png'
import tell2 from '../assets/Group 160 (1).png'





const ProgrammaPitanie = () => {
  return (
    <>
      <div className='flex justify-center gap-[40px]  mt-[40px] max-sm:flex-col max-sm:items-center'>
        <div className='w-[600px] max-sm:w-[400px] mt-[100px]'>
          <h1 className='text-[50px] max-sm:text-[30px]'>Прогрессивное питание на каждый день</h1>
          <div className='flex gap-[20px] mt-[100px]'>
            <button className='w-[200px] h-[40px] rounded-[30px] bg-[#4D8F76] text-[white] max-sm:text-[13px]'>Подобрать питание</button>
            <button className='w-[250px] h-[40px] bg-[white] text-[#4D8F76] rounded-[30px]  border-[1px] border-solid border-[#4D8F76] max-sm:border-none '>Получить <br className='hidden max-sm:block' /> консультацию</button>
          </div>
        </div>
        <img src={food} alt="" />
      </div>
      <Section />
      <div className='flex justify-center gap-[50px] mt-[100px] mb-[70px]  max-sm:flex-col max-sm:items-center'>
        <div className='w-[550px] max-sm:w-[400px]'>

          <p className='mt-[30px] text-[#493E3E]'>Боулы — это сбалансированный вариант блюда, содержащего в себе все необходимые элементы за счёт большого количества компонентов. Ингредиенты блюда не смешиваются между собой, а не спеша поедаются по отдельности.</p>
          <h1 className='text-[20px] text-[#4D8F76]'>Попробуйте новый формат рационов — Боулы!
            Это богатый набор полезных веществ и масса вкусовых впечатлений!</h1>
          <p className='mt-[30px] text-[#493E3E]'>Мы готовим полноценное здоровое питание на день и ежедневно доставляем утром к вашим дверям.</p>
          <p className='mt-[30px] text-[#493E3E]'>
            Наш сервис помогает экономить время, поддерживать стройность,
            работоспособность и укреплять здоровье.</p>
        </div>
        <div className='flex gap-[35px]'>

          <img src={food2} alt="" />
          <img className='w-[60px] h-[60px] mt-[160px]  max-sm:hidden' src={strel2} alt="" />
        </div>
      </div>
      <Section2 />

      <h1 className='m-[40px] text-[35px] max-sm:text-center'>Акции</h1>
      <div className='flex justify-center gap-[40px]  max-sm:flex-col max-sm:items-center'>
        <div className='w-[600px] h-[260px] bg-[#EA9DA3] rounded-[30px] max-sm:w-[480px] '>
          <div className='flex justify-around pt-[40px]'>
            <div>
              <h1 className='text-[23px] text-[white] '>Наименование акции</h1>
              <p className='text-[white] mt-[30px]'>Краткое описание акции</p>
              <button className='w-[190px] h-[43px] rounded-[20px] border-[1px] border-solid border-[white] text-[white] mt-[60px]'>Подробнее</button>
            </div>
            <img src={doira} alt="" />
          </div>
        </div>
        <div className='w-[600px] h-[260px] bg-[#9898A0] rounded-[30px] max-sm:w-[480px] '>
          <div className='flex justify-around pt-[40px]'>
            <div>
              <h1 className='text-[23px] text-[white] '>Наименование акции</h1>
              <p className='text-[white] mt-[30px]'>Краткое описание акции</p>
              <button className='w-[190px] h-[43px] rounded-[20px] border-[1px] border-solid border-[white] text-[white] mt-[60px]'>Подробнее</button>
            </div>
            <img src={doira} alt="" />
          </div>
        </div>
      </div>
      <Section3 />
      
      <h1 className='m-[40px] text-[35px] max-sm:text-center'>Отзывы</h1>
      <div className='flex justify-center gap-[30px] '>
          <img className='w-[645px] h-[456px]' src={tell} alt="" />
          <img  className='w-[645px] h-[456px] max-sm:hidden' src={tell2} alt="" />
      </div>
    </>
  )
}

export default ProgrammaPitanie