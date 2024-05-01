import React from 'react'

function Experience({padding}) {
  return (
    <section>
            <h3 className='border-b border-black font-medium text-[16px]' style={{paddingBottom: `${padding}px`}}>Experience</h3>
        <div className='py-2'>
            <div className='flex justify-between items-center'>
                <h6 className='text-[16px] font-medium'>TATA Consultancy Services Ltd</h6>
                <small className='text-[15px] font-medium md:mr-24'><span className='mr-1'>&#91;</span>Dec/2021 - Present<span className='ml-1'>&#93;</span></small>
            </div>
            <i>Software Developer</i>
            <ul className='text-[13px] list-disc md:pl-6 pl-4 md:pl-6'>
                <li>Developed critical pages within the incident management tool using React.js, leveraging features such as state management with Redux, routing with React Router, and component lifecycle methods to enhance user experience and functionality.</li>
                <li>Utilized React Hooks for managing component state and side effects, improving code readability and maintainability.</li>
                <li>Integrated third-party libraries and UI frameworks, such as Material-UI or Ant Design, to expedite development and ensure consistent design patterns across the application.</li>
                <li>Employed React Context API for managing global state and sharing data between components, enhancing scalability and performance.</li>
                <li>Configured and managed Jenkins pipelines for automated build, test, and deployment processes across multiple environments, including SIT, UAT, and production.</li>
                <li>Orchestrated the deployment and scaling of AWS infrastructure for hosting UAT and production servers, optimizing performance and scalability.</li>
                <li>
                Conducted thorough code reviews and provided technical guidance to team members, fostering a culture of code quality and collaboration.
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Experience