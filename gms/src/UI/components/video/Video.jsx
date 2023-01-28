import './video.css'
import video from '../../../assets/Video.png' ;
import {MdDone} from 'react-icons/md'

const Video = () =>{
	return (
		<div className="section-one-padding">
			<div className="video">
				<div className="video-img">
					<img src={video} alt="video-img" />
				</div>
				<div className="video-txt">
				<h3>Lorem Ipsum is simply dummy text.</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
				<p> <MdDone /> Lorem Ipsum is simply</p>
				<p > <MdDone />Lorem Ipsum is simply</p>
				<p> <MdDone /> Lorem Ipsum is simply</p>
				<p><MdDone /> Lorem Ipsum is simply</p>
				</div>
			</div>
		</div>
		)
}
export default Video