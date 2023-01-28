import './about.css'
import Nav from '../../components/header/nav/Nav'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import AboutHero from '../../components/about-hero/AboutHero'
import Workwithus  from '../../components/workwithus/WorkWithUs'
import Dance from '../../components/dance/Dance'
import Team from '../../components/team/Team'


const About = () =>{

	return(
		<div className = "about" > 
		<Nav />
		<AboutHero />
		<Workwithus />
		<Dance />
		<Team />
		<Subscribe />
		<Footer />
		</div>
		);
}
export default About