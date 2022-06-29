import React from "react";
import styled from "styled-components";
import { Container } from "../components/Layout";

export default class Home extends React.Component {
  render() {
    return (
      <section id="homePage">
        <header>
          <h1>What's up, {this.props.name}!</h1>
        </header>
      </section>
    );
  }
}
