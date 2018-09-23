import React from 'react';

export default class Headpage extends React.Component {

  render() {
    return (
       <div id="headpage_container">
        <h1>CoinKick</h1>
        <div className="row_flex">
          <div>
            <p>Всего пользователей</p>
            <h3>2018</h3>
          </div>
          <div>
            <p>активных пользователей</p>
            <h3>1298</h3>
          </div>
          <div>
            <p>количество проектов</p>
            <h3>3000</h3>
          </div>
          <div>
            <p>количество постов</p>
            <h3>2726</h3>
          </div>
        </div>
        <div className="row_container">
          <div className="pisos">
            <div className="sum_container">
              <h4>суммарных вложений</h4>
            </div>
            <div className="class_container">
              <p>за все время </p>
              <p>245.00 млн</p>
            </div>
            <div className="class_container">
              <p>за последний месяц </p>
              <p>245.00 млн</p>
            </div>
            <div className="class_container">
              <p>за сегодня </p>
              <p>245.00 млн</p>
            </div>
          </div>
          <div className="pisos">
            <div className="sum_container">
              <h4>всего транзакций</h4>
            </div>
            <div className="class_container">
              <p>за все время </p>
              <p>245.00 млн</p>
            </div>
            <div className="class_container">
              <p>за последний месяц </p>
              <p>245.00 млн</p>
            </div>
            <div className="class_container">
              <p>за сегодня </p>
              <p>245.00 млн</p>
            </div>
          </div>
          <div className="pisos">
            <div className="sum_container">
              <h4>всего вывод</h4>
            </div>
            <div className="class_container">
              <p>за все время </p>
              <p>245.00 млн</p>
            </div>
            <div className="class_container">
              <p>за последний месяц </p>
              <p>245.00 млн</p>
            </div>
            <div className="class_container">
              <p>за сегодня </p>
              <p>245.00 млн</p>
            </div>
          </div>

      </div>
    </div>

    

    );
  }

}
