
import Navbar from '@/components/Navbar'
import { m } from 'framer-motion';
import React, { use, useEffect, useState } from 'react'

const Index = () => {
    const [loanAmount, setLoanAmount] = useState(571000);
    const [downPayment, setDownPayment] = useState();
    const [downPaymentPercentage, setDownPaymentPercentage] = useState(20);
    const [loanLength, setLoanLength] = useState(30)
    const [interestRate, setInterestRate] = useState(6.5)
    const [zipCode, setZipCode] = useState('700014');

    const [monthlyPayment, setMonthlyPayment] = useState(null);


    const handleHomeAmountChange = (e) => {
        const value = e.target.value.replace(/,/g, '');
        if (/^\d*$/.test(value)) {
            setLoanAmount(Number(value));
        }
    };

    const handleDownPaymentChange = (e) => {
        const value = e.target.value.replace(/,/g, '');
        if (value <= loanAmount) {
            if (/^\d*$/.test(value)) {
                setDownPayment(Number(value));
            }
        }
    };

    const handleDownPaymentPercentageChange = (e) => {
        const value = e.target.value.replace(/,/g, '');
        if (/^\d*$/.test(value)) {
            setDownPaymentPercentage(Number(value));
            const percent = Number(value);
            const newDownPayment = Math.round((percent / 100) * loanAmount);
            setDownPayment(newDownPayment);
        }
    };

    const handleInterestRateChange = (e) => {
        const value = e.target.value;

        // Allow empty string (for backspace), or valid decimal number with max 2 decimals
        if (value <= 15) {
            if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
                setInterestRate(value);
            }
        }
    };

    const handleZipCodeChange = (e) => {
        const value = e.target.value;

        // Allow empty string (for backspace) or up to 6 digits only
        if (value === '' || /^\d{0,6}$/.test(value)) {
            setZipCode(value);
        }
    };

    useEffect(() => {
        setDownPayment(Math.round((downPaymentPercentage / 100) * loanAmount));
    }, [loanAmount, downPaymentPercentage])

    useEffect(() => {
        if (downPayment && loanAmount) {
            const principal = loanAmount - downPayment;
            const monthlyInterestRate = (interestRate / 100) / 12;
            const numberOfPayments = loanLength * 12;
            const monthlyPayment = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
            setMonthlyPayment(Math.round(monthlyPayment));
        }
    }, [downPayment, loanAmount, interestRate, loanLength]);

    return (
        <>
            <Navbar />
            <section className='bg-[#F0F7F1] py-16'>
                <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
                    {/* Header */}
                    <div className='flex flex-col justify-between gap-x-lg'>
                        <h1 className='font-bold text-[#292B29] leading-heading m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter max-w-[500px] text-balance'>
                            Estimate your monthly mortgage payments
                        </h1>
                    </div>

                    {/* Form Box */}
                    <div className='bg-white rounded-base lg:rounded-lg border border-strokeDivider px-lg py-5 lg:p-5 my-5 lg:my-[56px] flex flex-col lg:flex-row lg:justify-between gap-x-5 box-border'>
                        <div className='grid grid-cols-1 lg:grid-cols-[repeat(7,1fr)] lg:grid-flow-row-dense gap-4'>

                            {/* Home Price */}
                            <div className="w-full lg:col-span-3 relative group border border-gray-300 
                                hover:border-green-600 focus-within:border-green-600 
                                hover:shadow-[0_0_0_4px_#017848_inset] focus-within:shadow-[0_0_0_4px_#017848_inset] 
                                rounded-[8px] transition-all duration-200 box-border px-3 pt-6 pb-2">

                                <label htmlFor="homePrice" className="absolute top-[2px] left-[14px] text-sm font-medium text-gray-700 px-1 pointer-events-none">
                                    Home Price
                                </label>
                                <div className='w-full flex gap-1 items-end'>
                                    <div className='text-gray-700 w-3 text-end'>$</div>
                                    <input
                                        id="homePrice"
                                        type="text"
                                        className="w-full border-none outline-none text-base bg-transparent"
                                        placeholder="Enter value"
                                        value={loanAmount}
                                        onChange={handleHomeAmountChange}
                                    />
                                </div>
                            </div>

                            {/* Down Payment + % */}
                            <div className='flex flex-1 lg:col-span-4'>
                                {/* Down Payment (value) */}
                                <div className="w-9/12 relative group border border-gray-300 
                                    hover:border-green-600 focus-within:border-green-600 
                                    hover:shadow-[0_0_0_4px_#017848_inset] focus-within:shadow-[0_0_0_4px_#017848_inset] 
                                    rounded-l-[8px] transition-all duration-200 box-border px-3 pt-6 pb-2">

                                    <label htmlFor="downPayment" className="absolute top-[2px] left-[14px] text-sm font-medium text-gray-700 px-1 pointer-events-none">
                                        Down Payment
                                    </label>
                                    <div className='w-full flex gap-1 items-end'>
                                        <div className='text-gray-700 w-3 text-end'>$</div>
                                        <input
                                            id="downPayment"
                                            type="text"
                                            className="w-full border-none outline-none text-base bg-transparent"
                                            placeholder="Enter value"
                                            value={downPayment}
                                            onChange={handleDownPaymentChange}
                                        />
                                    </div>
                                </div>

                                {/* Down Payment (%) */}
                                <div className="w-3/12 relative group border border-gray-300 
                                    hover:border-green-600 focus-within:border-green-600 
                                    hover:shadow-[0_0_0_4px_#017848_inset] focus-within:shadow-[0_0_0_4px_#017848_inset] 
                                    rounded-r-[8px] transition-all duration-200 box-border px-3 pt-6 pb-2">

                                    {/* <label htmlFor="downPaymentPercentage" className="absolute top-[2px] left-[14px] text-sm font-medium text-gray-700 px-1 bg-white pointer-events-none">
                                        %
                                    </label> */}
                                    <div className='w-full flex gap-1 items-center pt-1'>
                                        <input
                                            id="downPaymentPercentage"
                                            type="text"
                                            className="w-full border-none outline-none text-base bg-transparent"
                                            placeholder="%"
                                            value={downPaymentPercentage}
                                            onChange={handleDownPaymentPercentageChange}
                                        />
                                        <div className='text-gray-700 w-12'>%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:col-span-3 relative group border border-gray-300 
                                     hover:border-green-600 focus-within:border-green-600 
                                     hover:shadow-[0_0_0_4px_#017848_inset] focus-within:shadow-[0_0_0_4px_#017848_inset] 
                                     rounded-[8px] transition-all duration-200 box-border px-3 pt-6 pb-2">

                                {/* Label */}
                                <label htmlFor="loanlength" className="absolute top-[2px] left-[14px] text-sm font-medium text-gray-700 px-1 pointer-events-none z-10">
                                    Length of Loan
                                </label>

                                {/* Dropdown */}
                                <div className='w-full flex gap-1 items-end'>
                                    {/* <div className='text-gray-700 w-3 text-end'>$</div> */}
                                    <select
                                        id="loanlength"
                                        className="w-full border-none outline-none text-base bg-transparent appearance pr-6"
                                        value={loanLength}
                                        onChange={(e) => setLoanLength(e.target.value)}
                                    >
                                        <option value={30}>30 years</option>
                                        <option value={20}>20 years</option>
                                        <option value={15}>15 years</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-full lg:col-span-2 relative group border border-gray-300 
                                hover:border-green-600 focus-within:border-green-600 
                                hover:shadow-[0_0_0_4px_#017848_inset] focus-within:shadow-[0_0_0_4px_#017848_inset] 
                                rounded-[8px] transition-all duration-200 box-border px-3 pt-6 pb-2">

                                <label htmlFor="homePrice" className="absolute top-[2px] left-[14px] text-sm font-medium text-gray-700 px-1 pointer-events-none">
                                    Interest Rate
                                </label>
                                <div className='w-full flex gap-1 items-end'>

                                    <input
                                        id="homePrice"
                                        type="text"
                                        className="w-full border-none outline-none text-base bg-transparent"
                                        placeholder="Enter value"
                                        value={interestRate}
                                        onChange={handleInterestRateChange}
                                    />
                                    <div className='text-gray-700 w-3 text-end'>%</div>
                                </div>
                            </div>

                            <div className="w-full lg:col-span-2 relative group border border-gray-300 
                                hover:border-green-600 focus-within:border-green-600 
                                hover:shadow-[0_0_0_4px_#017848_inset] focus-within:shadow-[0_0_0_4px_#017848_inset] 
                                rounded-[8px] transition-all duration-200 box-border px-3 pt-6 pb-2">

                                <label htmlFor="homePrice" className="absolute top-[2px] left-[14px] text-sm font-medium text-gray-700 px-1 pointer-events-none">
                                    Zip Code
                                </label>
                                <div className='w-full flex gap-1 items-end'>
                                    <input
                                        id="homePrice"
                                        type="text"
                                        className="w-full border-none outline-none text-base bg-transparent"
                                        placeholder="Enter value"
                                        value={zipCode}
                                        onChange={handleZipCodeChange}
                                    />
                                </div>
                            </div>

                            <div className='w-full lg:col-span-7'>
                                <input type="range" min={50000} max={3000000} value={loanAmount} step={100} className="w-full accent-gray-600" onChange={(e) => setLoanAmount(Number(e.target.value))} />
                            </div>

                        </div>

                        <div className="w-full lg:max-w-[225px]">
                            <p className="leading-body m-0 p-0 text-left text-textPrimary font-bold text-base mb-5">Monthly payment</p>
                            <div data-qa="monthly-payment" className="text-2xl font-bold text-textPrimary ">
                                ${monthlyPayment}/mo
                            </div>
                            <a className="w-full inline-block mt-6 text-center text-white bg-[#017848] hover:bg-[#27674d] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" href="/preapproval/nxt-purchase">Get pre-approved</a>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-x-[250px] md:gap-x-[100px]'>
                        <h4 className='font-bold text-[#292B29] leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg'>
                            Monthly payment breakdown
                        </h4>
                        <p className="leading-body m-0 p-0 text-left mt-base overflow-hidden text-2xl font-bold text-[#292B29]">${monthlyPayment}/mo</p>

                        <div className='mt-8'>
                            {
                                monthlyPayment && (
                                    <div className='w-full text-center h-16 bg-[#017848] text-white font-bold text-base flex items-center justify-center rounded-3xl'>
                                        100%
                                    </div>
                                )
                            }
                        </div>

                        <div>
                            <div className='flex justify-between'>
                                <div className='flex gap-x-1.5 items-center'>
                                    <div className='w-1 h-4 rounded-full bg-[#017848]'></div>
                                    <p>Principal & interest</p>
                                </div>
                                <p class="leading-body m-0 p-0 text-left  overflow-hidden font-bold text-[#292B29]">${monthlyPayment}</p>
                            </div>

                            <div className='flex justify-between mt-2'>
                                <div className='flex gap-x-1.5 items-center'>
                                    <div className='w-1 h-4 rounded-full bg-[#6E4CF6]'></div>
                                    <p>Homeowners insurance</p>
                                </div>
                                <div className='w-[150px] relative border border-gray-300 rounded-md'>
                                    <div className='absolute left-1 top-1/2 -translate-y-1/2 text-left text-[#292B29] font-bold text-base'>$</div>
                                    <input type="number" className='w-full text-end py-3 outline-none'
                                        value={0}
                                    />
                                </div>
                            </div>

                            <div className='flex justify-between mt-2'>
                                <div className='flex gap-x-1.5 items-center'>
                                    <div className='w-1 h-4 rounded-full bg-[#8E8EEB]'></div>
                                    <p>Homeowners insurances</p>
                                </div>
                                <div className='w-[150px] relative border border-gray-300 rounded-md'>
                                    <div className='absolute left-1 top-1/2 -translate-y-1/2 text-left text-[#292B29] font-bold text-base'>$</div>
                                    <input type="number" className='w-full text-end py-3 outline-none'
                                        value={0}
                                    />
                                </div>
                            </div>

                            <div className='flex justify-between mt-2'>
                                <div className='flex gap-x-1.5 items-center'>
                                    <div className='w-1 h-4 rounded-full bg-[#FFD566]'></div>
                                    <p>HOA fees</p>
                                </div>
                                <div className='w-[150px] relative border border-gray-300 rounded-md'>
                                    <div className='absolute left-1 top-1/2 -translate-y-1/2 text-left text-[#292B29] font-bold text-base'>$</div>
                                    <input type="number" className='w-full text-end py-3 outline-none'
                                        value={0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Index;


