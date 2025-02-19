"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infiniteMovingCards'
import { companies, testimonials } from '@/data'
import Image from 'next/image'

const Clients = () => {
    return (
        <section id='testimonials' className='py-20'>
            <h1 className="heading">
                رضایت و محبت شما
                <span className="text-purple"> تماشایی است.</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <div className="h-[50vh] md:h-[39rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction='right'
                        speed='fast'
                    />
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 
                    ">
                        {companies.map(({ id, img, name, nameImg }) => (
                            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                                <Image src={img} alt={name}
                                    width={50}
                                    height={20}
                                    className='md:w-10 '
                                />
                                <Image src={nameImg} alt={name}
                                    width={80}
                                    height={80}
                                    className='md:w-24 '
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Clients
