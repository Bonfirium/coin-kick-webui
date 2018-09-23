import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import UserActions from '../../actions/UserActions';
import ToastActions from '../../actions/ToastActions';
import Img4 from '../../assets/images/4.png';

class Coins extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isAgreement: false,
			currencyIndex: 0,
			address: null,
		};
	}

	onSubmit(e) {
		e.preventDefault();

		const { getAddress, user } = this.props;
		const { currencyIndex } = this.state;

		if (this.checkBox.checked) {
			getAddress(user.currencies[currencyIndex].name).then((data) => {
				this.setState({
					address: data.result.address,
				});
			});
		} else {
			ToastActions.toastError('Нужно согласиться с условиями');
		}
	}

	getCurrenciesList(currencies) {
		return currencies.map((currency, index) => (
			<div className="col" key={currency.name}>
				<div className="coin_col">
					<div className="coin_col-container">
						<p>{currency.displayName}</p>
						<p className="cash">{`${currency.balance} ${currency.shortName}`}</p>
					</div>
				</div>
				<div className="button_container">
					<button type="button" className="depo">Вывод</button>
					<button type="button" className="deposit" onClick={() => this.openAgreement(index)}>Депозит</button>
				</div>
			</div>
		));
	}

	getSum(currencies) {
		const sumBalance = currencies.reduce((sum, currency) => parseFloat(currency.balance) + sum, 0);
		return (
			<div className="foot_col">
				<h4>Сумма</h4>
				<h4>{`${sumBalance}`}</h4>
			</div>
		);
	}

	openAgreement(index) {
		const { currencyIndex, isAgreement } = this.state;
		if (currencyIndex === index && isAgreement) {
			this.setState({
				isAgreement: false,
				address: null,
			});
		} else {
			this.setState({
				isAgreement: true,
				currencyIndex: index,
				address: null,
			});
		}
	}

	closeAgreement() {
		this.setState({
			isAgreement: false,
			address: null,
		});
	}

	render() {
		const { user } = this.props;
		const { isAgreement, currencyIndex, address } = this.state;
		const { currencies } = user;

		return (
			<div id="coins" className="coins_container">
				<div className="head_col">
					<h3>Валюта</h3>
					<h3>Объем</h3>
					<h3>Вклад</h3>
				</div>
				{this.getCurrenciesList(currencies)}
				{isAgreement ? (
					<div className="pop-up_coins">
						<div className="out_container">
							<div className="out_img" onClick={() => this.closeAgreement()} />
						</div>
						<h4>{`Депозит ${currencies[currencyIndex].shortName}`}</h4>
						{address ? (
							<div className="penis_container">
								<input type="text" className="penis" readOnly value={address} />
								<img src={Img4} className="qr_photo" />
							</div>
						) : (
							<React.Fragment>
								<p>It’s been a while, have you read any new books lately?</p>
								<form onSubmit={(e) => this.onSubmit(e)}>
									<input
										type="checkbox"
										ref={(node) => {
											this.checkBox = node;
										}}
									/>
									<p>Я ознакомлен и согласен с условиями</p>
									<button type="submit" className="btn">Сгенерировать адрес</button>
								</form>
							</React.Fragment>
						)}

					</div>
				) : null}

			</div>
		);
	}

}

Coins.propTypes = {
	user: PropTypes.object,
	getAddress: PropTypes.func.isRequired,
};

Coins.defaultProps = {
	user: null,
};

export default connect(
	(state) => ({
		user: state.auth.get('user'),
	}),
	(dispatch) => ({
		getAddress: (currency) => dispatch(UserActions.getAddress({ currency })),
	}),
)(Coins);
