import './cart.css'
import { AiFillFire } from 'react-icons/ai';


const Cart = (props) => {
	return(
		<div className="cart">
			<img src={props.src} alt="Cart"/>
		<p className = "trend-p">{<AiFillFire/>} 40 Followers</p>
		</div>
		)
}
export default Cart