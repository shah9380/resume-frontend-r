import React from 'react';
import html2pdf from 'html2pdf.js';

import Header from './components/Header';
import Certifications from './components/Certifications';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const downloadPdf = () => {
    const element = document.getElementById('pdf-content');
    html2pdf().from(element).save();
  };

  return (
    <div className="App max-w-[800px] mx-auto p-4 border" id="pdf-content">
        <Header></Header>
        <Summary></Summary>
        <Experience></Experience>
        <Projects></Projects>
        <Skills></Skills>
        <button onClick={downloadPdf}>Download PDF</button>
    </div>
  );
}

export default App;

