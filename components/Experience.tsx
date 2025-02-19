import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'
import Image from 'next/image'

const Experience = () => {
    return (
        <div className='py-20 w-full'>
            <h1 className="heading">
                <span className='text-purple'>ابزارهای مورد علاقه </span>من
            </h1>

            <div className="w-full mt-12 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map(({ id, title, desc, className, thumbnail }) => (
                    <Button key={id}
                        borderRadius='1.75rem'
                        className='flex-1 text-white border-neutral-200 dark:border-slate-700'
                        duration={Math.floor(Math.random() * 10000) + 10000}
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <Image loading="lazy"
                                src={thumbnail} width={64} height={64} alt={thumbnail} className='lg:w-32 md:w-20' />
                            <div className="lg:ms-5">
                                <h1 className='text-start text-xl md:text-2xl font-bold '>
                                    {title}
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>
                                    {desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experience
