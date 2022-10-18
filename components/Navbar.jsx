import React from 'react'
import { BsFillMoonStarsFill} from "react-icons/bs";

export default function Navbar(props) {
  return (
    <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-yellow-100">developedby</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => props.setDarkMode(!props.darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li >
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 dark:text-white"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
    </nav>
  )
}
