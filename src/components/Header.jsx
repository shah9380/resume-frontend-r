import React from 'react'

function Header() {
  return (
    <header className="flex justify-between mb-2">
    <h1 className='text-2xl md:text-3xl font-medium'>Shah Misbahul Islam</h1>
    <ul>
        <li className='text-[12px]'><strong>Email : </strong>shahislam9380@gmail.com</li>
        <li className='text-[12px]'><strong>Phone No : </strong>+91-93806-04335</li>
        <li className='text-[12px] font-medium'><strong>Github : </strong><a className='text-blue-600 underline' href="https://github.com/shah9380">shahislam9380</a></li>
        <li className='text-[12px] font-medium'><strong>Linkedin : </strong><a className='text-blue-600 underline' href="https://www.linkedin.com/in/shah-misbahul-islam-466138198/">shahislam9380</a></li>
    </ul>
    </header>
  )
}

export default Header