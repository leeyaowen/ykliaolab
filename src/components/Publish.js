import React from 'react';
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import './page.css';

function Publish () {
    return (
       <div>
          <Helmet>
            <title>發表著作</title>
         </Helmet>
         <h1 className="page-name">發表著作</h1>
         <img src='https://photos.smugmug.com/photos/i-TF8hXxJ/0/2030a43c/O/i-TF8hXxJ.gif' alt='rainbowgif' className='rainbowgif'/><br/>
         <div className='publish-textdiv'>
            <h3>期刊論文</h3>
         </div>
         <h2 className="page-name">WIP......<br/><br/><br/></h2>
         <div className='backhome'>
            <NavLink to='/'><img src="https://photos.smugmug.com/photos/i-fkWLwcT/0/16635ef1/O/i-fkWLwcT.gif" alt="home" className='backhomeimg'/></NavLink>
         </div>
       </div>
    );
}
 
export default Publish;