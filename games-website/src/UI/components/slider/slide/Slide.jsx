import './slide.css'
import {AiFillStar} from 'react-icons/ai';



const Slide = (props) => {

	return (
			<div className="slide">
				<div className="profile-name-rating">
					<div className="profile-name">
						<div className="slide-profile-img">
							<img src={props.image} alt="profile" />
						</div>
						<div className="profile-name-txt">
							<p>{props.name}</p>
							<p className='loca'>{props.city}</p>

						</div>
					</div>
					<div className="rating">
						<span>{props.rating}</span> <span> <AiFillStar /> </span>
					</div>
				</div>
				<div className="slide-desc">
					<p>{props.desc} </p>
				</div>
				</div>
			
		)
}
export default Slide