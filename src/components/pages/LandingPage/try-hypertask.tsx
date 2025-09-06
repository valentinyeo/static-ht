import { Container, ContentWrapper } from '@/components/ui'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TryHypertask = () => {
    return (
                  <Container variant="section">
                    <ContentWrapper gap="lg">
            {/* Desktop and Tablet Version */}
            <div className='hidden w-full sm:block'>
                <div className=' px-4 md:px-6 lg:px-0'>
                    <div className='relative overflow-hidden rounded-2xl lg:rounded-3xl py-8 md:py-12 lg:py-16'>
                        {/* Content */}
                        <div className='relative flex flex-col sm:flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12'>
                            <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8 lg:gap-10 flex-1'>
                                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[86px] font-bold text-white leading-tight'>
                                    Try Hypertask Now
                                </h2>

                                <GetStartedButton />
                            </div>

                            {/* Right side - Logo/Visual */}
                            <div className='flex items-center justify-center flex-shrink-0 lg:ml-8'>
                                <div className='relative'>
                                    <Image
                                        src="/Favicon - Light.png"
                                        className='w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto object-contain'
                                        alt="Hypertask Logo"
                                        width={600}
                                        height={400}
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Version */}
            <div className='block sm:hidden'>
                <div className='max-w-sm mx-auto'>
                    <div className='relative overflow-hidden rounded-2xl text-center'>
                     
                        {/* Content */}
                        <div className='relative flex flex-col items-center gap-2'>
                            {/* Icon */}
                            <div className='flex justify-center'>
                                <div className='rounded-xl flex items-center justify-center shadow-lg'>
                                    <Image
                                        src="/Favicon - Light.png"
                                        className=' object-contain'
                                        alt="Hypertask Logo"
                                        width={180}
                                        height={210}
                                    />
                                </div>
                            </div>

                            <h2 className='text-4xl font-bold text-white mb-4 leading-tight'>
                                Try Hypertask Now
                            </h2>

                            <GetStartedButton />
                        </div>
                    </div>
                </div>
            </div>
            </ContentWrapper>
        </Container>
    )
}


const GetStartedButton = () => {
    return (
        <Link
            href={APP_LOGIN_URL}
            className='inline-flex w-fit items-center gap-4  gradient-button_VWO bg-white text-black px-6 md:px-6  py-2 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg'
        >
            <div className='w-6 md:w-8 h-6 md:h-8  bg-black rounded-md flex items-center justify-center'>
                <Image
                    src="/Favicon - Light.png"
                    className='w-4 md:w-5 h-4 md:h-5 object-contain'
                    alt="Hypertask Logo"
                    width={20}
                    height={20}
                />
            </div>
            <span>Get Started</span>
        </Link>
    )
}

export default TryHypertask