import './location.css'
import map from '../../../assets/Global.png' ;
import Social from '../social-media-icon/Social'
import {FiPhoneCall} from 'react-icons/fi'
import {GoLocation} from 'react-icons/go'
import Texthead from '../text-head/Texthead'

const Location = () =>{
	return(
		 <div className="section-one-padding">

     <Texthead text="About"/>
  <div className="content-image">
    <img src={map} alt="map" />
</div>
<div className="location-txt">
  <div className="location-txt-content">
  <div className='follow'>
    <h5>Follow Us</h5>
    <Social />
    </div>
  </div>
  <div className="v-line">
    
  </div>
   <div className="location-txt-content">
  <p><FiPhoneCall /> +91 5749586858</p>
   </div>
     <div className="v-line">
   
     </div>
        <div className="location-txt-content">
  <p><GoLocation /> but also the leap into electronic typesetting</p>
   </div>
</div>
  </div>
		)
}
export default Location