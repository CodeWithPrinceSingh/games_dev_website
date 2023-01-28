import './slider.css'
import '../text-head/texthead.css'
import Slide from './slide/Slide'
import prince from '../../../assets/prince.jpg' ;
import ashu from '../../../assets/ashu.jpg' 
import akash from '../../../assets/akash.jpg' 
import ramraj from '../../../assets/ramraj.jpeg' 
import jhone from '../../../assets/jhone.jfif' 
import evilish from '../../../assets/evilish.jfif' 
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'

const Slider = () => {
	const slide = [
					{name:"Prince kumar singh",
					city:"Patna",
					image: prince,
					rating:"5",
					desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					},
					{
					name:"Akash kumar singh",
					city:"Siwan",
					image: akash,
					rating:"4.5",
					desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					},
					{
					name:"Ashu kumar singh",
					city:"Siwan",
					image: ashu,
					rating:"4.5",
					desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					},
					{
					name:"Ramraj Kumar",
					city:"Siwan",
					image: ramraj,
					rating:"4.3",
					desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					},
					{
					name:"John Done",
					city:"Siwan",
					image: jhone,
					rating:"4.2",
					desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					},
					{
					name:"EVilish Thoms",
					city:"USA",
					image: evilish,
					rating:"4",
					desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					}
					];

	
				let flag = 0;
				const sliding = document.getElementsByClassName('slide');
				
			
				function clickHandPrev(e){
					const slides = document.getElementById('slides');
					const next = document.getElementById('next');
					flag-=400;
					if(flag<0){
						flag=0;
						e.target.style.cssText = "background-color: gray; cursor: default;"
					}
					next.style.cssText = "background-color:#DC7000; cursor: pointer;"
					slides.style.left="-"+flag+"px";
				 }

				function clickHandNext(e){
					const slides = document.getElementById('slides');
					const prev = document.getElementById('prev');

					flag+=400;
					if(window.innerWidth>1200)
					{
					if(flag>400*(sliding.length-3))
					{
						flag=400*(sliding.length-3);
						e.target.style.cssText = "background-color: gray; cursor: default;"
					}
					else{
						e.target.style.cssText = "background-color:#DC7000; cursor: pointer;"
					}
				}

				if(window.innerWidth<=1050){
					if(flag>400*(sliding.length-2))
					{
						flag=400*(sliding.length-2);
						e.target.style.cssText = "background-color: gray; cursor: default;"
					}
					else{
						e.target.style.cssText = "background-color:#DC7000; cursor: pointer;"
					}
				}


				if(window.innerWidth<=450){
					if(flag>400*(sliding.length-1))
					{
						flag=400*(sliding.length-1);
					  e.target.style.cssText = "background-color: gray; cursor: default;";
					}
					else{
						e.target.style.cssText = "background-color:#DC7000; cursor: pointer;"
					}
				}

					slides.style.left = "-"+flag+"px";

					prev.style.cssText = "background-color:#DC7000; cursor: pointer;"
					
				}

	return (
		<div className="section-one-padding">
		<div className="contect-head">
  <h3>Trusted by Thousends of Happy Customer</h3>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
</div>
			<div className="slider " > 
			<div className="slides-wraper">
			<div className="slides" id="slides" >
				<Slide name={slide[0].name} city={slide[0].city} image={slide[0].image} rating={slide[0].rating} desc={slide[0].desc} />
				<Slide name={slide[1].name} city={slide[1].city} image={slide[1].image} rating={slide[1].rating} desc={slide[1].desc} />
				<Slide name={slide[2].name} city={slide[2].city} image={slide[2].image} rating={slide[2].rating} desc={slide[2].desc} />
				<Slide name={slide[3].name} city={slide[3].city} image={slide[3].image} rating={slide[3].rating} desc={slide[3].desc} />
				<Slide name={slide[4].name} city={slide[4].city} image={slide[4].image} rating={slide[4].rating} desc={slide[4].desc} />
				<Slide name={slide[5].name} city={slide[5].city} image={slide[5].image} rating={slide[5].rating} desc={slide[5].desc} />
				</div>
				</div>
				<div className="btns">
			<button className="primary-button"  id="prev" onClick={clickHandPrev}><BsArrowLeft /></button>
			<button className="primary-button" id="next" onClick={clickHandNext}><BsArrowRight /></button>
			</div>
			</div>
			
		</div>
		)
}
export default Slider