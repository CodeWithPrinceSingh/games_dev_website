import './right.css'
import Rcard from './right-card/Rcard';
import img1 from '../../../../assets/img1.png';
import img2 from '../../../../assets/img2.png';
import img3 from '../../../../assets/img3.png';
import img4 from '../../../../assets/img4.png';
import img5 from '../../../../assets/img5.png';
import img6 from '../../../../assets/img6.png';
import img7 from '../../../../assets/img7.png';

export default function Right () {
	return (
		<div className="right">
			<Rcard img={img1} class="pink" />
			<Rcard img={img2} class="blue" />
			<Rcard img={img3} class="red" />
			<Rcard img={img4} class="blue" />
			<Rcard img={img5} class="green" />
			<Rcard img={img6} class="blue" />
			<Rcard img={img7} class="voilet" />
		</div>
		)
}