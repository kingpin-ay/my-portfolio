import React from "react"
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";

export default function Banner(props) {
  return (
    <>
        <div className="text-center p-10">

            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Ayush Mondal</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-yellow-50">Blockchain Developer and Teacher</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-yellow-50">
            Freelancer providing services for programming and Blockchain content
              needs. Join me down below and let&apos;s get cracking!
            </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600">
            <a href={props.linkdinLink} target="_blank" rel="noreferrer"><AiFillLinkedin className="cursor-pointer"/></a>
            <a href={props.twitterLink} target="_blank" rel="noreferrer"><AiFillTwitterCircle className="cursor-pointer"/></a>
            <AiFillYoutube className="cursor-pointer"/>
        </div>
    </>
  )
}
