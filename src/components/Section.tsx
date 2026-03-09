import React from 'react'
import image from '../assets/image_1_1.png'
import image2 from '../assets/image_2_1.png'
import image3 from '../assets/image_3.png'
import image4 from '../assets/image_4.png'
import gruop from '../assets/Group 62.png'
import img from '../assets/Group 39.png'
import img2 from '../assets/Group 40.png'
import img3 from '../assets/Group 41.png'
import img4 from '../assets/Group (1).png'
import img5 from '../assets/Group 42.png'
import img6 from '../assets/Group (2).png'



const Section = () => {
    return (
        <>
            <div className='w-[95%] h-[230px] rounded-[30px] m-auto bg-[#E2DDC0] max-sm:h-[600px] '>
                <h1 className='text-[40px] p-[35px] '>Подберите рацион для своих целей</h1>
                <div className='flex gap-[30px] ml-[50px]  max-sm:flex-col max-sm:items-center max-sm:ml-[0px]'>
                    <div className='flex gap-[30px] '>
                        <div className='w-[90px] h-[43px] rounded-[20px] bg-[#FAF6F2] flex gap-[10px]'>
                            <button className='w-[35px] h-[35px] rounded-[50%] m-[4px] bg-[#DFCCB7]'>Ж</button>
                            <h1 className='mt-[8px]'>М</h1>
                        </div>
                        <div className='w-[100px] h-[43px] rounded-[20px] bg-[#FAF6F2]'>
                            <h1 className='p-[8px_20px]'>Ваш вес</h1>
                        </div>
                        <div className='w-[100px] h-[43px] rounded-[20px] bg-[#FAF6F2]'>
                            <h1 className='p-[8px_15px]'>Ваш  рост</h1>
                        </div>
                    </div>
                    <div className='flex gap-[30px] '>
                        <div className='w-[120px] h-[43px] rounded-[20px] bg-[#FAF6F2]'>
                            <h1 className='p-[8px_13px]'>Ваш возраст</h1>
                        </div>
                        <div className='w-[160px] h-[43px] rounded-[20px] bg-[#FAF6F2]'>
                            <h1 className='p-[8px_13px]'>Активность</h1>
                        </div>
                    </div>
                    <div className='w-[160px] h-[43px] rounded-[20px] bg-[#FAF6F2] max-sm:w-[330px]'>
                        <h1 className='p-[8px_13px] '>Выберите цель</h1>
                    </div>
                    <button className='w-[170px] h-[43px] rounded-[20px] bg-[#4D8F76] text-[white] max-sm:w-[190px]'>Рассчитать рацион</button>

                </div>
            </div>
            <div className='w-[95%] h-[1500px] rounded-[30px] shadow-[0px_0px_10px_lightgrey] m-auto max-sm:h-[1775px]'>
                <div className='mt-[100px]'>
                    <div className='flex justify-between pt-[60px]  max-sm:flex-col max-sm:items-center max-sm:text-center '>
                        <h1 className='text-[40px] pl-[30px] max-sm:text-[25px]'>Программа ПремиумБоул</h1>
                        <p className='text-[#4D8F76] pr-[30px]'>Каждый день новое меню</p>
                    </div>
                    <p className='m-[30px]'>Калорийность</p>
                    <div className='flex justify-center gap-[40px] mt-[20px] max-sm:gap-[10px]'>
                        <div className='w-[240px] h-[96px] rounded-[30px] border-[1px] border-solid border-[#DFCCB7]  text-center'>
                            <h1 className='text-[23px] mt-[10px]'>900 ккал</h1>
                            <p className='mt-[5px]'>3 блюда</p>
                        </div>
                        <div className='w-[240px] h-[96px] rounded-[30px]  bg-[#DFCCB7] text-center '>
                            <h1 className='text-[23px] mt-[10px]'>1 250 ккал </h1>
                            <p className='mt-[5px]'>4 блюда</p>
                        </div>
                        <div className='w-[240px] h-[96px] rounded-[30px] border-[1px] border-solid border-[#DFCCB7]  text-center max-sm:hidden'>
                            <h1 className='text-[23px] mt-[10px]'>1 600 ккал</h1>
                            <p className='mt-[5px]'>5 блюда</p>
                        </div>
                        <div className='w-[240px] h-[96px] rounded-[30px] border-[1px] border-solid border-[#DFCCB7]  text-center  max-sm:hidden'>
                            <h1 className='text-[23px] mt-[10px]'>2 050 ккал</h1>
                            <p className='mt-[5px]'>6 блюда</p>
                        </div>
                        <div className='w-[240px] h-[96px] rounded-[30px] border-[1px] border-solid border-[#DFCCB7]  text-center  max-sm:hidden'>
                            <h1 className='text-[23px] mt-[10px]'>индивидуально <br /> подобрать</h1>

                        </div>

                    </div>

                    <p className='m-[30px]'>Продолжительность</p>
                    <div className='flex justify-center gap-[40px] mt-[20px] max-sm:gap-[10px]'>
                        <div className='w-[240px] h-[96px] rounded-[30px] border-[1px] border-solid border-[#DFCCB7]  text-center'>
                            <h1 className='text-[23px] mt-[10px]'>Пробные 2 дня</h1>
                            <p className='mt-[5px]'>за 2 900 ₽</p>
                        </div>
                        <div className='w-[240px] h-[96px] rounded-[30px]  border-[1px] border-solid border-[#DFCCB7] text-center '>
                            <h1 className='text-[23px] mt-[10px]'>1 неделя</h1>
                            <p className='mt-[5px]'>1 700 ₽ в день</p>
                        </div>
                        <div className='w-[240px] h-[96px] rounded-[30px]  bg-[#DFCCB7] text-center  max-sm:hidden'>
                            <h1 className='text-[23px] mt-[10px]'>2 неделя</h1>
                            <p className='mt-[5px]'>1 600 ₽ в день</p>
                        </div>
                        <div className='w-[240px] h-[96px] rounded-[30px] border-[1px] border-solid border-[#DFCCB7]  text-center  max-sm:hidden'>
                            <h1 className='text-[23px] mt-[10px]'>3 недели</h1>
                            <p className='mt-[5px]'>1 520 ₽ в день</p>
                        </div>
                        <div className='w-[240px] h-[96px] rounded-[30px] border-[1px] border-solid border-[#DFCCB7]  text-center  max-sm:hidden'>
                            <h1 className='text-[23px] mt-[10px]'>4 недели</h1>
                            <p className='mt-[5px]'>1 450 ₽  в день</p>
                        </div>

                    </div>
                    <div className='flex gap-[40px] m-[40px]'>
                        <h1>Выберите, сколько дней <br /> в неделю вы хотите питаться</h1>
                        <div className='w-[120px] h-[43px] rounded-[20px] border-[1px] border-solid border-[#DFCCB7] flex gap-[15px] '>
                            <button className='w-[35px] h-[35px] bg-[#DFCCB7] rounded-[50%] m-[4px]'>5</button>
                            <h1 className='mt-[8px]'>6</h1>
                            <h1 className='mt-[8px]'>7</h1>
                        </div>
                    </div>
                    <h1 className='text-[23px]  m-[40px]'> Пример дневного рациона</h1>
                    <p className='text-[#A98C64] ml-[40px]'>6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г; углеводы — 120 г</p>
                    <div className='flex gap-[30px] mt-[20px] ml-[40px] '>
                        <div className='w-[170px] h-[40px] rounded-[20px] border-[1px] border-solid border-[#DFCCB7] '>
                            <h1 className='m-[5px_35px]'>понедельник</h1>
                        </div>
                        <div className='w-[120px] h-[40px] rounded-[20px] border-[1px] border-solid border-[#DFCCB7] '>
                            <h1 className='m-[5px_30px]'>вторник</h1>
                        </div>
                        <div className='w-[120px] h-[40px] rounded-[20px] border-[1px] border-solid border-[#DFCCB7]  max-sm:hidden'>
                            <h1 className='m-[5px_30px]'>четверг</h1>
                        </div>
                        <div className='w-[120px] h-[40px] rounded-[20px] bg-[#DFCCB7]  max-sm:hidden'>
                            <h1 className='m-[5px_30px]'>пятница</h1>
                        </div>
                        <div className='w-[120px] h-[40px] rounded-[20px] border-[1px] border-solid border-[#DFCCB7]  max-sm:hidden'>
                            <h1 className='m-[5px_30px]'>суббота</h1>
                        </div>
                        <div className='w-[170px] h-[40px] rounded-[20px] border-[1px] border-solid border-[#DFCCB7]  max-sm:hidden'>
                            <h1 className='m-[5px_35px]'>воскресенье</h1>
                        </div>
                    </div>
                </div>
                <div className='mt-[70px] flex justify-center gap-[40px]'>
                    <div className='w-[265px]'>
                        <img src={image} alt="" />
                        <p className='text-[#DFCCB7]'>Завтрак 230/250 гр</p>
                        <h1 className='text-[18px]'>Утренний боул с перепелиным яйцом, киноа и лососем</h1>
                    </div>
                    <div className='w-[265px]  max-sm:hidden'>
                        <img src={image2} alt="" />
                        <p className='text-[#DFCCB7]'>Обед 320/30 гр</p>
                        <h1 className='text-[18px]'>Боул с куриными фрикадельками в кунжуте, брокколи и миндальным соусом</h1>
                    </div>
                    <div className='w-[265px]  max-sm:hidden'>
                        <img src={image3} alt="" />
                        <p className='text-[#DFCCB7]'>Полдник 230/250 гр</p>
                        <h1 className='text-[18px]'>Кукурузные блинчики с кокосовым припеком и фруктовым тар-таром</h1>
                    </div>
                    <div className='w-[265px]  max-sm:hidden'>
                        <img src={image4} alt="" />
                        <p className='text-[#DFCCB7]'>Ужин 230/250 гр</p>
                        <h1 className='text-[18px]'>Морепродукты в соусе Гарсия со стручковой фасолью</h1>
                    </div>

                </div>
                <div className='w-[100%] h-[200px] bg-[#A2BE95] mt-[70px] rounded-b-[30px] max-sm:h-[500px]'>
                    <div className='flex justify-center gap-[100px] pt-[50px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
                        <div>
                            <button className='w-[338px] h-[43px] rounded-[20px] text-[white] bg-[#4D8F76] '>Заказать 10 дней питания за 16 000 ₽</button>
                            <h1 className='text-[white] ml-[70px] mt-[10px]'>1 250 ккал за 1 600 ₽ в день</h1>
                        </div>
                        <div className='flex gap-[30px]  max-sm:flex-col max-sm:items-center'>
                            <img src={gruop} alt="" />
                            <div className='w-[650px] text-[white] max-sm:w-[350px] max-sm:text-center' >
                                <h1 className='text-[25px]'>Будем доставлять наборы каждый день.</h1>
                                <p>Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала — 2 часа.
                                    Заявки принимаются не позднее, чем за день до предполагаемой доставки.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-[40px] mt-[50px] ml-[40px] max-sm:text-[30px] max-sm:text-center max-sm:ml-[0px] '>О нашем сервисе</p>
            <div className='flex justify-center gap-[50px] mt-[70px]  max-sm:flex-col max-sm:items-center max-sm:text-center'>
                <div className='w-[400px]'>
                    <img src={img} className='max-sm:ml-[170px]'  alt="" />
                    <h1 className='text-[25px] mt-[20px]'>Меню из 90 блюд на две недели без повтора</h1>
                    <p className='mt-[20px]'>Сухой гриль без прямого контакта продукта
                        с жарочной поверхностью, запекание, су-вид</p>
                </div>
                <div className='w-[400px]'>
                    <img src={img2}  className='max-sm:ml-[170px]' alt="" />
                    <h1 className='text-[25px] mt-[20px]'>Мы используем деликатные технологии приготовления блюд</h1>
                    <p className='mt-[20px]'>Сбалансированные блюда, содержащие в себе все необходимые элементы за счёт большого количества компонентов</p>

                </div>
                <div className='w-[400px]'>
                    <img src={img3}  className='max-sm:ml-[170px]' alt="" />
                    <h1 className='text-[25px] mt-[20px]'>Здоровые рецепты</h1>
                    <p className='mt-[20px]'>Без молочки, белой муки, сахара, консервантов, усилителей вкуса и глубокой прожарки. А также мы испольузем сыродавленные масла собственного производства</p>
                </div>
            </div>
            <div className='flex justify-center gap-[50px] mt-[40px]  max-sm:flex-col max-sm:items-center  max-sm:text-center'>
                <div className='w-[400px]'>
                    <img src={img4}  className='max-sm:ml-[170px]' alt="" />
                    <h1 className='text-[25px] mt-[20px]'>Гарантия возврата</h1>
                    <p className='mt-[20px]'>100%-ная гарантия возврата денежных средств за предоплаченные дни, если что-то не понравилось в течение первой недели</p>
                </div>
                <div className='w-[400px]'>
                    <img src={img5}  className='max-sm:ml-[170px]' alt="" />
                    <h1 className='text-[25px] mt-[20px]'>Контроль температуры</h1>
                    <p className='mt-[20px]'>Все курьеры оснащены сумками-холодильниками, что позволяет сохранять температурный режим от 2°C до 4°C от кухни до ваших рук</p>

                </div>
                <div className='w-[400px]'>
                    <img src={img6}  className='max-sm:ml-[170px]' alt="" />
                    <h1 className='text-[25px] mt-[20px]'>Забота о природе</h1>
                    <p className='mt-[20px]'>Все блюда доставляем в экоупаковке из крафтового картона со столовыми приборами  из кукурузного крахмала</p>
                </div>
            </div>
        </>
    )
}

export default Section