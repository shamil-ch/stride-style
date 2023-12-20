import {headerLogo} from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

const Nav = () => {
    const [showNavLinks, setShowNavLinks] = useState()

  return (
   <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
       
        <a href="/">
        <img 
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            
        />
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray"
                    >
                        {item.label}

                    </a>
                </li>
            ))}
        </ul>

        <div className='hidden max-lg:block'>
            <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25} 
            onClick={() => {
                setShowNavLinks(!showNavLinks)
            }}
            />
            {showNavLinks && (
                <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                    {navLinks.map((item) => (
                        <li key={item.label}
                        className="border-b border-gray-400 my-8 uppercase"
                        >
                            <a 
                                href={item.href}
                            >
                              {item.label}  
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </nav>
   </header>
  )
}

export default Nav