import React from 'react';
import BlogActions from '../../../actions/BlogActions';
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import UserActions from "../../../actions/UserActions";

export default class BlogProjects extends React.Component {

	createList(projects) {
		return projects.map(({ title, description }) => (
			<div>
				<h2>{title}</h2>
				<div>{description}</div>
			</div>
		)));
	}

	render() {
		return (
			<div>
				{this.createList()}
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
		projects: state.blog.get('projects'),
	}),
	(dispatch) => ({
		getProjects: (data) => dispatch(BlogActions.getProjects(data)),
	}),
)(BlogProjects);

