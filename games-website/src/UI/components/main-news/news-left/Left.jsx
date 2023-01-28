import './left.css';
import dance from '../../../../assets/Rectangle24.png' ;
import robot from '../../../../assets/Rectangle26.png';
import Lcard from './left-card/Lcard';

export default function Left () {
	return (
		<div className="left">
			<Lcard img={dance}  class="blues" secondp="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
			<hr />
			 <Lcard img={robot}  class="blues"  />
		 </div>
		)
}