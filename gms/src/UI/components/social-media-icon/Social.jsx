import './social.css'
import  {BsFacebook,BsTwitter,BsLinkedin,BsWhatsapp} from 'react-icons/bs'

const Social = () =>{
	return (
			<div className="social-media">
				<ul>
						<li><a href="/"><BsFacebook /></a></li>
						<li><a href="/"><BsWhatsapp /></a></li>
						<li><a href="/"><BsTwitter /></a></li>
						<li><a href="/"><BsLinkedin /></a></li>
					</ul>
			</div>
			)
}
export default Social