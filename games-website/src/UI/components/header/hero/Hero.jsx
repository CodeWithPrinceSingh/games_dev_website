import './hero.css'
import heroimg from '../../../../assets/games.png' ;
import cry from '../../../../assets/cry.png' ;
import unreal from '../../../../assets/unreal.png' ;
import unity from '../../../../assets/unity.png' ;


const Hero = () =>{

	return(
		<div className = "hero " > 
		<div className ="hero-container section-one-padding" >
		<div className ="hero__work-container" >
			<p className="game-dev">3D game Dev</p>
			<h3 className = "work-text-head">Work that we produce for our clients</h3>
			<p className="work-decs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
			<button type="button" className="primary-button more">Get more details </button>
		</div>
		<div className="hero__image-container">
		<img className="hero__image" src={heroimg} alt="Hero Games"/>
		</div>
		</div>
		<img src={cry} className="cry none" alt="cry"/>
		<img src={unreal} className="unreal none" alt="unreal"/>
		<img src={unity} className="unity none" alt="unity"/>
		</div>
		);
}
export default Hero