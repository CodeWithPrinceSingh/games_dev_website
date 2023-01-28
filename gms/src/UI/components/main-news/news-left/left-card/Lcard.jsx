import './lcard.css'

export default function Lcard (props) {
		const className = "primary-button "+props.class;

	return (
		<div className="lcard">
			<div className="lcard-img">
			<img src={props.img} alt="img"/>
			</div>
			<div className="news-btns">
				<button className={className}> Jhon Smash </button>
				<p>.5 min</p>
			</div>
			<h3>Lorem Ipsum is simply dummy text of the printing</h3>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
			<p>{props.secondp}</p>
		</div>
		)
}