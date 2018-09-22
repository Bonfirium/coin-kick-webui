import React from 'react';

export default class Header extends React.Component {

	render() {
		return (
			<div id="head" className="logged">
				<div className="main">
					<div id="logo">
						<div className="logo_img" />
					</div>
					<div className="head_item-container">
						<div className="head_line" />
						<a className="head_item" href="">Новое</a>
						<div className="head_line" />
						<a className="head_item">Топ</a>
						<div className="head_line long" />
						<a className="head_item only_auth" href="">Блог</a>
						<div className="head_line only_auth" />
						<a className="head_item only_auth">Дашборд</a>
						<div className="head_line only_auth" />

						<div id="empty" />
					</div>
				</div>
				<div className="hidden head_btn-container">
					<a className="btn btn_head" href="">Вход</a>
					<a className="btn btn_head" href="">Регистрация</a>
				</div>
			</div>
		);
	}

}
