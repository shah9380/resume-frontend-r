import React from 'react'

function Certifications({padding, mgn}) {
  return (
    <section style={{marginTop: `${mgn}px`}}>
            <h3 className='border-b border-black font-medium text-[16px]' style={{paddingBottom: `${padding}px`}}>Certifications | Internships</h3>
        <div className='py-2'>
            <h6 className='text-md font-medium'>Geekster | Geekster Coding Bootcamp</h6>
            <ul className='text-sm list-disc pl-4 md:pl-6'>
                <li>Solved 200+ DSA/Coding questions on geekster platform (<a className='text-blue-800' href='https://www.hackerrank.com/shahislam9380/hackos' target='_blank'>Link</a>)</li>
                <li>Participated in various Coding contests organised by the platform.</li>
                <li>Worked on various projects like Eccommerce Api [<a className='text-blue-800' href='https://github.com/shah9380/ecommercefullstack' target='_blank'>Github</a>](<a className='text-blue-800' href='https://documenter.getpostman.com/view/32167837/2sA35G4NQg' target='_blank'>Link</a>),Hospital Management System [<a className='text-blue-800' href='https://github.com/shah9380/hotel-management-mern' target='_blank'>Github</a>](<a className='text-blue-800' href='https://documenter.getpostman.com/view/32167837/2sA35G4NQg' target='_blank'>Link</a>)</li>
                <li>Technical Stack Learned : HTML, CSS, JavaScript, React, Material UI, Tailwind, MongoDB, SQL and Java</li>
            </ul>
        </div>
    </section>
  )
}

export default Certifications