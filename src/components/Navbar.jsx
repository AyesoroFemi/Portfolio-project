// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";

// const Navbar = (props) => {
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   const { pdf } = props;

//   return (
//     <Document
//       file={pdf}
//       options={{ workerSrc: "/pdf.worker.js" }}
//       onLoadSuccess={onDocumentLoadSuccess}
//     >
//       {Array.from(new Array(numPages), (el, index) => (
//         <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//       ))}
//     </Document>
//   );
// };

// export default Navbar;

import React from 'react'

function Navbar() {
  return (
    <div>
      <iframe className='w-1/2 mx-auto h-[800px]'
        src="https://drive.google.com/file/d/1kmekeIaUlhr2jr9zOq1sE71TEhsl3M4P/preview"
        // width="640"
        // height="480"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Navbar