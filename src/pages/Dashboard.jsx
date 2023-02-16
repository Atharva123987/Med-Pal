import Sidenav from '../components/Sidenav';
import './dashboard.css'
import profilePic from '../assets/profilepic.png'
import DashboardItem from '../components/DashboardItem';
import Badge from '../assets/badge.png';
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
                    <h5>Gold Member</h5>
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
                <h4>Tip of the day:</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptate voluptatibus? Id repellendus soluta doloremque cum architecto, qui distinctio corrupti! Ab error numquam labore quibusdam aliquid incidunt illo, nulla excepturi!</p>
            </div>
          
        </div>
        <div id='dash-components'>
            
            <div id='r1'>
            <div id='c1' className='component' style={{flexGrow:6}}><DashboardItem/></div>  {/* Pass a parameter to DashboardItem which will select the particular component */}
          
            <div id='c2' className='component' style={{flexGrow:2}}><DashboardItem/></div>
           
            <div id='c3' className='component' style={{flexGrow:5}}><DashboardItem/></div>
            </div>

            <div id='r2'>
            <div id='c4' className='component' style={{flexGrow:6}}><DashboardItem/></div>
            
            <div id='c5' className='component' style={{flexGrow:6}}><DashboardItem/></div>
          
            <div id='c6' className='component' style={{flexGrow:6}}><DashboardItem/></div>
            </div>
        </div>
         
        </div>
        
        </>
    )
}
export default Dashboard;