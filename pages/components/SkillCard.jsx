import React from 'react'
import Image from "next/image";

export default function SkillCard(props) {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
        <Image src={props.display} width={100} height={100} alt="image of the skill card"/>
        <h3 className="text-lg font-medium pt-8 pb-2 dark:text-teal-600">{props.title}</h3>
        <p className="py-2 dark:text-white">
            {props.desc}
        </p>

        <h4 className="py-4 text-teal-600">Techs that I use</h4>
        <p className="text-gray-800 py-1 dark:text-white">{props.tech[0]}</p>
        <p className="text-gray-800 py-1 dark:text-white">{props.tech[1]}</p>
        <p className="text-gray-800 py-1 dark:text-white">{props.tech[2]}</p>
    </div>
  )
}
