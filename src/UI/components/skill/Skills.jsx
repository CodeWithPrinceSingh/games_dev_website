import './skills.css'
import{MdDeveloperMode} from 'react-icons/md'
import{BsArrowRight} from 'react-icons/bs'
import{SiPcgamingwiki} from 'react-icons/si'
import{SiGamejolt} from 'react-icons/si'
import{GiAmericanFootballHelmet} from 'react-icons/gi'
import{BiCodeBlock} from 'react-icons/bi'
import{BsShieldLockFill} from 'react-icons/bs'



const Skills = ()=>{
	return (
		<div className ="skill">
		<div className ="skill-head section-two-padding">
			<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
		</div>
		<div className ="skiil-details">
		<div className = "skill-d">
			<div className="skill-logo">
					<MdDeveloperMode />
			</div>
			<div className="skill-title">
				Mobile Game Development
			</div>
			<div className="arrow">
				<BsArrowRight />
			</div>	
		</div>
		<div className = "skill-d">
				<div className="skill-logo">
					<SiPcgamingwiki />
			</div>
			<div className="skill-title">
				PC Game Development
			</div>
			<div className="arrow">
				<BsArrowRight />
			</div>
		</div>
		<div className = "skill-d">
			<div className="skill-logo">
					<SiGamejolt />
			</div>
			<div className="skill-title">
				PS4 Game Development
			</div>
			<div className="arrow">
				<BsArrowRight />
			</div>
		</div>
		<div className = "skill-d">
				<div className="skill-logo">
					<GiAmericanFootballHelmet />
			</div>
			<div className="skill-title">
				AR/VR Solutions
			</div>
			<div className="arrow">
				<BsArrowRight />
			</div>
		</div>
		<div className = "skill-d">
				<div className="skill-logo">
					<BiCodeBlock />
			</div>
			<div className="skill-title">
				AR/VR Designs
			</div>
			<div className="arrow">
				<BsArrowRight />
			</div>
		</div>
		<div className = "skill-d">
				<div className="skill-logo">
					<BsShieldLockFill />
			</div>
			<div className="skill-title">
				3D Modellings
			</div>
			<div className="arrow">
				<BsArrowRight />
			</div>
		</div>

		</div>
		</div>
		)
}
export default Skills