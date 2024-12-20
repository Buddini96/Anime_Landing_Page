import { navLinks } from '@/app/constant/Constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav:boolean;
  closeNav:()=>void;
}

const MobileNav = ({closeNav, showNav}:Props) => {

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1000] bg-black bg-opacity-70 w-full h-screen`}>
        {/* Nav Links */}
        <div className={`fixed ${navOpen} flex flex-col justify-center h-full w-[80%] sm:w-[60%] space-y-6 z-[1010] bg-[url('/images/background.png')] bg-cover bg-center text-black`}>
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav_links text-black text-[20px] ml-12 border-b-[1.5px] border-[#E93306] sm:text-[20px]">
                {link.label}
              </p>
            </Link>
          ))}
          {/* Close icon */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w- sm:h-8 w-6 h-6'/>
        </div>
        
      </div>
    </div>
  );
};

export default MobileNav;
