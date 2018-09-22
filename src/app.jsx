import React from 'react';

import './assets/stylesheets/main.scss';
import Header from './components/header.component';
import MainPage from './components/pages/main-page.component';
import SignUp from './components/modals/sign-up.component';
import Dashbord from './components/pages/dashbord.component';

export default class App extends React.Component {

	render() {
		return (
			<div>
				<Header />
        <SignUp />
        <Dashbord />
				<MainPage />
			</div>
		);
	}

}
  