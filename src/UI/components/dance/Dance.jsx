import './dance.css'
import dance from '../../../assets/Rectangle24.png' ;

const Dance = () => {
	return (
		<div className="section-one-padding">
			<div className='dance'>
				<div className='dance-img'>
					<img src={dance} alt='dance-img' />
				</div>
				<div className='dance-txt'>
					<p>Lorem ipsum</p>
					<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
			
				</div>
			</div>
		</div>
		)
}
export default Dance