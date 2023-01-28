import './card.css'


const Card = (props) =>{
	return(
		<div className="card" >
			<p className={props.color}>Lorem ipsum</p>
			<h4>Lorem ipsum</h4>
			<p>Lorem Ipsum
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
		</div>
		)
}

export default Card 