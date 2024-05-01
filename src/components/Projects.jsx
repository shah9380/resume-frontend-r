import React from 'react'

function Projects() {
  return (
    <section>
        <div className='border-y border-black'>
            <h3 className='font-medium text-lg'>Projects</h3>
        </div>
        <div className='py-2'>
            <div className='flex gap-2 items-center'>
                <h6 className='text-md font-medium'>Invoice Generator</h6>
                <small className='text-sm font-medium'><span className='mr-1'>&#91;</span><a className='text-blue-600 underline' href="https://github.com/shah9380/TeamUnityBase/tree/main/Misbah"><i>Github Link</i></a><span className='ml-1'>&#93;</span></small>
            </div>
            <ul className='text-sm list-disc md:pl-6 pl-4 md:pl-6'>
                <li>Invoice Generator project simplifies invoicing with dynamic currency conversion, real-time price updates, and PDF downloads, streamlining business processes.</li>
                <li>Key Features: Implemented dynamic currency conversion to fetch the latest rates, enabling easy price conversion. Additionally, real-time price updates are incorporated to calculate and update the invoice subtotal instantly based on item quantity and price changes. Furthermore, users are provided with the functionality to download invoices as PDFs with customized filenames.</li>
                <li>Tech Stack: <span className='font-medium'>JavaScript, HTML, CSS, Fetch API, html2pdf library</span></li>
            </ul>
        </div>
        <div className='py-2'>
            <div className='flex gap-2 items-center'>
                <h6 className='text-md font-medium'>Movix</h6>
                <small className='text-sm font-medium'><span className='mr-1'>&#91;</span><a className='text-blue-600 underline' href="https://github.com/shah9380/movix-resume"><i>Github Link</i></a><span className='ml-1'>&#93;</span></small>
            </div>
            <ul className='text-sm list-disc md:pl-6 pl-4 md:pl-6'>
                <li>Movix is a web application designed to simplify the process of managing movie collections. It allows users to browse, search, and save their favorite movies, enhancing the movie-watching experience.</li>
                <li>Key Features: Explore a vast collection of movies through enhanced carousels and routing, with lazy loading and skeleton loading for seamless browsing. Benefit from optimized UI experience facilitated by Redux, utilized for centralized state management and seamless integration of complex data flow features.</li>
                <li>Tech Stack: <span className='font-medium'>JavaScript, React, Redux (for centralized state management), Context API, HTML/CSS, Axios for API, React Router, Lazy loading, Skeleton loading.</span></li>
            </ul>
        </div>
    </section>
  )
}

export default Projects