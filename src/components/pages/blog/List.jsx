import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BlogActions from "../../../actions/BlogActions";

class BlogProjects extends React.Component {

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
		projects: state.auth.get('projects'),
	}),
	(dispatch) => ({
		getProjects: (data) => dispatch(BlogActions.getProjects({data})),
	}),
)(BlogProjects);

