import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import Image from 'next/image'
import visalMission from "../../public/vishal-mission.jpg"
import image1 from "../../public/logoimages/logo_transparent_1.png"
import image2 from "../../public/logoimages/logo_transparent_2.png"
import image3 from "../../public/logoimages/logo_transparent_3.png"
import image4 from "../../public/logoimages/logo_transparent_4.png"
import image5 from "../../public/logoimages/logo_transparent_5.png"
import image6 from "../../public/logoimages/logo_transparent_6.png"
import image7 from "../../public/logoimages/logo_transparent_7.png"

const timelineData = [
    {
        year: '2014',
        contents: [
            "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all."
        ]
    },
    {
        year: '2015',
        contents: [
            "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)."
        ]
    },
    {
        year: '2016',
        contents: [
            "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors."
        ]
    },
    {
        year: '2018',
        contents: [
            "Better Mortgage expands its product line and adds new digital tools for homebuyers.",
            "Launches new customer dashboard to simplify the home financing process.",
            "Achieves record loan volume, supporting tens of thousands of customers."
        ]
    }
];

const about = () => {
    const [videoStart, setVideoStart] = useState(false);
    return (
        <>
            <Navbar />
            <div className='bg-amber-50'>
                <section className="m-auto flex h-screen max-w-screen-xl items-center md:px-20">
                    <div>
                        <h1 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-3xl md:tracking-tight text-center text-[#017848]">Our mission</h1>
                        <h2 className="font-bold text-[#292B29] leading-heading m-0 p-0 w-auto text-2xl md:text-4xl tracking-tight md:tracking-tighter mt-8 text-center">We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</h2>
                    </div>
                </section>

                <section className="m-auto flex max-w-screen-xl flex-col-reverse gap-x-32 gap-y-6 px-20 pb-32 md:flex-row md:px-20">
                    <div className="w-full md:w-1/2">
                        <h2 className="font-bold text-[#292B29] leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                            The status quo is broken
                        </h2>
                        <p className="font-normal m-0 p-0 text-left text-[#565D5A] text-base mt-6">The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO,<a href="/about-us">Vishal Garg</a>, set out to change that.</p>
                        <a class="rounded-md leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset]  text-white bg-[#017848] hover:bg-[#004733] focus:bg-[#004733] px-5 py-3   w-auto inline-flex items-center justify-center mt-8" href="/about-us">Read Vishal’s story</a>

                    </div>
                    <div class="relative w-full md:w-1/2">
                        <button className='w-full h-full'
                            onClick={() => setVideoStart(true)}
                        >
                            <Image alt="" loading="lazy" width="1080" height="800" decoding="async" data-nimg="1" src={visalMission} />
                            {/* <> */}

                        </button>
                    </div>
                </section>
                {
                    videoStart && (
                        <div className='fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center  bg-opacity-60'
                            onClick={() => setVideoStart(false)}
                        >
                            <div className='relative h-[80vh] w-[80vw]'
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className='absolute right-0 top-0 z-50 m-4 rounded-full bg-white p-2 shadow-lg' onClick={() => setVideoStart(false)}>X</button>
                                <iframe className='h-full w-full' src="https://www.youtube.com/embed/1KjYlLBM9j4?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    )
                }

                <section className="bg-[#017848] px-20 py-20">
                    <div className="m-auto max-w-screen-lg">
                        <h2 className="font-bold leading-heading m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter text-white">
                            How we’re changing things
                        </h2>
                        <p className="font-normal m-0 p-0 text-left text-white text-base mt-8">Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</p><p className="font-normal leading-body m-0 p-0 text-left text-white text-base mt-4">That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
                    </div>
                </section>

                <section className='px-20 py-28'>
                    <h2 class="font-bold text-[#292B29] m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight text-center">
                        Backed by
                    </h2>
                    <div className='m-auto mt-20 flex max-w-screen-2xl flex-wrap justify-around'>
                        <a href="https://group.softbank/en/philosophy" target="_blank">
                            <Image alt="Softbank" loading="lazy" width="150" height="50" className='m-4 h-[150px]' src={image1} />
                        </a>
                        <a href="https://group.softbank/en/philosophy" target="_blank">
                            <Image alt="Softbank" loading="lazy" width="150" height="50" className='m-4 h-[150px]' src={image2} />
                        </a>
                        <a href="https://group.softbank/en/philosophy" target="_blank">
                            <Image alt="Softbank" loading="lazy" width="150" height="50" className='m-4 h-[150px]' src={image3} />
                        </a>
                        <a href="https://group.softbank/en/philosophy" target="_blank">
                            <Image alt="Softbank" loading="lazy" width="150" height="50" className='m-4 h-[150px]' src={image4} />
                        </a>
                        <a href="https://group.softbank/en/philosophy" target="_blank">
                            <Image alt="Softbank" loading="lazy" width="150" height="50" className='m-4 h-[150px]' src={image5} />
                        </a>
                        <a href="https://group.softbank/en/philosophy" target="_blank">
                            <Image alt="Softbank" loading="lazy" width="150" height="50" className='m-4 h-[150px]' src={image6} />
                        </a>
                        <a href="https://group.softbank/en/philosophy" target="_blank">
                            <Image alt="Softbank" loading="lazy" width="150" height="50" className='m-4 h-[150px]' src={image7} />
                        </a>
                    </div>
                </section>

            </div>
        </>
    )
}

export default about