import {Link} from 'react-router-dom'
import './nav.css';
import logo from '../../../../assets/logo.png' ;
import { AiOutlineMenuFold } from 'react-icons/ai';
import { FaSkullCrossbones } from 'react-icons/fa';
import {useState} from 'react'


const Nav = () => {
	const [toggle,setToggle] = useState(false)

	const NavLinks = () => <>
	<li className="nav-link"><Link to="/">Home</Link></li>
	<li className="nav-link"><Link to="/About">About Us</Link></li>
	<li className="nav-link"><Link to="/service">Service</Link></li>
	<li className="nav-link"><Link to="/News">News</Link></li>
	</>


	return (

	<div className="nav section-two-padding">
	<div className = "pks__nav-logo">
	<img src={logo} alt="logo" />
	</div>
	<div className ="pks__nav-links" >
	<ul>
	<div className="pks__nav-links-container">
	<NavLinks />
	</div>
		<button type="button" className="contect-btn primary-button"><Link to="/Contect"> Contect</Link></button>
	<div className ="menu-icon">
			{toggle ? <FaSkullCrossbones onClick = {()=>setToggle(false)}/>
			:<AiOutlineMenuFold onClick = {()=>setToggle(true)}/>
		}
		{
			toggle && (<div className = "toggle__menu-items">
				<NavLinks />
				</div>)
		}
			</div>
		
	</ul>
	</div>


	</div>
	);
}
export default Nav