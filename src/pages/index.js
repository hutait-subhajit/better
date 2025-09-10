// pages/index.jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";

import { RiTimerLine } from "react-icons/ri";
import aipoweredfico from '../../public/ai-powered-fico.webp'
import { LiaStarSolid } from "react-icons/lia";
import { FaPlay } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

import paulImage from '../../public/paulImages.webp'
import Amanda from "../../public/Amanda.webp"
import Tiara from "../../public/Tiara.webp"

import ourProduct1 from "../../public/images/ourProduct1.webp"
import ourProduct2 from "../../public/images/ourProduct2.webp"
import ourProduct3 from "../../public/images/ourProduct3.webp"
import ourProduct4 from "../../public/images/ourProduct4.webp"

import calculator1 from "../../public/images/mortgage-calculator1.webp"
import calculator2 from "../../public/images/calculator2.webp"
import calculator3 from "../../public/images/heloc-calculator3.webp"
import calculator4 from "../../public/images/fixed-rate-calculator4.webp"
import Navbar from '@/components/Navbar';

export default function Home() {
  const [selectPerson, setSelectPerson] = useState("Paul");
  const [selectCategory, setSelectCategory] = useState("Ourproduct");
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  // useEffect(() => {
  //   router.replace('/start');
  // }, []);

  return (
    <>
      <Navbar />
      <div
        className={`font-open-sans`}
      >
        <div className="bg-[#004733]">
          <div className="relative z-10 m-auto max-w-screen-2xl overflow-hidden px-6 md:px-10 lg:px-14">
            <h1 className="font-bold leading-heading m-0 p-0 w-auto tracking-tight md:tracking-tighter mt-[48px] z-1 leading-small text-center text-[50px] text-white md:mt-[80px] md:p-0 md:text-4xl lg:text-[100px]">
              The first
              <br />
              <span className="bg-[linear-gradient(116deg,_#00FF80_16.51%,_#A987FF_54.85%,_#EA06FF_94.62%)] bg-clip-text text-transparent">AI-powered </span>
              Mortgage
            </h1>

            <p className="font-normal leading-body m-0 p-0 text-white text-[18px] md:text-[24px] text-center mt-[32px] md:mt-[18px]">
              Our tech unlocks lower rates, higher chances of approval,
              <br />
              and a lightning‑fast process from approval
              &nbsp;to&nbsp;closing. Over $100 billion funded.
            </p>

            <div className="w-auto text-center mt-8 md:mt-10">
              <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 cursor-pointer bg-[#1EE07F] text-[#292B29] hover:bg-gray-700 hover:text-white h-16 px-12 py-5 w-full sm:w-fit">Start my pre-approval
              </a>

              <div className="mt-3 flex items-center justify-center gap-1 text-xs text-white">
                <RiTimerLine className="h-4 w-4" />
                <span class="mr-1">3 min</span>
                <span>| No hard credit check </span>
              </div>

            </div>

            <div className="mt-10 px-4 md:mt-12">
              <Image
                src={aipoweredfico}
                alt="Hero Image"
                width={1200}
                height={600}
                className="mx-auto w-full max-w-[500px]  rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="m-auto flex max-w-screen-2xl flex-col justify-between gap-x-3xl  px-5 py-20 md:px-10 bg-amber-50 md:flex-row-reverse xl:p-[120px]">
          <div className="flex flex-col justify-center md:max-w-[507px]">
            <h2 class="font-bold leading-heading m-0 p-0 w-auto tracking-tight md:tracking-tighter mb-8 text-3xl leading-small md:text-3xl lg:text-[80px]">
              Find&nbsp;out&nbsp;why we’re&nbsp;better.
            </h2>

            <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-tight cursor-pointer transition-all ease-in-out duration-200 bg-[#004733] text-white hover:bg-[#14916d] h-16 px-12 py-5 mb-5 w-full md:w-fit">
              See all our stories
            </a>
            <div className="mb-10 flex items-end justify-center gap-sm leading-small text-[#565D5A] md:justify-start">
              <LiaStarSolid className="h-6 w-6 text-[#23AD7A]" />
              <span className="font-bold text-black">Trustpilot </span>
              <span className="pl-2"><strong>Excellent</strong></span>
              <span className="pl-2"><strong>4.4</strong> out of 5</span>
            </div>
          </div>
          <div className="flex flex-col gap-lg md:flex-col-reverse">
            <div className="flex gap-x-2 overflow-scroll [&::-webkit-scrollbar]:hidden mt-5">
              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal transition-all ease-in-out duration-200 border  hover:border-[#017848] hover:shadow-[0_0_0_4px_inset] hover:text-[#017848] h-12 px-6 py-3 w-auto ${selectPerson === "Paul" ? 'border-[#017848] text-[#017848] shadow-[0_0_0_4px_inset]' : 'border-[#3a3a3a]'}`}
                onClick={() => {
                  if (selectPerson !== "Paul") {
                    setIsVideoVisible(false);
                    setSelectPerson("Paul");
                  }
                }}
              >
                Paul
              </button>

              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal transition-all ease-in-out duration-200 border  hover:border-[#017848] hover:shadow-[0_0_0_4px_inset] hover:text-[#017848] h-12 px-6 py-3 w-auto ${selectPerson === "Amanda" ? 'border-[#017848] text-[#017848] shadow-[0_0_0_4px_inset]' : 'border-[#3a3a3a]'}`}
                onClick={() => {
                  if (selectPerson !== "Amanda") {
                    setIsVideoVisible(false);
                    setSelectPerson("Amanda");
                  }
                }}
              >
                Amanda
              </button>

              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal transition-all ease-in-out duration-200 border  hover:border-[#017848] hover:shadow-[0_0_0_4px_inset] hover:text-[#017848] h-12 px-6 py-3 w-auto ${selectPerson === "Tiara" ? 'border-[#017848] text-[#017848] shadow-[0_0_0_4px_inset]' : 'border-[#3a3a3a]'}`}
                onClick={() => {
                  if (selectPerson !== "Tiara") {
                    setIsVideoVisible(false);
                    setSelectPerson("Tiara");
                  }
                }}
              >
                Tiara
              </button>
            </div>


            {/* video part */}
            <div className="relative flex justify-center overflow-hidden rounded-lg w-[341px] h-[606px]">
              {selectPerson === "Paul" && (
                <>
                  <Image
                    src={paulImage}
                    alt="Paul Testimonial"
                    width={341}
                    height={606}
                    className="object-cover"
                    onClick={() => setIsVideoVisible(true)}
                  />

                  <FaPlay size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />

                  {isVideoVisible && (
                    <div className="z-10 absolute top-0 w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/pKy7cNtaJ0c"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </>
              )}

              {selectPerson === "Amanda" && (
                <>
                  <Image
                    src={Amanda}
                    alt="Paul Testimonial"
                    width={341}
                    height={606}
                    className="object-cover"
                    onClick={() => setIsVideoVisible(true)}
                  />
                  <FaPlay size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                  {isVideoVisible && (
                    <div className="z-10 absolute top-0 w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/tF60HQo3vhU"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </div>
                  )}
                </>
              )}
              <FaPlay size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
              {selectPerson === "Tiara" && (
                <>
                  <Image
                    src={Tiara}
                    alt="Paul Testimonial"
                    width={341}
                    height={606}
                    className="object-cover"
                    onClick={() => setIsVideoVisible(true)}
                  />

                  {isVideoVisible && (
                    <div className="z-10 absolute top-0 w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Mhkf_1o4v7s"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </div>
                  )}
                </>
              )}

            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px] bg-amber-50">
          <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
            <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 text-2xl md:text-3xl md:tracking-tight w-full max-w-lg tracking-tight lg:text-5xl">
              Got questions?
              <br />
              We've got answers
            </h2>
            <div className="flex gap-x-2 overflow-scroll [&::-webkit-scrollbar]:hidden">
              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal transition-all ease-in-out duration-200 border  hover:border-[#017848] hover:shadow-[0_0_0_4px_inset] hover:text-[#017848] h-12 px-6 py-3 w-auto ${selectCategory === "Ourproduct" ? 'border-[#017848] text-[#017848] shadow-[0_0_0_4px_inset]' : 'border-[#3a3a3a]'}`}
                onClick={() => setSelectCategory("Ourproduct")}
              >
                Our Products
              </button>

              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal transition-all ease-in-out duration-200 border  hover:border-[#017848] hover:shadow-[0_0_0_4px_inset] hover:text-[#017848] h-12 px-6 py-3 w-auto ${selectCategory === "calculators" ? 'border-[#017848] text-[#017848] shadow-[0_0_0_4px_inset]' : 'border-[#3a3a3a]'}`}
                onClick={() => setSelectCategory("calculators")}
              >
                Calculators
              </button>

              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal transition-all ease-in-out duration-200 border  hover:border-[#017848] hover:shadow-[0_0_0_4px_inset] hover:text-[#017848] h-12 px-6 py-3 w-auto ${selectCategory === "guide" ? 'border-[#017848] text-[#017848] shadow-[0_0_0_4px_inset]' : 'border-[#3a3a3a]'}`}
                onClick={() => setSelectCategory("guide")}
              >
                Guides & FAQs
              </button>
            </div>

          </div>
          {
            selectCategory === "Ourproduct" && (
              <>
                <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="col-span-1 flex flex-col md:flex-row lg:flex-col gap-6 rounded-md md:px-12 md:py-8 lg:py-[35px] bg-[#F0F7F1] px-6 py-5 cursor-pointer">
                    <div className="flex flex-col gap-6">
                      <h3 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-[#073126] lg:text-xl">
                        How AI Mortgage Lending is Transforming the Home Loan Process
                      </h3>

                      <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                        <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                      </div>
                    </div>

                    <Image
                      src={ourProduct1}
                      alt="Our Product 1"
                      width={200}
                      height={200}
                      className="w-full md:max-w-[400px] rounded-md h-[160px] md:min-h-[140px] object-cover"
                    />
                  </div>

                  <div className="lg:col-span-2 bg-[#F0F7F1] md:px-12 md:py-8 lg:py-[35px] px-6 py-5 flex flex-col md:flex-row  gap-6 rounded-md cursor-pointer">
                    <div className="w-full md:w-[calc(100%-285px)] flex flex-col gap-6 text-[#073126]">
                      <h4 class="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal  lg:text-xl">One Day Mortgage<sup>1</sup></h4>
                      <p class="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup></p>
                      <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                        <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                      </div>
                    </div>
                    <Image
                      src={ourProduct2}
                      alt="ourProduct2"
                      width={400}
                      height={200}
                      className="w-full rounded-md object-cover h-full md:w-[285px]"
                    />

                  </div>
                </div>

                <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-3">

                  <div className="lg:col-span-2 bg-[#F0F7F1] md:px-12 md:py-8 lg:py-[35px] px-6 py-5 flex flex-col md:flex-row  gap-6 rounded-md cursor-pointer">
                    <Image
                      src={ourProduct3}
                      alt="ourProduct2"
                      width={400}
                      height={200}
                      className="w-full rounded-md object-cover h-full md:w-[285px]"
                    />
                    <div className="w-full md:w-[calc(100%-285px)] flex flex-col gap-6 text-[#073126]">
                      <h4 class="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal  lg:text-xl">Better HELOC</h4>
                      <p class="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup></p>
                      <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                        <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                      </div>
                    </div>


                  </div>
                  <div className="col-span-1 flex flex-col md:flex-row lg:flex-col gap-6 rounded-md md:px-12 md:py-8 lg:py-[35px] bg-[#F0F7F1] px-6 py-5 cursor-pointer">
                    <div className="flex flex-col gap-6">
                      <h3 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-[#073126] lg:text-xl">
                        Insurance
                      </h3>

                      <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                        <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                      </div>
                    </div>

                    <Image
                      src={ourProduct4}
                      alt="Our Product 1"
                      width={200}
                      height={200}
                      className="w-full md:max-w-[400px] rounded-md h-[160px] md:min-h-[140px] object-cover"
                    />
                  </div>


                </div>
              </>
            )
          }

          {
            selectCategory === "calculators" && (
              <>
                <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="col-span-1 flex flex-col md:flex-row lg:flex-col gap-6 rounded-md md:px-12 md:py-8 lg:py-[35px] bg-[#F0F7F1] px-6 py-5 cursor-pointer">
                    <div className="flex flex-col gap-6">
                      <h3 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-[#073126] lg:text-xl">
                        Mortgage calculator
                      </h3>

                      <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                        <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                      </div>
                    </div>

                    <Image
                      src={calculator1}
                      alt="calculator1"
                      width={200}
                      height={200}
                      className="w-full md:max-w-[400px] rounded-md h-[160px] md:min-h-[140px] object-cover"
                    />
                  </div>

                  <div className="lg:col-span-2 bg-[#F0F7F1] md:px-12 md:py-8 lg:py-[35px] px-6 py-5 flex flex-col md:flex-row  gap-6 rounded-md cursor-pointer">
                    <div className="w-full md:w-[calc(100%-285px)] flex flex-col gap-6 text-[#073126]">
                      <h4 class="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal  lg:text-xl">Affordability calculator</h4>
                      <p class="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
                        Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.
                      </p>
                      <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                        <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                      </div>
                    </div>
                    <Image
                      src={calculator2}
                      alt="calculator2"
                      width={400}
                      height={200}
                      className="w-full rounded-md object-cover h-full md:w-[285px]"
                    />

                  </div>
                </div>

                <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-3">

                  <div className="lg:col-span-2 bg-[#F0F7F1] md:px-12 md:py-8 lg:py-[35px] px-6 py-5 flex flex-col md:flex-row  gap-6 rounded-md cursor-pointer">

                    <Image
                      src={calculator3}
                      alt="ourProduct2"
                      width={400}
                      height={200}
                      className="w-full rounded-md object-cover h-full md:w-[285px]"
                    />

                    <div className="w-full md:w-[calc(100%-285px)] flex flex-col gap-6 text-[#073126]">
                      <h4 class="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal  lg:text-xl">HELOC calculator</h4>
                      <p class="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
                        Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.
                      </p>
                      <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                        <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                      </div>
                    </div>

                  </div>
                  <div className="col-span-1 flex flex-col md:flex-row lg:flex-col gap-6 rounded-md md:px-12 md:py-8 lg:py-[35px] bg-[#F0F7F1] px-6 py-5 cursor-pointer">
                    <div className="flex flex-col gap-6">
                      <h3 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-[#073126] lg:text-xl">
                        Fixed-rate loan comparison calculator
                      </h3>

                      <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                        <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                      </div>
                    </div>

                    <Image
                      src={calculator4}
                      alt="Our Product 1"
                      width={200}
                      height={200}
                      className="w-full md:max-w-[400px] rounded-md h-[160px] md:min-h-[140px] object-cover"
                    />
                  </div>


                </div>
              </>
            )
          }

          {
            selectCategory === "guide" && (
              <>
                <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="col-span-1 flex flex-col md:flex-row lg:flex-col gap-6 rounded-md md:px-12 md:py-8 lg:py-[35px] bg-[#F0F7F1] px-6 py-5 cursor-pointer">
                    <div className="flex flex-col gap-6">
                      <h3 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-[#073126] lg:text-xl">
                        What is a good debt-to-income ratio for a home loan?
                      </h3>

                      <div className='w-full flex justify-between items-end'>
                        <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                          <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                        </div>
                        <p>5 minutes</p>
                      </div>
                    </div>

                    <Image
                      src={calculator1}
                      alt="calculator1"
                      width={200}
                      height={200}
                      className="w-full md:max-w-[400px] rounded-md h-[160px] md:min-h-[140px] object-cover"
                    />
                  </div>

                  <div className="lg:col-span-2 bg-[#F0F7F1] md:px-12 md:py-8 lg:py-[35px] px-6 py-5 flex flex-col md:flex-row  gap-6 rounded-md cursor-pointer">
                    <div className="w-full md:w-[calc(100%-285px)] flex flex-col gap-6 text-[#073126]">
                      <h4 class="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal  lg:text-xl">Buying a house without realtor</h4>
                      <p class="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
                        Thinking about buying a house without a real estate agent? Read this first.
                      </p>
                      <div className='w-full flex justify-between items-end'>
                        <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                          <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                        </div>
                        <p>5 minutes</p>
                      </div>
                    </div>
                    <Image
                      src={calculator2}
                      alt="calculator2"
                      width={400}
                      height={200}
                      className="w-full rounded-md object-cover h-full md:w-[285px]"
                    />

                  </div>
                </div>

                <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-3">

                  <div className="lg:col-span-2 bg-[#F0F7F1] md:px-12 md:py-8 lg:py-[35px] px-6 py-5 flex flex-col md:flex-row  gap-6 rounded-md cursor-pointer">

                    <Image
                      src={calculator3}
                      alt="ourProduct2"
                      width={400}
                      height={200}
                      className="w-full rounded-md object-cover h-full md:w-[285px]"
                    />

                    <div className="w-full md:w-[calc(100%-285px)] flex flex-col gap-6 text-[#073126]">
                      <h4 class="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal  lg:text-xl">Timeline for homebuying process</h4>
                      <p class="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
                        Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.
                      </p>
                      <div className='w-full flex justify-between items-end'>
                        <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                          <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                        </div>
                        <p>3 minutes</p>
                      </div>
                    </div>

                  </div>
                  <div className="col-span-1 flex flex-col md:flex-row lg:flex-col gap-6 rounded-md md:px-12 md:py-8 lg:py-[35px] bg-[#F0F7F1] px-6 py-5 cursor-pointer">
                    <div className="flex flex-col gap-6">
                      <h3 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-[#073126] lg:text-xl">
                        Conventional loan requirements
                      </h3>

                      <div className='w-full flex justify-between items-end'>
                        <div className="rounded-full flex justify-center items-center border border-[#333] w-12 h-12 group hover:border-none hover:bg-[#073126]">
                          <IoMdArrowForward size={18} className="group-hover:text-white text-[#073126]" />
                        </div>
                        <p>3 minutes</p>
                      </div>
                    </div>

                    <Image
                      src={calculator4}
                      alt="Our Product 1"
                      width={200}
                      height={200}
                      className="w-full md:max-w-[400px] rounded-md h-[160px] md:min-h-[140px] object-cover"
                    />
                  </div>


                </div>
              </>
            )
          }
        </div>
      </div>
    </>
  );;
}
