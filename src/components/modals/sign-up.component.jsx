import React from 'react';

export default class SignUp extends React.Component {

    render() {
        return (
            <div id="sign-up">
                <h3>Log In</h3>
                <form action="">
                    <input class="reg_form" type="text" placeholder="E-mail"/>
                    <input class="reg_form" type="password" placeholder="Password"/>
                    <input class="reg_form" type="password" placeholder="Password repeat"/>
                    <div class="btn">Log In</div>
                </form> 
            </div>   
        )
    }
}