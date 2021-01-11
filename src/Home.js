import './Home.css';
import { NavLink } from "react-router-dom";
import { Table } from 'react-bootstrap';
import {Helmet} from "react-helmet";


function Home() {
    return(
        <div className='App'>
            <Helmet>
                <title>林木生理遺傳研究室-clone</title>
            </Helmet>
            <Table className='home-table' bordered>
                <tbody>
                    <tr>
                        <td>
                            <img src='https://photos.smugmug.com/photos/i-9tQMRt7/0/d7529e6c/O/i-9tQMRt7.jpg' className="home-banner" alt='home-banner'/><br/>
                            <img src='https://photos.smugmug.com/photos/i-5ZvfvnL/0/d23db955/O/i-5ZvfvnL.gif' className="welcomegif" alt='welcomegif'/><br/>              
                            <img src='https://photos.smugmug.com/photos/i-3ZKSqnk/0/4c6691bb/O/i-3ZKSqnk.gif' className="leafgif" alt='leafgif'/>
                            <img src='https://photos.smugmug.com/photos/i-3ZKSqnk/0/4c6691bb/O/i-3ZKSqnk.gif' className="leafgif-flipx" alt='leafgif'/><br/>
                            <NavLink to='/About'><img src='https://photos.smugmug.com/photos/i-SZwhDW3/0/838e0130/O/i-SZwhDW3.gif' alt='about' className='home-pageimglink'/></NavLink>
                            <NavLink to='/Host'><img src='https://photos.smugmug.com/photos/i-fkJL494/0/3e74ae9f/O/i-fkJL494.gif' alt='host' className='home-pageimglink'/></NavLink>
                            <NavLink to='/Member'><img src='https://photos.smugmug.com/photos/i-JGC5hxv/0/b79d0f9f/O/i-JGC5hxv.gif' alt='member' className='home-pageimglink'/></NavLink>
                            <NavLink to='/Lesson'><img src='https://photos.smugmug.com/photos/i-QPC9h65/0/4951aee6/O/i-QPC9h65.gif' alt='lesson' className='home-pageimglink'/></NavLink><br/>
                            <NavLink to='/Research'><img src='https://photos.smugmug.com/photos/i-H998DtW/0/6bc7956f/O/i-H998DtW.gif' alt='about' className='home-pageimglink'/></NavLink>
                            <NavLink to='/Publish'><img src='https://photos.smugmug.com/photos/i-fRPZqNS/0/bdf8643f/O/i-fRPZqNS.gif' alt='about' className='home-pageimglink'/></NavLink>
                            <NavLink to='/Student_porject'><img src='https://photos.smugmug.com/photos/i-Bw2LkNP/0/cdbbb5fd/O/i-Bw2LkNP.gif' alt='about' className='home-pageimglink'/></NavLink>
                            <NavLink to='/Contact'><img src='https://photos.smugmug.com/photos/i-BGBb3VD/0/db9111df/O/i-BGBb3VD.gif' alt='about' className='home-pageimglink'/></NavLink>
                            <p className='home-text'>國立嘉義大學森林暨自然資源學系(蘭潭校區)</p>
                            <p className='home-text'>60004嘉義市鹿寮里學府路300號</p>
                            <p className='home-text'>05- 2717471</p>
                            <p className='home-text'>FAX: 05-2775852</p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Home;
