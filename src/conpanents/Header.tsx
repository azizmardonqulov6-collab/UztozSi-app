import navbarCoin from '/images/navbar/coin.png'
import ring from '/images/navbar/ring.png'
import Logo from './Logo'
import { useState, useEffect } from 'react'
import { Link , useLocation } from 'react-router-dom'

const siliderData = [
  {
    id: 1,
    name: 'Uy',
    code: 'home',
    img: 'images/navbar/home-blue.png',
    imgActive: 'images/navbar/home-white.png'
  },
  {
    id: 2,
    name: 'Darslar',
    code: 'edu',
    img: 'images/navbar/edu-blue.png',
    imgActive: 'images/navbar/edu-white.png'
  },
  {
    id: 3,
    name: 'UztozSi',
    code: 'voice',
    img: 'images/navbar/voice-blue.png',
    imgActive: 'images/navbar/voice-white.png'
  },
  {
    id: 4,
    name: `Doko'n`,
    code: 'shop',
    img: 'images/navbar/shop-blue.png',
    imgActive: 'images/navbar/shop-white.png'
  },
  {
    id: 5,
    name: 'Profil',
    code: 'user',
    img: 'images/navbar/user-blue.png',
    imgActive: 'images/navbar/user-white.png'
  },

]


export function HeaderOne() {
  return (
    <header className='w-full h-[50px]  border-1 border-transparent border-b-[#14213D]  boder flex justify-between items-center py-2 px-2'>
      <a href="/" className="logo w-[90px]">
        <Logo />
      </a>
      <ul className='flex gap-3 w-fit'>
        <li className=''>
          <span className=' flex gap-2 justify-center items-center  px-3 py-1 bg-[#14213D] text-[#FCA311] rounded-2xl text-[14px]'>
            3 000 <img className='w-[25px]' src={navbarCoin} alt={navbarCoin} />
          </span>
        </li>
        <li className='flex justify-center items-center'>
          <span className=''>
            <img className='w-[20px] h-fit object-contain' src={ring} alt={ring} />
          </span>
        </li>
      </ul>
    </header>
  )
}
export function Silider() {
  const location = useLocation().pathname;
  const [active, setActive] = useState('home');
  useEffect(() => {
    setActive(location === "/" ? 'home' : location)
  }, [useLocation])
  return (
    <div className="silider w-full h-fit  fixed left-0 bottom-3  px-[10px] ">
      <div className="w-full px-[14px] py-[8px] bg-white  rounded-[20px] flex justify-between  border-2 border-[#121239]">
        {
          siliderData.map(pro => {
            return <Link to={pro.code === "home" ? "/" : pro.code} onClick={() => setActive(pro.code)} className='flex flex-col items-center gap-2 relative'>
              <div className={`absolute flex items-center justify-center -z-1 ${active === pro.code ? "animation-silider" : " -top-10 hidden"}`}>
                {/* -top-14 bo'lishi kerak animatsiya hisobidan 10 qoyilgan */}
                <div className="relative w-fit h-fit">
                <div className="bg-[#002d44] text-white px-3 py-2 rounded-xl text-sm font-medium">
                  {pro.name}
                </div>
                <div className="absolute left-1/2 -bottom-2 -translate-x-1/2  w-0 h-0  border-l-[12px] border-l-transparent  border-r-[12px] border-r-transparent border-t-[12px] border-t-[#002d44]">
                </div>

              </div>
              </div>
              <span className={`w-[50px] h-[50px] rounded-full border-2 border-[#003049] rounded-full flex justify-center items-center ${active === pro.code ? "bg-[#003049]" : "bg-transparent"}`}>
                <img src={`${active === pro.code ? pro.imgActive : pro.img}`} alt={pro.img} />
              </span>
            </Link>
          })
        }
      </div>
    </div>
  )
}