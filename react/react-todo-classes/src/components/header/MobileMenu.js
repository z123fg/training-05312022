import React from "react";
import MenuButton from "../buttons/MenuButton";
import MobileDrawer from "./MobileDrawer";

export default class MobileMenu extends React.Component {

  render() {

    return (
      <>
        <MenuButton />
        <MobileDrawer />
      </>
    );
  }
}
