import Sidenav from '../components/Sidenav';
import './dashboard.css'
import profilePic from '../assets/profilepic.png'
import DashboardItem from '../components/DashboardItem';
import Badge from '../assets/badge.png';
import TabList from '../components/TabList';
import TabStock from '../components/TabStock';
import Prescription from '../components/Prescription';
import Charts from '../components/Charts';
import Calendar from '../components/Calendar';
import Streaks from '../components/Streaks';
const Dashboard = () =>{
    return(
        <>
        <div id="content">
        <Sidenav/>
        <div id='user-details'>

            <div id='profile'>
                
                <img id='profile-pic' src={profilePic}></img>
                <div id='uname'>
                <h2 id='name'>John Doe</h2>
                
                <p id='email'>example@gmail.com</p>
                </div>
            </div>
            
            <div id='info'>
                <div id='details'>
                    <p>Age : 23</p>
                    <p>Height : 171cm</p>
                    <p>Weight : 60kg</p>
                </div>
            
                <div id='badge-container'>
                    <img id='badge' src={Badge}/>
                    <p>Gold Member</p>
                </div>
            </div>

            <div id='doctors'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Ph. Number</th>
                        <th>Address</th>
                    </tr>
                    <tr>
                        <td>Doctor Lorem</td>
                        <td>9393183918</td>
                        <td>Lorem ipsum dolor sit amet</td>
                    </tr>
                    <tr>
                        <td>Doctor Lorem</td>
                        <td>9393183918</td>
                        <td>Lorem ipsum dolor sit amet</td>
                    </tr>
                    <tr>
                        <td>Doctor Lorem</td>
                        <td>9393183918</td>
                        <td>Lorem ipsum dolor sit amet</td>
                    </tr>
                    
                </table>
            </div>
           
            <div id='tips'>
                <span>Tip of the day:</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptate voluptatibus? Id repellendus soluta doloremque cum architecto, qui distinctio corrupti! Ab error numquam labore quibusdam aliquid incidunt illo, nulla excepturi!</p>
            </div>
          
        </div>
        <div id='dash-components'>
            
            <div id='r1'>
            <div id='c1' className='component' style={{flexGrow:6, maxWidth:"20vw"}}><TabList/></div>  {/* Pass a parameter to DashboardItem which will select the particular component */}
          
            <div id='c2' className='component' style={{flexGrow:4, maxWidth:"25vw"}}><TabStock/></div>
           
            <div id='c3' className='component' style={{flexGrow:5, maxWidth:"20vw"}}><Prescription/></div>
            </div>

            <div id='r2'>
            <div id='c4' className='component' style={{flexGrow:6}}><Charts/></div>
            
            <div id='c5' className='component' style={{flexGrow:6}}><Calendar/></div>
          
            <div id='c6' className='component' style={{flexGrow:6}}><Streaks/></div>
            </div>
        </div>
         
        </div>
        
        </>
    )
}
export default Dashboard;