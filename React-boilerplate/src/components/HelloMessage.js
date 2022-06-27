
import React from "react"
import "./HelloMessage.css";

/**creates HelloMessage class using react */
class HelloMessage extends React.Component {
  render() {
    return <div className="hello">Hello {this.props.name} <div>123</div></div>
    
  }
}

export default HelloMessage