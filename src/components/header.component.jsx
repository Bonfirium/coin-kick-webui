import React from 'react';

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = { isActive: false };
    }

    render() {
        return (
            <div
                id="header"
                className={this.state.isActive ? "active" : ""}
                onClick={() => this.setState({ isActive: !this.state.isActive })}
            >
                This is <span>header</span>
            </div>
        );
    }

}
