import './contect.css'
import Nav from '../../components/header/nav/Nav'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import Location from '../../components/location/Location'
import Contectform from '../../components/contect-form/Contectform'


const Contect = () =>{

	return(
		<div className = "contect" > 
			<Nav />
			<Location />
			<Contectform />
			<Subscribe />
			<Footer />
		</div>
		);
}
export default Contect