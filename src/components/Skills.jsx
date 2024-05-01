import React from 'react'

function Skills() {
  return (
    <section>
        <div className='border-y border-black'>
            <h3 className='font-medium text-lg'>Skills</h3>
        </div>
        <div className='py-2'>
            <ul className='text-sm list-disc pl-4 md:pl-6'>
                <li><span className='font-medium'>Computer Language :</span>JavaScript, HTML, CSS, Java, NoSQL, SQL</li>
                <li><span className='font-medium'>Frameworks / Libraries :</span> ReactJS, Redux, Material UI Component Library, Express Js</li>
                <li><span className='font-medium'>Database :</span>MongoDB, Oracle</li>
                <li><span className='font-medium'>Tools & Technologies :</span>Git, VS Code, Eclipse, Jenkins, Jile</li>
                <li><span className='font-medium'>Additional Courses :</span> Data Structure and Algorithms, OOPs, User Interface Design</li>
            </ul>
        </div>
    </section>
  )
}

export default Skills