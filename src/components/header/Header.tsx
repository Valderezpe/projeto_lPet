import Image from 'next/image';
import logo from '../../imagem/logo.png';
import cartIcon from '../../imagem/cartIcon.png';

import {BiCaretDown} from "react-icons/bi";
import {HiOutlineSearch} from "react-icons/hi";
import {SlLocationPin} from "react-icons/sl";
import Link from 'next/link';


const Header = () => {
  return (
    <div className='w-full h-20 bg-loja_blue text_lightText sticky top-0 z-40'>
        <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-2 px-1 '>
          
      <Link href={"/"} >
          <Image className="w-28 object-cover mt-1" src={logo} alt="logo.png"/>
      </Link>
      
          <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
            <SlLocationPin/>

            <div>
              <p className='text-white font-bold'> Olá, selecione endereço </p> 
            </div>
          </div>
          <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-text_black border-[3px] border-transparent outline-none
         focus-visible:border-loja_yellow ' type="text" placeholder='Pesquisar' />

            <span className='w-12 h-full bg-loja_ligth  text-text_lightText text-2x1 flex items-center justify-center absolute right-0
            rounded-tr-md rounded-br-md'>
              <HiOutlineSearch/>
            </span>
        </div>

        <div className='text-xs text-gray-200 flex flex-col justify-center px-2 
         border border-transparent hover:border-white cursor-pointer duration-200 h-[70%]'> 
         <p>Login</p>
          <p className='text-white font-bold flex items-center'>
            Minhas Lista
            <span>
            <BiCaretDown/>
           </span>
            </p>
        </div>
            <div className='text-xs text-gray-200 flex flex-col justify-center px-2 
            border border-transparent hover:border-white cursor-pointer duration-200 h-[70%]'>
              <p>Meus</p>
              <p className='text-white font-bold'>&Favoritos</p>
            </div>

            <Link href={"/cart"} className='flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-200 h-[70%] relative'>
              <Image className='w-auto object-cover h-8'
              src={cartIcon}
              alt='CartImg'
              />
              <p className='text-sm text-white font-bold mt-3'>Carrinho</p>
              <span className='absolute text-loja_ligth text-sm top-2 left-[20px] font-semibold'>0</span>
            </Link>
            </div>
        
    </div>
  )
}

export default Header