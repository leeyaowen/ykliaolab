import React from 'react';
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import './page.css';

function Student_porject () {
    return (
       <div className='contact-div'>
          <Helmet>
            <title>歷屆指導學生研究專題</title>
         </Helmet>
         <h1 className="page-name">歷屆指導學生研究專題</h1>
         <img src='https://photos.smugmug.com/photos/i-TF8hXxJ/0/2030a43c/O/i-TF8hXxJ.gif' alt='rainbowgif' className='rainbowgif'/><br/>
         <h2 className="page-name">WIP......<br/><br/><br/></h2>
         <div className='backhome'>
            <NavLink to='/'><img src="https://photos.smugmug.com/photos/i-fkWLwcT/0/16635ef1/O/i-fkWLwcT.gif" alt="home" className='backhomeimg'/></NavLink>
         </div>
       </div>
    );
}
 
export default Student_porject;