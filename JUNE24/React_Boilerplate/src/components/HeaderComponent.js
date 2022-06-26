import React from "react";
import './HeaderComponent.css'

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <h1 class="header_component_h1">{this.props.header}</h1>
        );
    }
}