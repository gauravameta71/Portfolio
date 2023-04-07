import React from 'react';
import "./index.css"
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Skills from './routes/Skills'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;


// // <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Table</title>
// </head>
// <body>
//   <table>
//     <tr>
//       <th>Name</th>
//       <th>Course</th>
//       <th>Year</th>
//     </tr>

//     <tr>
//       <td>Ayush</td>
//       <td>Bba</td>
//       <td>1st</td>
//     </tr>
//   </table>
  
// </body>
// </html>