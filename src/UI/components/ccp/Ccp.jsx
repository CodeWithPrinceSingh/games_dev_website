import './ccp.css'
import {FaUser} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {GoProject} from 'react-icons/go'


const Ccp = () => {
	return (
		<div className="section-one-padding">
			<div className="ccp">
				<div className="client">
					<div className="icon">
						<FaUser />
					</div>
					<div className='p-num'>
						<p className="num">90 +</p>
						<p>Clientes</p>
					</div>
				</div>
				<div className ="vl">
				</div>
				<div className="country">
					<div className="icon">
						<HiLocationMarker />
					</div>
					<div className='p-num'>
						<p className="num">30 +</p>
						<p>Countrys</p>
					</div>
				</div>
				<div className ="vl">
				</div>
				<div className="project">
				<div className="icon">
						<GoProject />
					</div>
					<div className='p-num'>
						<p className="num">50 +</p>
						<p>Projects</p>
					</div>
				</div>
			</div>
		</div>
		)
}
export default Ccp