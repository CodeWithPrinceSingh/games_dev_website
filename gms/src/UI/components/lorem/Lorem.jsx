import './lorem.css'
import banner from '../../../assets/Rectangle4.png' ;


const Lorem = ()=>{
	return(
		<div className = 'lorem section-one-padding' >
			<div className ='lorem-txt'>
				<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
			</div>
			<div className ='lorem-desc'>
				<h4>Lorem ipsum</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

			</div>
			<div className="lorem-banner">
				<img src={banner} alt="Banner"/>
			</div>

		</div>
		)
}
export default Lorem