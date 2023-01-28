import {Link} from 'react-router-dom'
import './footer.css'
import logo from '../../../assets/logo.png'
import Social from '../social-media-icon/Social'


const Footer = () =>{
	return (
		<div className="footer">
			<div className="footer-col-1">
				<div className="row">
					<ul>
						<li><img src={logo} alt="Logo"/></li>
						<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
						<li>@PKS</li>
					</ul>
				</div>
				<div className="row">
					<ul>
						<li><Link to="/about">About us</Link></li>
						<li><Link to="/">Zeux</Link></li>
						<li><Link to="/Profolio">Profolio</Link></li>
						<li><Link to="/">Careers</Link></li>
						<li><Link to="/Contect">Contect us</Link></li>
					</ul>
				</div>
					<div className="row">
					<ul>
						<li>Contect us</li>
						<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
						<li>+908 89097 890</li>
					</ul>
				</div>
				<Social />
			</div>
			<hr />
			<div className="footer-col-2">
				<p className="copyright">Copyright &copy; 2023 all right rceverd</p>
			</div>
		</div>
		)
}

export default Footer