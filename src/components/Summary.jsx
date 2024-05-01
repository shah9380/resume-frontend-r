import React from 'react'

function Summary({padding}) {
  return (
    <section>
            <h3 className='border-b border-black font-medium text-[16px]' style={{paddingBottom: `${padding}px`}}>Summary</h3>
        <div className='py-2 text-[13px]'>
            <p className='hidden md:flex'>
            Experienced React.js Developer with a proven track record of over 2 years in delivering top-notch solutions within dynamic corporate environments. Proficient in Agile methodologies and AWS deployment, I specialize in harnessing the power of React's advanced features to drive organizational efficiency and innovation. Skilled in fostering collaborative environments to surpass project goals and deliver impactful results. Eager to leverage my expertise to tackle new challenges and contribute to meaningful projects.
            </p>
            <p className='md:hidden'>
            Experienced React.js Developer with 2+ years of proven success in dynamic corporate settings. Proficient in Agile methodologies, AWS deployment, and leveraging advanced React features to drive efficiency and innovation. Skilled in fostering collaboration and delivering impactful results. Eager to tackle new challenges and contribute to meaningful projects.
            </p>
        </div>
    </section>
  )
}

export default Summary