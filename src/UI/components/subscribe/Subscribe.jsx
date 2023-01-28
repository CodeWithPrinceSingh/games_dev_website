import './subscribe.css'



const Subscribe = ()=> {
	return (
		<div className="subscribe section-one-padding">
		<div className="subscribe-warpper">
			<div className ="loop">
				<h3>Stay in the loop </h3>
				<p>Subscribe to receive the latest news and updates about TDA.
				We promise not to spam you! </p>
			</div>
			<div className="subscribe-form">
			<form className="input-sub">
				<input type="email" placeholder="Enter Your Email" />
				<button type="submit" className="primary-button">Continue</button>
			</form>
			</div>
			</div>
		</div>
		)
}
export default Subscribe