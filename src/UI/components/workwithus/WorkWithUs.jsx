import './work-with-us.css'
import Card from './card/Card'

const WorkWithUs = () =>{
	return (
		<div className="work-with-us section-one-padding">
			<div className="head-cards">
			<h3>Why work with us </h3>
			<div className="cards">
				<Card color="color-1"/>
				<Card color="color-2"/>
				<Card color="color-3"/>
			</div>
			</div>
		</div>
		)
}
export default WorkWithUs