import './tcard.css'

const Tcard = (props) => {
	return(
		<div className='tcard' >
		<img src={props.src} alt="work" />
		<h5>{props.name}</h5>
		<p>{props.job}</p>
		</div>
	)
}

export default Tcard