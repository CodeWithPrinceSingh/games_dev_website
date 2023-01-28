import './rcard.css'

export default function Rcard (props) {
	const className ="primary-button "+props.class
	return (
		<div className="rcard">
			<img src={props.img} alt="img1" />
			<div className="r-text">
				<div className="news-btns">
					<button className={className}> Jhon Smash </button>
					<p>.5 min</p>
				</div>
				<h4>Lorem Ipsum is simply dummy text of the printing</h4>
			</div>
		</div>
		)
}