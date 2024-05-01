import React from 'react'

function Certifications() {
  return (
    <section>
        <div className='border-y border-black'>
            <h3 className='font-medium text-lg'>Certifications | Internships</h3>
        </div>
        <div className='py-2'>
            <h6 className='text-md font-medium'>Geekster | Geekster Coding Bootcamp</h6>
            <ul className='text-sm list-disc pl-4 md:pl-6'>
                <li>Solved 200+ DSA/Coding questions on geekster platform</li>
                <li>Participated in various Coding contests organised by the platform.</li>
                <li>Worked on various projects like Music Streaming Api ,Student Management System</li>
                <li>Technical Stack Learned : HTML, CSS, JavaScript, React, Tailwind, MongoDB, SQL and Java</li>
            </ul>
        </div>
    </section>
  )
}

export default Certifications