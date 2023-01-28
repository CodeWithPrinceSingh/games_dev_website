import {BsArrowRight} from 'react-icons/bs'
import './abouthero.css'
import about_hero_banner from '../../../assets/Rectangle26.png'
 const AboutHero = () => {
	return (
		<div className ='about-hero section-one-padding'>
		 <div className="about-hero-main">
		 	<div className="about-hero-txt">
		 		<p>Home <span>>About us</span></p>
		 		<h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
		 		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
		 		<button type="button" className="primary-button get-in-tauch">Get in touch  <BsArrowRight /></button>
		 	</div>
		 	<div className="about-hero-img">
		 		<img src={about_hero_banner} alt="about-banner" />
		  </div>
		 </div>
		</div>
		)
}
export default AboutHero 