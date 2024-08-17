"use client"
import "./Home.css"
import Button from "./components/Button"
import logo from "./images/logo.png"
import demo from "./images/demo.png"
import mockup from "./images/mockup.png"
import Image from "next/image"
import Link from "next/link"
import React from "react";
import HomePageCarousel from "./components/GeneralCarousel"
import { roles } from "./components/HomePageRoles"

const Home = () =>
{

  return (
    <section id="base-background">

      <div class="section section-home">
        <div className="flex flex-wrap items-center justify-center">
          <div className="md:flex-1">
            <h2 className="font-semibold text-[2.5rem] md:text-[3.5rem] lg:text-[4rem]">Hey UGA!</h2>
            <h1 className="font-semibold text-[2.5rem] md:text-[3.5rem] lg:text-[4rem]">We're <div class="red-bold">DevDogs</div>,</h1>
          </div>

          <div className="md:flex-1">
            <Image id="mascot" src={logo} alt="DevDogs Logo" width="800" height="800" />
          </div>
        </div>


        <div className="flex sm:flex-row-reverse flex-wrap items-center justify-center my-[50px]">
          <div className="sm:flex-1 text-center sm:text-right mb-10 sm:my-0">
            <h1 className="text-lg md:text-xl">A Team Of</h1>
            <h1 className="text-lg md:text-xl">Passionate</h1>
            <h1 className="font-semibold text-[2.5rem] md:text-[3.5rem] lg:text-[4rem]">Student</h1>
            <h1 className="font-semibold text-[#BA0C2F] text-[2.5rem] md:text-[3.5rem] lg:text-[4rem]">Developers</h1>
            <h2 className="text-lg md:text-xl">at UGA.</h2>
          </div>

          <div className="sm:flex-1">
            <Image src={demo} alt="ACM OSP Demo" width="600" height="300" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center my-[50px]">
          <div className="md:flex-1">
            <p className="font-semibold text-[2.5rem] md:text-[3.5rem] lg:text-[4rem]"><p className="font-semibold text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-[#BA0C2F] inline">We </p>develop some awesome software...</p>
            <p className="font-semibold mt-[10px] text-[1.5rem]" >And we strive to better our <p className="font-semibold text-[#BA0C2F] text-[1.5rem] inline"> community </p> through code.</p>
            <p className="mt-[10px]">Each year, we work hard to identify needs in Athens and solve them by taking solutions from concept to completion.</p>
          </div>
          <div className="md:flex-1">
            <Image src={mockup} alt="ACM OSP Bus App Mockup" />
          </div>
        </div>


        <HomePageCarousel roles={roles} />


        <div>
          <h1 className="font-bold text-center text-[3rem]">Sound Interesting?</h1>


          <div className="button-grid">
            <Link target="_blank" href="/about" className="text-lg md:text-xl rounded-full font-medium m-4 p-2 transition ease-in-out delay-150 text-white bg-black hover:bg-[#BA0C2F] ">
              {/* <Button id="learnmore">Learn More</Button> */}
              <Button >Learn More</Button>
            </Link>

            <Link target="_blank" href="https://discord.com/invite/MuyJ4f5xKE" className="text-lg md:text-xl rounded-full font-medium m-4 p-2 transition ease-in-out delay-150 text-white bg-[#BA0C2F] hover:bg-black ">
              {/* <Button id="joinus-si">Join Us!</Button> */}
              <Button >Join Us!</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home;