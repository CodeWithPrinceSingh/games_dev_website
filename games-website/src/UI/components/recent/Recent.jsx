import './recent.css'
import rec_img_1 from '../../../assets/Rectangle15.png'
import rec_img_2 from '../../../assets/Rectangle16.png'
import rec_img_3 from '../../../assets/Rectangle17.png'
import rec_img_4 from '../../../assets/Rectangle18.png'
import rec_img_5 from '../../../assets/Rectangle19.png'
import rec_img_6 from '../../../assets/Rectangle20.png'


const Recent = () =>{
	return(
	
		<div className="recent section-one-padding">
			<div className="recent-head">
				<h3>Our Recent Project</h3>
				<p className="head-disc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			</div>			
			<div className ="recent-image">
			<img src={rec_img_1} alt="" />
			<img src={rec_img_2} alt="" />
			<img src={rec_img_3} alt="" />
			<img src={rec_img_5} alt="" />
			<img src={rec_img_4} alt="" />
			<img src={rec_img_6} alt="" />
			</div>
			<div className="see-all-btn">
			<button type="button" className ="secondary-button">SEE ALL</button>
			</div>
			
		</div>
		)
}
export default Recent