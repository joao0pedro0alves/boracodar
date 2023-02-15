import { MapPin } from 'phosphor-react'
import blockBanner from '../assets/block-banner.png'

export function Block() {
    return (
        <div className='bg-white border border-gray-200 rounded-lg isolate overflow-hidden transition-all shadow-sm hover:shadow-lg'>
            <img 
                src={blockBanner} 
                alt="Block" 
            />

            <div className='p-4'>
                <strong className='block text-lg font-bold mb-4'>
                    O Python do vovô não sobe mais
                </strong>

                <p className='block text-gray-900/75 mb-4'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>

                <span className='flex items-center gap-2'>
                    <MapPin 
                        size={20}
                        weight='light'
                        className='text-red-500'
                    />
                    <span className='text-gray-900/75'>São Paulo - SP</span>
                </span>
            </div>
        </div>
    )
}