import Head from "next/head";

import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Services from "./components/Services";
import PortFolioWork from "./components/PortFolioWork";
import SkillCard from "./components/SkillCard";

import {block_chain , web_dev} from "./contents/skillContent"


import Image from "next/image";
import profile from "../public/profileImg.jpg"
import code from "../public/code.png";
import design from "../public/design.png";
import { useState } from "react";



export default function Home() {
    const [darkMode , setDarkMode] = useState(false);
    let linkdinLink = "https://www.linkedin.com/in/ayush-mondal-a13023205/"
    let twitterLink = "https://twitter.com/_Ayush_01"

  return (
    <div className={darkMode ? "dark": "" }>
      <Head>
        <title>Ayush Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">


          {/* Navbar section  */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
  
          {/* Banner section for the social links */}
          <Banner linkdinLink={linkdinLink}  twitterLink={twitterLink}/>

          {/* this is a profile photo of me showing my image on the portfolio page */}
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image src={profile} layout="fill" objectFit="cover"/>
          </div>
        </section>
        


        <section className="my-7">


              {/* the services that I offer basically a description of my journey */}
              <Services/>



              {/* skill card setup for the portfolio */}
              <div className="lg:flex gap-10">

                <SkillCard display={code} title={block_chain["title"]} desc={block_chain["description"]} tech={block_chain["technologys"]}/>
                <SkillCard display={design} title={web_dev["title"]} desc={web_dev["description"]} tech={web_dev["technologys"]}/>
              
              </div>

        </section>

        {/* all port folio works are listed on this component */}
        <PortFolioWork/>
      </main>
    </div>
  );
}
