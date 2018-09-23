import React from 'react';

export default class dashboard extends React.Component {

	render() {
		return (
			<div id="dashboard" className="container">
				<div className="dashboard_content dashboard_name">
					<div className="dashboard_left-container">
						<img alt="user" src="../../assets/images/user.png" />
					</div>
					<div className="dashboard_right-container">
						<form className="d-none" action="">
							<div className="input_container">
								<input type="text" placeholder="Name" />
								<img className="name_img" src="../../assets/images/user.png" alt="" />
							</div>
							<button type="submit" className="d-none">ok</button>
						</form>
						<p className="user_name d-none">kgaljgal</p>
						<p>email@email.com</p>
						<ul className="projects">
							<li>projects</li>
						</ul>
					</div>
				</div>
				<div className="dashboard_content">
					<div className="dashboard_content-container">
						<p className="currency">Баланс</p>
						<p className="value">$ 10.00</p>
					</div>
					<div className="dashboard_content-container">
						<p className="currency">BTC</p>
						<p className="value">$ 10.00</p>
					</div>
					<div className="dashboard_content-container">
						<p className="currency">LTC</p>
						<p className="value">$ 10.00</p>
					</div>
					<div className="dashboard_content-container">
						<p className="currency">ETH</p>
						<p className="value">$ 10.00</p>
					</div>
					<a className="btn" href="">
						<div className="circle" />
						<div className="circle" />
						<div className="circle" />
					</a>
				</div>
			</div>
		);
	}

}
