import React from 'react';
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import './page.css';


function Member () {
    return (
       <div>
          <Helmet>
            <title>研究室成員</title>
         </Helmet>
         <ScrollUpButton />
         <h1 className="page-name">研究室成員</h1>
         <img src='https://photos.smugmug.com/photos/i-TF8hXxJ/0/2030a43c/O/i-TF8hXxJ.gif' alt='rainbowgif' className='rainbowgif'/><br/>
         <div className='textdiv'>
            <h3>計畫助理</h3>
            <table className='member-table'>
               <tbody>
                  <tr>
                     <td>葉佩雯</td>
                     <td>觀賞櫻花之繁殖</td>
                  </tr>
               </tbody>
            </table>
            <h3>碩士研究生</h3>
            <table className='member-table'>
               <tbody>
                  <tr>
                     <td>李怡萱</td>
                     <td>相思樹組織培養研究</td>
                  </tr>
                  <tr>
                     <td>蔡佳蓉</td>
                     <td>蓖麻的組織培養</td>
                  </tr>
                  <tr>
                     <td>賴巧欣</td>
                     <td>筆筒樹組織培養</td>
                  </tr>
                  <tr>
                     <td>姚宣萍</td>
                     <td>櫻屬植物組織培養</td>
                  </tr>
                  <tr>
                     <td>柯品安</td>
                     <td>台灣水龍骨組織培養</td>
                  </tr>
                  <tr>
                     <td>容俊傑</td>
                     <td>輻射誘變育種</td>
                  </tr>
                  <tr>
                     <td>陳勖林</td>
                     <td>綴化現象之繁殖應用</td>
                  </tr>
                  <tr>
                     <td>吳瑜凌</td>
                     <td>櫻屬植物組織培養</td>
                  </tr>
                  <tr>
                     <td>陳易新</td>
                     <td>培養基成份最佳化研究</td>
                  </tr>
               </tbody>
            </table>
            <h3>大學部預研生</h3>
            <table className='member-table'>
               <tbody>
                  <tr>
                     <td>林昊影</td>
                     <td>蕨類的組織培養繁殖</td>
                  </tr>
                  <tr>
                     <td>林敬軒</td>
                     <td>細胞分裂素之比較</td>
                  </tr>
               </tbody>
            </table>
            <h3>大學部學士論文指導學生</h3>
            <table className='member-table'>
               <tbody>
                  <tr>
                     <td>黃怡安</td>
                     <td>生長抑制劑之應用</td>
                  </tr>
                  <tr>
                     <td>詹杰儒</td>
                     <td>光與種子發芽</td>
                  </tr>
                  <tr>
                     <td>許洛瑛</td>
                     <td>花粉活力之研究</td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className='backhome'>
            <NavLink to='/'><img src="https://photos.smugmug.com/photos/i-fkWLwcT/0/16635ef1/O/i-fkWLwcT.gif" alt="home" className='backhomeimg'/></NavLink>
         </div>
       </div>
    );
}

export default Member;