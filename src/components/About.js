import React from 'react';
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import { Table } from 'react-bootstrap';
import './page.css';

function About () {
    return (
            <div>
               <Helmet>
                  <title>研究室簡介</title>
               </Helmet>
               <ScrollUpButton />
               <div className='textdiv'>
                  <img src='https://photos.smugmug.com/photos/i-PxbpdmD/0/8de28020/X4/i-PxbpdmD-X4.gif' alt='logo' className='about-logo'/><br/>
                  <img src='https://photos.smugmug.com/photos/i-TF8hXxJ/0/2030a43c/O/i-TF8hXxJ.gif' alt='rainbowgif' className='rainbowgif'/><br/>
                  <h1 className="page-name">研究室簡介</h1>
                  <h2>研究方向及興趣</h2>
                  <p>從事植物組織培養基礎性之研究 ，並以森林樹種為研究重心。 經由組織培養方法以達成大量繁殖、育種或保育等目的。</p>
                  <p>從事針葉樹體胚繁殖之模式研究，以台灣雲杉為研究基礎，探討誘導體胚發育之各項變因。</p>
                  <p>開發研創新的植物組織培養方法，以滿足經濟生產需求。</p>
                  <p>利用農桿菌轉殖方法，建立植物毛狀根培養系統以提取二次代謝物進行醫療或保健利用。 </p>
                  <h2>研究室簡史</h2>
                  <p>本研究室於1993年夏秋之際初創，研究室主持人應聘擔任國立嘉義農專森林資源管理科教職，遂開始逐步規劃建設各項教學研究設備，陸續籌設實驗室、細胞培養室、溫室及育苗苗圃等。</p>
                  <p>1995 年首度接受農委會委託計劃，開始台灣雲杉之組織培養研究至今。2001 年亦接受國科會補助進行體胚發育調控因子之探討。</p>
                  <p>隨著學校於1998及2000年逐步改制為技術學院並升格為大學，研究室陸續增加研究人力，對台灣二葉松、濕地松、台灣赤楊等樹種進行了初步的組織培養研究。
                     近年來則擴大繁殖研究對象，針對真菌(松茸及牛樟芝)、觀賞或稀有蕨類(鹿角蕨、鹵蕨、筆筒樹、紫萁)、單子葉植物(藥用或原生蘭花、加州藜蘆)、雙子葉植物(草本食蟲植物、木本殼斗科、杜鵑科 、薔薇科梅屬等闊葉樹種)進行培養試驗。另外又將研究成果，應用在特定植物的保育工作，培育寬葉毛氈苔、槲櫟、筆筒樹、台灣柯等苗木進行相關復育工作。</p>
                  <p>2010年開始，本研究室與本校應用化學系教師合作，利用農桿根群菌接種轉殖組織培養的植物材料，建立了泡桐、落花生、虎杖及細本山葡萄的毛狀根培養系統，從中提取二次代謝物如洋丁香酚苷或白藜蘆醇等供藥用或保健利用。</p>    
                  <h2>近期研究成果展示</h2>
               </div>
               <Table className='about-table' size='sm' borderless>
                  <tbody>
                     <tr>
                        <td>
                           <img src='https://photos.smugmug.com/photos/i-kDvkg9h/0/a1591c8a/O/i-kDvkg9h.jpg' className='about-img' alt='img'/>
                           <img src='https://photos.smugmug.com/photos/i-F4mjB3r/0/1dca018a/O/i-F4mjB3r.jpg' className='about-img' alt='img'/>
                           <img src='https://photos.smugmug.com/photos/i-chz4tZx/0/9e0adaf6/O/i-chz4tZx.jpg' className='about-img' alt='img'/>
                           <img src='https://photos.smugmug.com/photos/i-8JChhm7/0/0183fbef/O/i-8JChhm7.jpg' className='about-img' alt='img'/>
                           <img src='https://photos.smugmug.com/photos/i-rwfkWbj/0/4a8da65d/O/i-rwfkWbj.jpg' className='about-img' alt='img'/>
                           <img src='https://photos.smugmug.com/photos/i-pKpJFXR/0/b7c0ec52/O/i-pKpJFXR.jpg' className='about-img' alt='img'/>
                           <img src='https://photos.smugmug.com/photos/i-3PJPF5F/0/6b42f046/O/i-3PJPF5F.jpg' className='about-img' alt='img'/>
                           <img src='https://photos.smugmug.com/photos/i-dtdZVV4/0/cfd3acc5/O/i-dtdZVV4.jpg' className='about-img' alt='img'/>
                           <img src='https://photos.smugmug.com/photos/i-nVhzBzP/0/b57ddf12/O/i-nVhzBzP.jpg' className='about-img' alt='img'/>
                           <img src='https://photos.smugmug.com/photos/i-TjKhk3L/0/dce9f6fb/O/i-TjKhk3L.jpg' className='about-img' alt='img'/>
                           <img src='https://photos.smugmug.com/photos/i-mKpj2F7/0/5bd2d2f7/O/i-mKpj2F7.jpg' className='about-img' alt='img'/>
                           <img src='https://photos.smugmug.com/photos/i-tfSdbsQ/0/3b6b9322/O/i-tfSdbsQ.jpg' className='about-img' alt='img'/>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <div className='backhome'>
                  <NavLink to='/'><img src="https://photos.smugmug.com/photos/i-fkWLwcT/0/16635ef1/O/i-fkWLwcT.gif" alt="home" className='backhomeimg'/></NavLink>
               </div>
            </div>
    );
}

export default About;