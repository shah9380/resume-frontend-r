import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';

import Header from './components/Header';
import Certifications from './components/Certifications';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SimCardDownloadTwoToneIcon from '@mui/icons-material/SimCardDownloadTwoTone';

function App() {
  const downloadPdf = () => {
    window.scrollTo(500, 0);
    const element = document.getElementById('pdf-content');
    setMgn(55);
    html2pdf().from(element).save();
    setTimeout(()=>{
      setMgn(0);
    },500)
  };

  const[mgn,setMgn]=useState(0);
  
  return (
    <section>
      <div className="App max-w-[800px] mx-auto border border-black p-4 border" id="pdf-content">
          <Header></Header>
          <Summary padding={6}></Summary>
          <Experience padding={6}></Experience>
          <Projects padding={6}></Projects>
          <Skills padding={6}></Skills>
          <Certifications padding={6} mgn={mgn}></Certifications>
      </div>
      <button onClick={()=>{downloadPdf()}} className='download bg-sky-500/100 w-[100vw]' style={{position: "fixed", bottom: "0", left: "0"}}><SimCardDownloadTwoToneIcon></SimCardDownloadTwoToneIcon> <span style={{fontSize: "8px"}}>Download PDF</span></button>
    </section>
  );
}

export default App;

