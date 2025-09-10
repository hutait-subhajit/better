
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineDollarCircle } from 'react-icons/ai';
import { BiMoneyWithdraw } from 'react-icons/bi';
import Link from 'next/link';

function start() {
    return (
        <div className={` font-open-sans
 min-h-screen bg-gray-50 flex flex-col items-center p-6`}>

            {/* Header */}
            <div className="w-full flex justify-between items-center max-w-3xl">
                <Link href="/">
                    <h1 className="text-2xl font-bold text-green-600">Better<br />Mortgage</h1>
                </Link>
                <div className="flex items-center text-green-600">
                    <FaPhoneAlt className="mr-2" />
                    <span className="font-medium hidden text-[#292B29] xl:block">Need help? Call 415-523-8837</span>
                </div>
            </div>

            {/* Step Indicator */}
            <div className="w-full max-w-3xl my-8">
                <div className="relative border-t-4 border-gray-300">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 p-3 rounded-full shadow-lg">
                        <AiOutlineHome className="text-white text-xl" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <h2 className="text-3xl font-bold text-center">Hi, I'm Betsy!</h2>
            <p className="text-xl text-center mt-2 mb-6">What can I help you with?</p>

            <div className="flex flex-col gap-4 max-w-md w-full">
                <button className="flex items-center gap-3 p-4 border rounded-lg bg-white hover:shadow-md transition">
                    <AiOutlineHome className="text-green-600 text-2xl" />
                    <span className="text-lg font-medium">Buying a home</span>
                </button>

                <button className="flex items-center gap-3 p-4 border rounded-lg bg-white hover:shadow-md transition">
                    <AiOutlineDollarCircle className="text-green-600 text-2xl" />
                    <span className="text-lg font-medium">Refinancing my mortgage</span>
                </button>

                <button className="flex items-center gap-3 p-4 border rounded-lg bg-white hover:shadow-md transition">
                    <BiMoneyWithdraw className="text-green-600 text-2xl" />
                    <span className="text-lg font-medium">Get cash from my home</span>
                </button>
            </div>

            {/* Stats */}
            <div className="flex justify-around mt-10 max-w-3xl w-full text-center">
                <div>
                    <p className="text-3xl font-bold">$100B</p>
                    <p className="text-gray-600">home loans funded entirely online</p>
                </div>

                <div>
                    <p className="text-3xl font-bold">400K</p>
                    <p className="text-gray-600">Customers who chose a Better Mortgage</p>
                </div>
            </div>

            {/* Unlock Info */}
            <div className="mt-10 bg-green-100 p-6 rounded-lg max-w-2xl text-center">
                <p className="mb-4">After a few questions, you'll unlock:</p>
                <ul className="list-disc list-inside text-left">
                    <li>Custom mortgage rates</li>
                    <li>Exclusive offers</li>
                    <li>A personalized dashboard</li>
                </ul>
            </div>
        </div>
    );
}

export default start;
