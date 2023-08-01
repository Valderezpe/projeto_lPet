import {LuMenu} from 'react-icons/lu';

const buttonHeader = () => {
  return (
    <div className='w-full h-10 bg-loja_ligth text-sm text-white px-4 flex items-center'>
        <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
            <LuMenu className="text-xl" />Todos
        </p>
        <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
            Ofertas do dia
        </p>

        <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
            Atendimento ao Cliente
        </p>
        <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
            Sair
        </p>
    </div>
  )
}

export default buttonHeader