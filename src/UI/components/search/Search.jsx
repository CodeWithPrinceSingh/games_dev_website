import './search.css'
import {BsSearch} from 'react-icons/bs'

export default function Search () {
	return (
		<div className='search-main'>
		<div className="search">
			<div className="search-icon">
				<BsSearch />
			</div>
			<div className="search-inp">
				<input type="text" placeholder="Search"/>
			</div>
		</div>
		</div>
		)
}