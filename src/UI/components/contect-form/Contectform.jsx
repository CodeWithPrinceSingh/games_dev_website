import './contectform.css'


const Contectform = () => {
	return	(
		<div className='section-one-padding'>
			<div className='contect-form-warper'>
				<div className='contect-form-head'>
					<h3>Say hello</h3>
					<p>Lorem Ipsum is simply dummy text of the printing.</p>
				</div>
				<div className="contect-form">
					<form className='form'  target="_blank">
						<div className="name">
							<div className="fname flex">
								<level>First Name</level>
								<input type='text' className="org" />
							</div>
							<div className="lname flex">
								<level>Last Name</level>
								<input type='text' className="org" />
							</div>
						</div>
						<div className="email flex">
						<level>Email Address</level>
							<input type="email" className="org"/>
						</div>
						<div className="massage flex">
						<level>Massage</level>
						<textarea cols="50" rows="10" className="org"></textarea>
						</div>
						<div className="btn">
						<input type="submit" className="primary-button" value="Get in touch" />
						</div>
					</form>
				</div>
			</div>
		</div>
		)
}
export default Contectform