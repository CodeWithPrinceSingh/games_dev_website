import './trendgames.css'
import Cart from './g-cart/Cart'
import img1 from '../../../assets/Rectangle23.png' 
import img2 from '../../../assets/Rectangle24.png'
import img3 from '../../../assets/Rectangle25.png'
import img4 from '../../../assets/Rectangle26.png'


const Trendgames = () =>{ 


return(<div className="trendgames__warpper section-one-padding" >
<div className="trendgames-header">
<h5 className="trendgames-header-text">Currently Trending Games</h5>
<button type="botton" className="secondary-button trendgames-header-botton">SEE ALL</button>
</div>
<div className ="trendgames-cart">
	<div className="g-cart">
		<Cart src={img1}/>
		<Cart src={img2}/>
		<Cart src={img3}/>
		<Cart src={img4}/>
		<Cart src={img1}/>
	</div>
</div>
</div>
)
}

export default Trendgames