import Navbar from "../components/Navbar";
import './home.css'
import '../index.css'
import HomeContent from '../components/HomeContent'
import Footer from '../components/Footer'
import Carousel from "../components/Carousel";
import { SliderData } from '../assets/SliderData';
const Home  = () =>{
    return (
        <>
        <div id="home-content">
        <Navbar/>
        <Carousel slides={SliderData}/> 
            {/* Should have rounded border on bottom */}
        {/* <HomeContent/> */}
        {/* <h1 className="text-white bg-red-500">HERERERERLELRER</h1> */}
        {/* <Footer/> */}
        </div>
        </>
    )
}
export default Home;