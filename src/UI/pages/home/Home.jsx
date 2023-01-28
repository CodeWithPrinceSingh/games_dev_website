import './home.css'
import Header from '../../components/header/Header'
import Trendgames from '../../components/trendgames/Trendgames'
import Lorem from '../../components/lorem/Lorem'
import Skills from '../../components/skill/Skills'
import Recent from '../../components/recent/Recent'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer' 

const Home = () =>{

	return(
		<div className = "home" > 
		<Header />
		<Trendgames />
		<Lorem />
		<Skills />
		<Recent />
		<Subscribe />
		<Footer />
		</div>
		);
}
export default Home