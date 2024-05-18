import React, { useState } from 'react';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { Link as ScrollLink } from 'react-scroll';
import { file, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <ScrollLink 
          className="flex items-center gap-2 cursor-pointer" 
          to="hero" 
          smooth={true} 
          duration={500} 
          onClick={() => setActive("")}>
          <img src={file} alt="file" className='w-11 h-11 object-contain'/>
          <p className='text-white text-[18px] font-bold'>
            Anirban Sinha
          </p>
        </ScrollLink>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`cursor-pointer text-[18px] font-medium 
              ${active === link.title ? "text-white" : "text-secondary"} hover:text-white`}
              onClick={() => setActive(link.title)}>
              <ScrollLink 
                to={link.id} 
                smooth={true} 
                duration={500} 
                onClick={() => setActive(link.title)}>
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu"
            className='h-[28px] w-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />
          <div className={`${toggle ? 'flex' : 'hidden'}
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`cursor-pointer text-[16px] font-medium font-poppins 
                  ${active === link.title ? "text-white" : "text-secondary"} hover:text-white`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}>
                  <ScrollLink 
                    to={link.id} 
                    smooth={true} 
                    duration={500} 
                    onClick={() => setActive(link.title)}>
                    {link.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
