import { useState, useEffect } from 'react'
import { MapPin } from 'phosphor-react'

import { Block as BlockData } from '../mock/blocks'

interface BlockProps {
    data: BlockData
}

export function Block({data}: BlockProps) {
    const [banner, setBanner] = useState('')

    useEffect(() => {

        const loadImage  = async () => {
            const banner = await import(`../assets/blocks/${data.banner}`)
            setBanner(banner.default)
        }

        loadImage()
    }, [data])

    return (
        <div className='bg-white border border-gray-200 rounded-lg isolate overflow-hidden transition-all shadow-sm hover:shadow-lg'>
            <img 
                src={banner} 
                alt="Block" 
            />

            <div className='p-4'>
                <strong className='block text-lg font-bold mb-4'>
                    {data.name}
                </strong>

                <p className='block text-gray-900/75 mb-4'>
                    {data.about}
                </p>

                <span className='flex items-center gap-2'>
                    <MapPin 
                        size={20}
                        weight='light'
                        className='text-red-500'
                    />
                    <span className='text-gray-900/75'>{data.location}</span>
                </span>
            </div>
        </div>
    )
}