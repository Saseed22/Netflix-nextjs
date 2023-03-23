import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {BsSearch,BsBell} from 'react-icons/bs'

const Header = () => {
  const [isScroll, setIsScroll] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])
  return (
      <header className={`${isScroll && 'bg-[#141414]'}`}>
          <div className='flex items-center space-x-2 md:space-x-10'>
          <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
              />
              
              <ul className='hidden md:flex space-x-4'>
                <li className='headerLink'>Home</li>
                <li className='headerLink'>TV Show</li>
                <li className='headerLink'>Movies</li>
                <li className='headerLink'>New & Popular</li>
                <li className='headerLink'>My List</li>
              </ul>
          </div>
      <div className='flex items-center space-x-4 text-sm font-light'>
        <BsSearch />
        <p className='hidden lg:inline'>Kids</p>
        <BsBell />
        <Link href='/login'>
        <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
          </div>
    </header>
  )
}

export default Header