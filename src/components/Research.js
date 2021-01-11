import React from 'react';
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Table } from 'react-bootstrap';
import './page.css';

function Research () {
    return (
       <div>
          <Helmet>
            <title>研究專題計畫</title>
         </Helmet>
         <h1 className="page-name">研究專題計畫</h1>
         <img src='https://photos.smugmug.com/photos/i-TF8hXxJ/0/2030a43c/O/i-TF8hXxJ.gif' alt='rainbowgif' className='rainbowgif'/><br/>
         <div className='research-table-div'>
            <Table responsive='md' hover className='research-table' size='sm' borderless>
               <tbody>
                  <tr>
                     <td>2020/01-2020/12</td>
                     <td>新竹縣政府</td>
                     <td>109年度新竹地區槲櫟 原生地復育與族群監測、生育地管理維護及區外栽植植株監測保育計畫(共同主持)</td>
                  </tr>
                  <tr>
                     <td>2020/09-2021/08</td>
                     <td>嘉義林區管理處</td>
                     <td>阿里山國家森林遊樂區櫻花組織培養繁殖之研究(Ⅱ)</td>
                  </tr>
                  <tr>
                     <td>2020/01-2020/03</td>
                     <td>屏東林區管理處</td>
                     <td>因應氣候變遷對南仁山地區特、稀有樹種唐杜鵑、台灣石櫟及希蘭灰木之保育繁殖計畫(Ⅳ)</td>
                  </tr>
                  <tr>
                     <td>2020/02-2021/01</td>
                     <td>BGCI</td>
                     <td>收集與保育臺灣特有樹種臺灣石櫟(2020)</td>
                  </tr>
                  <tr>
                     <td>2019/08-2020/07</td>
                     <td>嘉義林區管理處</td>
                     <td>阿里山國家森林遊樂區櫻花組織培養繁殖之研究(I)</td>
                  </tr>
               </tbody>
            </Table>
            <h2 className="page-name">WIP......<br/><br/><br/></h2>
         </div>
         <div className='backhome'>
            <NavLink to='/'><img src="https://photos.smugmug.com/photos/i-fkWLwcT/0/16635ef1/O/i-fkWLwcT.gif" alt="home" className='backhomeimg'/></NavLink>
         </div>
       </div>
    );
}
 
export default Research;