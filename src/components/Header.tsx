import { MagnifyingGlass, MapPin } from 'phosphor-react'
import headerImageLeft from '../assets/ilustra-01.svg'
import headerImageRight from '../assets/ilustra-02.svg'

export function Header() {
    return (
        <header className="bg-gray-100 w-full h-[532px] relative flex items-center justify-center">
            <img className='absolute top-0 left-0' src={headerImageLeft} alt="" />
            <img className='absolute bottom-0 right-0' src={headerImageRight} alt="" />

            <div className='flex flex-col items-center justify-center w-[993px] relative z-10 mx-4'>
                <span
                    className='text-red-500 text-sm tracking-widest uppercase block mb-[18px] font-semibold'
                >
                    Find your block
                </span>

                <h1
                    className='font-bold text-5xl text-center mb-10'
                >
                    Encontre os <span className="text-violet-500">melhores blocos</span> <br /> de carnaval de 2023
                </h1>

                <form className='bg-white border border-gray-200 items-center w-full p-10 gap-6 grid grid-rows-3 sm:grid-cols-5 sm:grid-rows-1'>
                    <div className='sm:col-span-2 relative'>
                        <MagnifyingGlass 
                            size={24}
                            className='text-red-500 absolute top-1/2 -translate-y-1/2 left-3'
                        />
                        <input
                            className='bg-gray-100 py-3 pr-2 pl-12 w-full placeholder:text-gray-700 h-12 focus:outline-none focus:ring focus:ring-violet-500/50'
                            placeholder='Pesquise por nome'
                            type="text"
                        />
                    </div>

                    <div className='sm:col-span-2 relative'>
                        <MapPin 
                            weight='light'
                            size={24}
                            className='text-red-500 absolute top-1/2 -translate-y-1/2 left-3'
                        />
                        <input
                            className='bg-gray-100 py-3 pr-2 pl-12 w-full placeholder:text-gray-700 h-12 focus:outline-none focus:ring focus:ring-violet-500/50'
                            placeholder='Selecione uma cidade'
                            type='text'
                        />
                    </div>

                    <button 
                        className='self-stretch transition-colors bg-violet-500 hover:bg-violet-500/90 text-white font-bold text-sm rounded uppercase px-2'
                        type='submit'
                    >
                        Buscar agora
                    </button>
                </form>

            </div>
        </header>
    )
}