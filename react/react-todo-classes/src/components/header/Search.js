import React from "react";
import SearchButton from "../buttons/SearchButton";
import SearchDrawer from "./SearchDrawer";

export default class Search extends React.Component {
  //
  render() {
    //
    return (
      <>
        <SearchDrawer />

        <SearchButton />
      </>
    );
  }
}
