import React from 'react';

export default class Coins extends React.Component {

  render() {
    return (
        <div id="coins" className="coins_container">
            <div className="head_col">
                <h3>Валюта</h3>
                <h3>Объем</h3>
                <h3>Вклад</h3>
            </div>
            <div className="col">
                <div className="coin_col">
                    <div className="coin_col-container">
                        <p>LTC</p>
                        <p className="cash">$ 1000.00</p>
                    </div>
                </div>
                 <div className="button_container">
                    <button className="depo">With draw</button>
                    <button className="deposit">
                        Депозит
                    </button>
                </div>               
            </div>
            <div className="col">
                <div className="coin_col">
                    <div className="coin_col-container">
                        <p>LTC</p>
                        <p className="cash">$ 1000.00</p>
                    </div>
                </div>
                 <div className="button_container">
                    <button className="depo">With draw</button>
                    <button className="deposit">
                        Депозит
                    </button>
                </div>               
            </div>
            <div className="col">
                <div className="coin_col">
                    <div className="coin_col-container">
                        <p>LTC</p>
                        <p className="cash">$ 1000.00</p>
                    </div>
                </div>
                 <div className="button_container">
                    <button className="depo">With draw</button>
                    <button className="deposit">
                        Депозит
                    </button>
                </div>               
            </div>
            <div className="col">
                <div className="coin_col">
                    <div className="coin_col-container">
                        <p>LTC</p>
                        <p className="cash">$ 1000.00</p>
                    </div>
                </div>
                 <div className="button_container">
                    <button className="depo">With draw</button>
                    <button className="deposit">
                        Депозит
                    </button>
                </div>               
            </div>
            <div className="col">
                <div className="coin_col">
                    <div className="coin_col-container">
                        <p>LTC</p>
                        <p className="cash">$ 1000.00</p>
                    </div>
                </div>
                 <div className="button_container">
                    <button className="deposit">
                        With draw
                    </button>
                    <button className="deposit">
                        Депозит
                    </button>
                </div>               
            </div>
            <div className="foot_col">
                <h4>Summary</h4>
                <h4>$ 5 987.00</h4>
            </div>
        </div>
    );
  }

}
