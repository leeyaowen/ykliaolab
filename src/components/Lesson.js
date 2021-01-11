import React from 'react';
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import './page.css';

function Lesson () {
    return (
       <div>
          <Helmet>
            <title>開授課程及綱要</title>
         </Helmet>
         <ScrollUpButton />
         <h1 className="page-name">開授課程及綱要</h1>
         <img src='https://photos.smugmug.com/photos/i-TF8hXxJ/0/2030a43c/O/i-TF8hXxJ.gif' alt='rainbowgif' className='rainbowgif'/><br/>
         <div className='lesson-textdiv'>
            <h2>課程名稱：</h2>
            <p>植物生長調節劑</p>
            <p>森林遺傳工程</p>
            <p>林業生物技術概論</p>
            <p>科學論文檢索、導讀與寫作</p>
            <p>林木育種技術</p>
            <p>林木組織培養</p>
            <p>林木遺傳學概論</p>
            <p>林木生理學</p>
         </div>
         <div className='backhome'>
            <NavLink to='/'><img src="https://photos.smugmug.com/photos/i-fkWLwcT/0/16635ef1/O/i-fkWLwcT.gif" alt="home" className='backhomeimg'/></NavLink>
         </div>
       </div>
    );
}
 
export default Lesson;