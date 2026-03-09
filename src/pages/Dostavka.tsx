import React from 'react'
import food from '../assets/porapoest-top 1.png'
import gruop from '../assets/Group.svg'
import frame from '../assets/Frame.svg'
import Section from '../components/Section'
import strel from '../assets/Group 169.png'
import strel2 from '../assets/Group 44.png'
import food2 from '../assets/Mask Group.png'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'

const Dostavka = () => {
  return (
    <>
      <div className='flex justify-center gap-[40px]  mt-[40px] max-sm:flex-col max-sm:items-center'>
        <div className='w-[600px] max-sm:w-[400px] mt-[100px]'>
          <h1 className='text-[50px] max-sm:text-[30px]'>Доставка прогрессивного
            питания для гурманов</h1>
          <div className='flex gap-[20px] mt-[100px]'>
            <button className='w-[200px] h-[40px] rounded-[30px] bg-[#4D8F76] text-[white] max-sm:text-[13px]'>Подобрать питание</button>
            <button className='w-[250px] h-[40px] bg-[white] text-[#4D8F76] rounded-[30px]  border-[1px] border-solid border-[#4D8F76] max-sm:border-none '>Получить <br className='hidden max-sm:block' /> консультацию</button>
          </div>
        </div>
        <img src={food} alt="" />
      </div>
      <div className='flex justify-center gap-[100px] mt-[150px]  max-sm:flex-col max-sm:items-center'>
        <img src={gruop} alt="" />
        <div className='w-[630px] mt-[40px] max-sm:w-[350px]'>
          <h1 className='text-[40px] max-sm:text-center max-sm:text-[30px]'>Еда, которая сделает тебя лучше!</h1>
          <p className='mt-[30px]'> Мы помогаем создавать новое качество жизни для наших клиентов, чтоб каждый человек был счастливым, здоровым и не отвлекался на рутинные процессы.</p>
          <p className='mt-[15px]'>Для этого мы создали новый уникальный продукт на рынке доставки еды и приглашаем вас окунуться в гастрономический шик уже сегодня.</p>
        </div>
      </div>
      <div className='flex justify-center flex-row-reverse gap-[100px] mt-[150px]  max-sm:flex-col max-sm:items-center'>
        <img src={frame} alt="" />
        <div className='w-[630px] mt-[40px] mb-[100px] max-sm:w-[350px]'>
          <h1 className='text-[40px] max-sm:text-center max-sm:text-[30px]'>Изысканное меню высокой кухни</h1>
          <p className='mt-[30px]'> В наших блюдах мы продумали каждую деталь, все ингредиенты тщательно подобраны и создают неповторимый вкус.</p>
          <p className='mt-[15px]'>Качественные продукты, деликатесы и суперфуды, которые помогают  поддерживать здоровье и обмен веществ. Мы используем крафтовые ингредиенты: с любовью выращиваем микрозелень, делаем соусы и масла, маринуем мясо, рыбу и морепродукты.</p>
        </div>
      </div>
      <Section />
      <div className='flex justify-center gap-[50px] mt-[100px] mb-[70px]  max-sm:flex-col max-sm:items-center'>
        <div className='w-[550px] max-sm:w-[400px]'>
          <h1 className='text-[20px] text-[#4D8F76]'>Попробуйте новый формат рационов — Боулы!
            Это богатый набор полезных веществ и масса вкусовых впечатлений!</h1>
          <p className='mt-[30px] text-[#493E3E]'>Боулы — это сбалансированный вариант блюда, содержащего в себе все необходимые элементы за счёт большого количества компонентов. Ингредиенты блюда не смешиваются между собой, а не спеша поедаются по отдельности.</p>
          <p className='mt-[30px] text-[#493E3E]'>Мы готовим полноценное здоровое питание на день и ежедневно доставляем утром к вашим дверям.</p>
          <p className='mt-[30px] text-[#493E3E]'>
            Наш сервис помогает экономить время, поддерживать стройность,
            работоспособность и укреплять здоровье.</p>
        </div>
        <div className='flex gap-[35px]'>
            <img className='w-[60px] h-[60px] mt-[160px] max-sm:hidden' src={strel} alt="" />
            <img src={food2} alt="" />
            <img className='w-[60px] h-[60px] mt-[160px]  max-sm:hidden' src={strel2} alt="" />
        </div>
      </div>
      <Section2/>
      <Section3/>
    </>
  )
}

export default Dostavka