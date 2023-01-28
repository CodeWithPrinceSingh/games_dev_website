import './team.css'
import Tcard from './t-card/Tcard'
import ava1 from '../../../assets/ava1.png' ;
import ava2 from '../../../assets/ava2.png' ;
import ava3 from '../../../assets/ava3.png' ;
import ava4 from '../../../assets/ava4.png' ;


const Team = () => {
	return (
		<div className ="section-one-padding">
			<div className="team">
				<h3> Our Team</h3>
				<div className="t-cards">
					<Tcard src={ava1} name="John Peter" job="CEO" />
					<Tcard src={ava2} name="John Peter" job="CEO"/>
					<Tcard src={ava3} name="John Peter" job="CEO"/>
					<Tcard src={ava4} name="John Peter" job="CEO"/>
				</div>
			</div>
		</div>
		)
}
export default Team