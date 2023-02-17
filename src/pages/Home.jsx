import Navbar from "../Navbar";
import Slider from "../components/Slider"
import './home.css'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent';
const Home  = () =>{
    return (
        <>
        <div id="home-content">
        <Navbar/>
        <Slider/>
        {/* <HomeContent/> */}
        <Footer/>
        </div>
        </>
    )
}
export default Home;