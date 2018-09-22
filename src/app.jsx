import React from 'react';

import './assets/stylesheets/main.scss';
import Header from './components/header.component';
import MainPage from './components/pages/main-page.component';

export default class App extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<MainPage />
			</div>
		);
	}

}
  