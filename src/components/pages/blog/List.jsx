import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BlogActions from '../../../actions/BlogActions';
import Img1 from '../../../assets/images/1.png';
import Img2 from '../../../assets/images/3.png';
import Img3 from '../../../assets/images/2.png';

class BlogProjects extends React.Component {

	createList(projects) {
		return projects.map(({ title, description }) => (
			<div>
				<h2>{title}</h2>
				<div>{description}</div>
			</div>
		));
	}

	render() {
		return (

			<div id="blog" className="blog_container">
				<div>
					<div className="bg_img" />
					<div className="blog_content">
						<div className="col_left">
							<h3>Coffe</h3>
							<p>by Alex1488</p>
							<h5>$ 1569.00</h5>
						</div>


						<div className="col_center">
							<p><span><a href="">learn more...</a></span></p>
						</div>
						<div className="col_right">
							<img className="pan" src={Img1} alt="" />
							<div className="img_container">
								<div>
									<img src={Img2} alt="" />
									<p>253</p>
								</div>
								<div>
									<img src={Img3} alt="" className="heart" />
									<p>47</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="bg_img" />
					<div className="blog_content">
						<div className="col_left">
							<h3>Coffee</h3>
							<p>by Alex1488</p>
							<h5>$ 1569.00</h5>
						</div>
						<div className="col_center">
							<p><span><a href="">learn more...</a></span></p>
						</div>
						<div className="col_right">
							<img src={Img1} className="pan" alt="" />
							<div className="img_container">
								<div>
									<img src={Img3} alt="" />
									<p>253</p>
								</div>
								<div>
									<img alt={Img2} className="heart" />
									<p>47</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="bg_img" />
					<div className="blog_content">
						<div className="col_left">
							<h3>Coffee</h3>
							<p>by Alex1488</p>
							<h5>$ 1569.00</h5>
						</div>
						<div className="col_center">
							<p><span><a href="">learn more...</a></span></p>
						</div>
						<div className="col_right">
							<img className="pan" src={Img1} alt="" />
							<div className="img_container">
								<div>
									<img src={Img3} alt="" />
									<p>253</p>
								</div>
								<div>
									<img src={Img2} alt="" className="heart" />
									<p>47</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="bg_img" />
					<div className="blog_content">
						<div className="col_left">
							<h3>Coffe</h3>
							<p>by Alex1488</p>
							<h5>$ 1569.00</h5>
						</div>
						<div className="col_center">
							<p><span><a href="">learn more...</a></span></p>
						</div>
						<div className="col_right">
							<img className="pan" src={Img1} alt="" />
							<div className="img_container">
								<div>
									<img src={Img3} alt="" />
									<p>253</p>
								</div>
								<div>
									<img src={Img2} alt="" className="heart" />
									<p>47</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		);
	}

}

BlogProjects.propTypes = {
	projects: PropTypes.array,
	setProjects: PropTypes.func.isRequired,
};

BlogProjects.defaultProps = {
	projects: [],
};

export default connect(
	(state) => ({
		projects: state.auth.get('projects'),
	}),
	(dispatch) => ({
		getProjects: (data) => dispatch(BlogActions.getProjects({ data })),
	}),
)(BlogProjects);
