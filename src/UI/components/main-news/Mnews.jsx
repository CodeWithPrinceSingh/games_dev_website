import './mnews.css'
import Left from './news-left/Left';
import Right from './news-right/Right';


export default function Mnews ()
{
	return (
		<div className='section-one-padding'>
				<div className="grid-layout">
					<Left />
					<Right />
				</div>
			</div>
		)
}