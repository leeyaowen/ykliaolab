import React from 'react';
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import './page.css';


function Host () {
    return (
       <div>
         <Helmet>
            <title>主持人</title>
         </Helmet>
         <ScrollUpButton />
         <h1 className="page-name">主持人</h1>
         <img src='https://photos.smugmug.com/photos/i-TF8hXxJ/0/2030a43c/O/i-TF8hXxJ.gif' alt='rainbowgif' className='rainbowgif'/><br/>
         <img src="https://photos.smugmug.com/photos/i-MftHjht/0/5fbbf5d5/O/i-MftHjht.gif" alt="host" className='host-img' /><br/>
         <div className='textdiv'>
            <h2 className='host-h'>姓名: 廖宇賡 (Yue Ken Liao)</h2>
            <p className='host-p'>現職:森林暨自然資源學系&nbsp;教授&nbsp;(2015/08--- )</p>
            <h3 className='host-h'>學歷:</h3>
            <p className='host-p'>1987/08-1993/08<br/>美國 North Carolina State Univ.<br/>森林研究所&nbsp;博士</p>
            <p className='host-p'>1983/08-1985/08<br/>國立台灣大學<br/>森林研究所&nbsp;碩士</p>
            <p className='host-p'>1977/08-1981/08<br/>中國文化大學<br/>森林系&nbsp;學士</p>
            <h3 className='host-h'>經歷:</h3>
            <p className='host-p'>1993/08-2015/07<br/>國立嘉義大學&nbsp;森林暨自然資源學系&nbsp;副教授</p>
            <p className='host-p'>2010/01-2011/12<br/>中華林學會&nbsp;學術專員</p>
            <p className='host-p'>2006/08-2007/01<br/>國立嘉義大學&nbsp;農學研究所&nbsp;特別助理</p>
            <p className='host-p'>2002/08-2005/07<br/>國立嘉義大學&nbsp;森林學系&nbsp;系主任</p>
            <p className='host-p'>1997/05-1998/05<br/>中華自然資源保育協會&nbsp;秘書長</p>
            <p className='host-p'>1993/08-1998/07<br/>國立嘉義農專&nbsp;森林資源管理科&nbsp;科主任</p>
            <p className='host-p'>1985/08-1987/08<br/>林務局文山處&nbsp;技術助理員</p>
         </div>
         <div className='backhome'>
            <NavLink to='/'><img src="https://photos.smugmug.com/photos/i-fkWLwcT/0/16635ef1/O/i-fkWLwcT.gif" alt="home" className='backhomeimg'/></NavLink>
         </div>
       </div>
    );
}
 
export default Host;