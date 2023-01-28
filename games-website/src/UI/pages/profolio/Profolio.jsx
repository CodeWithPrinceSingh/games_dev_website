import './profolio.css'
import dance from '../../../assets/Rectangle24.png' ;
import rec_img_26 from '../../../assets/Rectangle26.png' ;
import rec_img_25 from '../../../assets/Rectangle25.png' ;
import Nav from '../../components/header/nav/Nav'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import Texthead from '../../components/text-head/Texthead'
import Dancewb from '../../components/dance-with-btn/Dancewb'
import Ccp from '../../components/ccp/Ccp'
import Video from '../../components/video/Video'
import Slider from '../../components/slider/Slider'



const Profolio = () =>{

	return(
		<div className = "profolio" > 
			<Nav />
			<Texthead text="Service"/>
			<Ccp />
			<Video />
			<Dancewb src={rec_img_26} class="dances"/>
			<Dancewb src={dance} class="dancef"/>
			<Dancewb src={rec_img_25} class="dances"/>
			<Slider />
			<Subscribe />
			<Footer />
		</div>
		);
}
export default Profolio