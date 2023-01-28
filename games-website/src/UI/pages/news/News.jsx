import './news.css' 
import Nav from '../../components/header/nav/Nav'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import Texthead from '../../components/text-head/Texthead';
import Search from '../../components/search/Search';
import Mnews from '../../components/main-news/Mnews';



const News = () =>{

	return(
		<div className = "news" > 
			<Nav />
			<Texthead text="News"/>
			<Search />
			<Mnews />
			<Subscribe />
			<Footer />
		</div>
		);
}
export default News