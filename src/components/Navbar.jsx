import Link from 'next/link';
import React, { useState } from 'react'
import { IoCallOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="sticky top-0 z-20 transition-all ease-in-out duration-300 bg-white">
            <nav className='m-auto flex max-w-screen-2xl justify-between p-5 md:py-5 md:px-10 bg-white'>
                <div className='flex flex-row'>
                    <ul className='flex items-center '>
                        <li className='mr-2 rounded-full hover:bg-gray-100'>
                            <Link href="/" className='font-bold transition-all ease-in-out duration-300 text-lg  sm:text-xl md:text-2xl'>Better</Link>
                        </li>

                        <li className='mx-5 hidden xl:block p-4 rounded-full hover:bg-gray-100'>
                            <Link href={"/start"}>Start</Link>
                        </li>

                        <li className='mx-5 hidden xl:block p-4 rounded-full hover:bg-gray-100'>
                            <Link href={"/about-us"}>About Us</Link>
                        </li>

                        <li className='mx-5 hidden xl:block p-4 rounded-full hover:bg-gray-100'>
                            <Link href={"/mortgage-calculator"}>Mortgage Calculator</Link>
                        </li>
                    </ul>
                </div>
                <ul className='flex items-center gap-3 lg:gap-6'>
                    <li>
                        <div className='group min-[520px]:relative'>
                            <div className="transition-all ease-in-out duration-300 border rounded-full p-2 md:p-3.5 border-strokeBorder group-hover:bg-gray-100 group-hover:border-backgroundSecondary">
                                <IoCallOutline className='text-xl' />
                            </div>

                            <div className='absolute invisible left-1 min-[520px]:left-auto right-0 pt-2 group-hover:visible'>
                                <div className=' bg-backgroundTertiary px-10 py-7 rounded-base w-80 shadow-md'>
                                    Call us anytime at
                                    <a className="underline hover:text-textHighlight" href="tel:4155238837">415-523-8837</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link className='p-4 rounded-full hover:bg-gray-100' href={""}>Sign In</Link>
                    </li>

                    <li className='p-4 rounded-full hover:bg-gray-100 xl:hidden'>
                        <button>
                            <GiHamburgerMenu className='text-2xl text-black'
                                onClick={() => setOpen(!open)}
                            />
                        </button>
                    </li>
                </ul>
                {
                    open && (
                        <motion.div
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, type: 'tween' }}
                            className="absolute left-0 min-h-screen top-0 bg-white w-full shadow-md xl:hidden"
                        >
                            <div className="flex justify-between items-center p-5">
                                <Link href="/" className='font-bold transition-all ease-in-out duration-300 text-lg  sm:text-xl md:text-2xl'>Better</Link>
                                <button className="p-4 rounded-full hover:bg-gray-100" onClick={() => setOpen(false)}>
                                    <RxCross2 className='text-2xl font-semibold' />
                                </button>
                            </div>

                            <ul className="flex flex-col gap-3 items-start">
                                <li className="mx-5 text-lg rounded-full hover:bg-gray-100">
                                    <Link href="/start">Start</Link>
                                </li>

                                <li className="mx-5 text-lg rounded-full hover:bg-gray-100">
                                    <Link href="/about-us">About Us</Link>
                                </li>

                                <li className="mx-5 text-lg rounded-full hover:bg-gray-100">
                                    <Link href="/mortgage-calculator">Mortgage Calculator</Link>
                                </li>
                            </ul>
                        </motion.div>

                    )
                }
            </nav>
        </div>
    )
}

export default Navbar