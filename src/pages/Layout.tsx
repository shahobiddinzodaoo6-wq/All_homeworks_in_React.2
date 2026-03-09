import React from 'react'
import { Link, Outlet } from 'react-router'
import logo from '../assets/Group 161.png'
import pismo from '../assets/Group 71.png'
import imgFooter from '../assets/Ellipse 8.png'
import imgFooter2 from '../assets/Group 73.png'
import imgFooter3 from '../assets/Group 74.png'
import menu from '../assets/Group 82.png'
import { Button } from 'antd'
import { useTheme } from '../components/ThemeContext'
import light from '../assets/light.svg'


const Layout = () => {
    const { toggleTheme } = useTheme();

    return (
        <>
            <header>
                <div className='w-[100%] h-[90px] bg-[#A98C64] text-[white]'>
                    <div className='flex justify-center gap-[180px] pt-[25px]'>
                        <h1 className='text-[25px]'>Скидка 20% на первый заказ</h1>
                        <h1 className='text-[25px] border-b-[3px] border-b-solid border-b-[white] max-sm:hidden'>Заказать</h1>
                    </div>
                </div>
                <div className='mt-[70px] flex justify-center gap-[130px]  max-sm:mt-[40px] max-sm:gap-[10px]'>
                    <img className='w-[140px] h-[44px] max-sm:mr-[250px]' src={logo} alt="" />
                    <img src={menu} className='hidden max-sm:block' alt="" />
                    <div className='flex gap-[30px] text-[#493E3E] mt-[10px] max-sm:hidden'>
                        <p>Подбор рациона</p>
                        <Link to={"/ProgrammaRitanie"}>
                            <p>Программы питания</p>
                        </Link>
                        <p>О нас</p>
                        <Link to={"/"}>
                            <p>Доставка</p>
                        </Link>
                        <p>Акции</p>
                        <p>FAQ</p>
                        <p>Отзывы</p>
                    </div>
                    <div className='max-sm:hidden'>
                        <p className='text-[#4D8F76] ml-[60px]'>Перезвоните мне</p>
                        <h1 className='text-[25px] text-[#493E3E]'>+7 988 500-1-700</h1>
                        <p className='text-[grey] ml-[80px]'>c 09:00 до 21:00</p>
                    </div>
                    <Button    onClick={toggleTheme} type="primary" shape="circle">
                        <img src={light} alt="" />
                    </Button>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className='w-[95%] h-[200px] rounded-[40px] bg-[#B89683]  m-auto mt-[100px] max-sm:h-[400px]'>
                    <div className='pt-[40px] flex justify-around  max-sm:flex-col max-sm:items-center '>
                        <div>
                            <h1 className='text-[40px] text-[white] max-sm:text-[30px] ' >Будьте всегда в курсе!</h1>
                            <div className='flex gap-[10px] mt-[20px]  max-sm:flex-col max-sm:items-center'>
                                <img src={pismo} alt="" />
                                <p className='text-[white] max-sm:text-center'>Подпишитесь на рассылку и будьте всегда в <br className='hidden max-sm:block' /> курсе новинок, акций и новостей!</p>
                            </div>
                        </div>
                        <div className='flex gap-[20px] mt-[30px]  max-sm:flex-col max-sm:items-center max-sm:pt-[30px]'>
                            <input type="text" className='w-[330px] h-[43px] rounded-[30px] bg-[white] outline-none pl-[20px] ' placeholder='Укажите вашу почту' />
                            <button className='w-[140px] h-[43px] rounded-[30px] bg-[#4D8F76] text-[white] max-sm:w-[330px]'>Подписаться</button>
                        </div>
                    </div>
                </div>
                <div className='mt-[100px] flex justify-around gap-[60px] mb-[70px]  max-sm:flex-col max-sm:items-center'>
                    <div className='max-sm:w-[400px] max-sm:text-center'>
                        <div className='flex gap-[120px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
                            <div>
                                <h1 className='text-[30px]'>+7 988 500-1-700</h1>
                                <p className='text-[grey]'>Ежедневно c 09:00 до 21:00</p>
                            </div>
                            <h1 className='text-[25px]'>hello@pora-poest.com</h1>
                        </div>
                        <p className='text-[grey] mt-[40px] text-[13px]' >ООО «ПораПоесть», г. Краснодар, ул. Кубанская Набережная улица, дом 5, офис 4</p>
                        <div className='mt-[20px] text-[grey] text-[13px]'>
                            <p >© 2021 ПораПоесть — сервис доставки прогрессивного питания. </p>
                            <p className='mt-[10px]'>Фотографии блюд на сайте являются вариантом сервировки блюда. Внешний вид блюда может отличаться от фотографии на сайте. </p>
                            <p>Указывая электронную почту и номер телефона на сайте, вы соглашаетесь с условиями Публичной оферты и Политикой конфедициальности</p>
                        </div>
                    </div>
                    <div >
                        <div className='flex gap-[20px] max-sm:ml-[80px]'>
                            <img src={imgFooter} alt="" />
                            <img src={imgFooter} alt="" />
                            <img src={imgFooter2} alt="" />
                        </div>
                        <img className='mt-[120px] max-sm:mt-[40px]' src={imgFooter3} alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout