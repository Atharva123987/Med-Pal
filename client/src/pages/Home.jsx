import Navbar from "../Navbar";
import Slider from "../components/Slider"
import './home.css'
import '../index.css'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent';
const Home  = () =>{
    return (
        <>
        <div id="home-content">
        <Navbar/>
        {/* <Slider/> */}
        <HomeContent/>
        <h1 className="text-white bg-red-500">HERERERERLELRER</h1>
        <Footer/>
        </div>
        </>
    )
}
export default Home;