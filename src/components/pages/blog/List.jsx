import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BlogActions from '../../../actions/BlogActions';
import Img1 from '../../../assets/images/1.png';
import Img2 from '../../../assets/images/3.png';
import Img3 from '../../../assets/images/2.png';

class BlogProjects extends React.Component {

	componentDidMount() {
		const { getProjects } = this.props;
		getProjects();
	}

	getPostList() {
		const { projects } = this.props;
		return projects.map(({ title, description }) => (
			<div key={title}>
				<div className="bg_img" />
				<div className="blog_content">
					<div className="col_left">
						<h3>{title}</h3>
					</div>
					<div className="col_center">
						{description}
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
		));
	}

	render() {
		return (
			<div id="blog" className="blog_container">
				{this.getPostList()}
			</div>
		);
	}

}

BlogProjects.propTypes = {
	projects: PropTypes.array,
	getProjects: PropTypes.func.isRequired,
};

BlogProjects.defaultProps = {
	projects: [],
};

export default connect(
	(state) => ({
		projects: state.auth.get('projects'),
	}),
	(dispatch) => ({
		getProjects: () => dispatch(BlogActions.getProjects()),
	}),
)(BlogProjects);
