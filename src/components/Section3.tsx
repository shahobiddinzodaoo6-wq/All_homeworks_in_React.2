import React from 'react'
import vector from '../assets/Vector.png'
import vector2 from '../assets/Vector (1).png'
import cta from '../assets/cta 1.png'
import doira from '../assets/Ellipse 15.png'

const Section3 = () => {
    return (
        <>
            <h1 className='m-[40px] text-[30px]'>Частые вопросы</h1>
            <div className='flex gap-[30px] ml-[40px] mb-[50px]'>
                <button className='w-[120px] h-[43px] rounded-[20px] border-[1px] border-solid border-[#DFCCB7] '>Продукты</button>
                <button className='w-[140px] h-[43px] rounded-[20px] border-[1px] border-solid border-[#DFCCB7] '>Программы</button>
                <button className='w-[200px] h-[43px] rounded-[20px] bg-[#DFCCB7] max-sm:hidden'>Оплата и доставка</button>
                <button className='w-[120px] h-[43px] rounded-[20px] border-[1px] border-solid border-[#DFCCB7] max-sm:hidden'>Хранение</button>
            </div>
            <div className='w-[93%] h-[90px] rounded-[30px] shadow-[0px_0px_10px_lightgrey] m-auto'>
                <div className='flex justify-between pt-[30px] pl-[30px] pr-[30px]'>
                    <h1 className='text-[20px]'>Как я могу оплатить заказ?</h1>
                    <img src={vector} className='w-[32px] h-[16px] mt-[10px]' alt="" />
                </div>
            </div>
            <div className='w-[93%] h-[200px] rounded-[30px] shadow-[0px_0px_10px_lightgrey] m-auto'>
                <div className='flex justify-between pt-[30px] pl-[30px] pr-[30px] mt-[30px]'>
                    <div className='w-[900px] max-sm:w-[350px] '>
                        <h1 className='text-[20px] '>Как я могу оплатить заказ?</h1>
                        <p className='pt-[20px] text-[#493E3E]'>Каждый вечер, в день доставки, с вами связывается курьер, ориентировочно с 19:00 до 20:00 для уточнения адреса и времени доставки. При необходимости, вы можете их изменить, сообщив об этом курьеру при звонке.</p>
                    </div>
                    <img src={vector2} className='w-[32px] h-[16px] mt-[10px]' alt="" />
                </div>
            </div>
            <div className='w-[93%] h-[90px] rounded-[30px] shadow-[0px_0px_10px_lightgrey] m-auto'>
                <div className='flex justify-between pt-[30px] pl-[30px] pr-[30px] mt-[30px]'>
                    <h1 className='text-[20px]'>Могу ли я перенести день доставки?</h1>
                    <img src={vector} className='w-[32px] h-[16px] mt-[10px]' alt="" />
                </div>
            </div>
            <div className='w-[93%] h-[90px] rounded-[30px] shadow-[0px_0px_10px_lightgrey] m-auto'>
                <div className='flex justify-between pt-[30px] pl-[30px] pr-[30px] mt-[30px]'>
                    <h1 className='text-[20px]'>Могу ли я приостановить доставку, на какой срок?</h1>
                    <img src={vector} className='w-[32px] h-[16px] mt-[10px]' alt="" />
                </div>
            </div>
            <div className=' w-[95%] h-[450px] rounded-[30px] bg-[#A2BE95] m-auto max-sm:h-[1000px]'>
                <div className='mt-[120px] flex justify-center gap-[100px]  max-sm:flex-col max-sm:items-center'>
                    <div className='pt-[60px]  '>
                        <h1 className='text-[40px] text-[white] '>Бесплатная консультация <br />
                            диетолога</h1>
                        <div className='flex gap-[30px] mt-[60px]  max-sm:flex-col max-sm:items-center'>
                            <input type="text" className='w-[300px] h-[40px] rounded-[20px] bg-[white] pl-[20px] outline-none' placeholder='Ваше имя' />
                            <input type="text" className='w-[300px] h-[40px] rounded-[20px] bg-[white] pl-[20px] outline-none' placeholder='Телефон' />
                        </div>
                        <button className='w-[300px] h-[40px] rounded-[20px] text-[white] bg-[#4D8F76] mt-[30px] max-sm:ml-[80px]'>Отправить заявку</button>
                    </div>
                    <img src={cta} className='relative bottom-[28px]' alt="" />
                </div>

            </div>
            <div className='flex justify-around mt-[100px]  max-sm:flex-col max-sm:items-center'>
                <div className='m-[40px] w-[500px] max-sm:w-[400px]'>
                    <h1 className='text-[35px]'>Пробный рацион</h1>
                    <p className='mt-[40px]'>Сомневаетесь? Протестируйте наш сервис и еду.
                        Начните с пробного меню на два дня со скидкой 20% за 2 800 ₽ (1 200 ккал)</p>
                    <button className='w-[150px] h-[43px] rounded-[20px] bg-[#4D8F76] mt-[30px] text-[white]'>Попробовать</button>
                </div>
                <img src={doira} className='w-[274px] h-[274px]' alt="" />
            </div>
        </>
    )
}

export default Section3