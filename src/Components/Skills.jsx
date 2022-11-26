import React from 'react'
import html from '../Assets/html.png'
import CSS from '../Assets/CSS.png'
import JS from '../Assets/JS.png'
import python from '../Assets/python.png'
import django from '../Assets/django.png'
import sql from '../Assets/sql.png'
import mongo from '../Assets/mongo.png'
import node from '../Assets/node.png'
import react from '../Assets/react.png'
import aws from '../Assets/aws.png'

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: CSS,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: JS,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-cyan-500',
    },
    {
      id: 5,
      src: node,
      title: 'Node',
      style: 'shadow-green-500',
    },
    {
      id: 6,
      src: python,
      title: 'Python',
      style: 'shadow-violet-300',
    },
    {
      id: 7,
      src: django,
      title: 'Django',
      style: 'shadow-emerald-800',
    },
    {
      id: 8,
      src: sql,
      title: 'SQL',
      style: 'shadow-sky-700',
    },
    {
      id: 9,
      src: mongo,
      title: 'MongoDB',
      style: 'shadow-green-800',
    },
    {
      id: 10,
      src: aws,
      title: 'AWS',
      style: 'shadow-white',
    },

];


  return (
    <div name="Skills" className='bg-gradient-to-b from-slate-900 via-slate-900 to-slate-500'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <h1 className='text-4xl font-bold border-b-4 border-gray-500 p-3 inline'>Skills</h1>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            skills.map(({id, src, title, style}) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img className='w-20 mx-auto py-10' src={src} alt="html" />
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills