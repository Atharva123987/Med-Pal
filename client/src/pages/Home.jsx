import Navbar from "../components/Navbar";
import './home.css'
import '../index.css'
import HomeContent from '../components/HomeContent'
import Footer from '../components/Footer'
import Carousel from "../components/Carousel";
import { CarouselData } from '../assets/CarouselData';
const Home = () => {
    return (
        <>
            <div id="home-content" >
                <Navbar buttons={true} />
                <Carousel slides={CarouselData}/>
                <HomeContent/>
                <Footer/>
            </div>
        </>
    )
}
export default Home;
