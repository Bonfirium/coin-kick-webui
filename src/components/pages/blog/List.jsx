import React from 'react';
import BlogActions from '../../../actions/BlogActions';

export default class BlogList extends React.Component {

	createList() {
		const projects = BlogActions.getProjects().then((response) => response.map(({ title, description }) => (
			<div>
				<h2>{title}</h2>
				<div>{description}</div>
			</div>
		)));
		return projects;
	}

	render() {
		return (
			<div>
				{this.createList()}
			</div>
		);
	}

}
