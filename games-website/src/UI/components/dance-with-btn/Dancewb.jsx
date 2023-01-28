import '../dance/dance.css'


const Dancewb = (props) => {
	return (
		<div className="section-one-padding">
			<div className={props.class}>
				<div className='dance-img'>
					<img src={props.src} alt='dance-img' />
				</div>
				<div className='dance-txt'>
					<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<button type="button" className="primary-button read-more" >Read More</button>
				</div>
			</div>
		</div>
		)
}
export default Dancewb