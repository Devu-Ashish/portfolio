import React from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { GrInstagram } from 'react-icons/gr'
import { BsLinkedin } from 'react-icons/bs'

const Social = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 hover:ml-[-10px] duration-500 bg-gradient-to-r from-sky-400 to-sky-800 ml-[-100px]'>
          <a href='#' className='flex justify-between items-center w-full text-white'>
          <>
            LinkedIn
            <BsLinkedin size={25}/>
          </>
          </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 hover:ml-[-10px] duration-500 bg-gradient-to-r from-amber-400 to-amber-600 ml-[-100px]'>
          <a href='#' className='flex justify-between items-center w-full text-white'>
          <>
            Github
            <VscGithubInverted size={25}/>
          </>
          </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 hover:ml-[-10px] duration-500 bg-gradient-to-r from-purple-500 to-pink-600 ml-[-100px]'>
          <a href='#' className='flex justify-between items-center w-full text-white'>
          <>
            Instagram
            <GrInstagram size={25}/>
          </>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social