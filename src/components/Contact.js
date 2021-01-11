import React from 'react';
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import './page.css';

function Contact () {
    return (
       <div>
          <Helmet>
            <title>跟我說說話吧</title>
         </Helmet>
         <h1 className="page-name">跟我們聯絡</h1>
         <img src='https://photos.smugmug.com/photos/i-TF8hXxJ/0/2030a43c/O/i-TF8hXxJ.gif' alt='rainbowgif' className='rainbowgif'/><br/>
         <p className='contact-email'>ykliao@mail.ncyu.edu.tw</p>
         <img src="https://photos.smugmug.com/photos/i-fwPCdSr/0/b07082d5/O/i-fwPCdSr.jpg" alt="contact"className='contact-img' />
         <div className='backhome'>
            <NavLink to='/'><img src="https://photos.smugmug.com/photos/i-fkWLwcT/0/16635ef1/O/i-fkWLwcT.gif" alt="home" className='backhomeimg'/></NavLink>
         </div>
       </div>
    );
}
 
export default Contact;