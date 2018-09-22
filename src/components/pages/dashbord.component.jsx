import React from 'react';

export default class Dashbord extends React.Component {

    render() {
        return (
            <div id="dashbord" className="container">
        <div className="dashbord_content">
            
        </div>
        <div className="dashbord_content">
            <div className="dashbord_content-container">
                <p className="currency">Баланс</p>
                <p className="value">$ 10.00</p>
            </div>
             <div className="dashbord_content-container">
                <p className="currency">BTC</p>
                <p className="value">$ 10.00</p>
            </div>
             <div className="dashbord_content-container">
                <p className="currency">LTC</p>
                <p className="value">$ 10.00</p>
            </div>
             <div className="dashbord_content-container">
                <p className="currency">ETH</p>
                <p className="value">$ 10.00</p>
            </div>
            <a className="btn" href="">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </a>
        </div>
    </div>
        )
    }
}