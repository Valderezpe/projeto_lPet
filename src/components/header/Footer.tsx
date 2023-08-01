import React from 'react'
import logo from '../../imagem/logo.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full h-20 bg-loja_ligth text-gray-300 flex items-center justify-center gap-3' >
        <Image className='w-24' src={logo} alt='logo'/>
        <p className='text-sm -mt-4'>
            Todos os direitos reservados {" "}
        </p>
    </div>
  )
}

export default Footer