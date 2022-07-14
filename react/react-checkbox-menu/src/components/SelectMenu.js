import React, { useEffect, useState } from "react";
import { menuOptions } from "../optionsData";
import styled from "styled-components";
import Result from "./Result";

const MenuContainer = styled.section`
  width: 100%;
  padding: 1rem;
  background-color: #e1e8ed;
  border-radius: 1rem;

  input[type="checkbox"] {
    accent-color: #1da1f2;
  }
`;
const CheckBox = styled.input`
  margin-right: 1rem;
`;
const Label = styled.label`
  color: #14171a;
`;
const Row = styled.div`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const SelectMenu = () => {
  const [options, setOptions] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [results, setResults] = useState([])

  useEffect(() => {
    setOptions(menuOptions);
  }, [options, isChecked]);

  // console.log(options);

  const handleSelectAll = (e) => {
    setSelectAll(!selectAll);
    setIsChecked(options.map((item) => item.id));
    setResults(options.map((item) => item.label))
    
    if (selectAll) {
      setIsChecked([]);
      setResults([])
    }
  };
  
  const handleChange = (e) => {
    const { id, checked, name } = e.target;
    setIsChecked([...isChecked, +id]);

    if (checked) {
      setResults([...results, name])
    } else {
      setIsChecked(isChecked.filter((item) => +item !== +id));
      setResults(results.filter((item) => !item.includes(name)))
    }
  };
  
  // console.log(selectAll);
  // console.log(isChecked);
  // console.log(results);

  const optionsList = options.map(({ id, label }) => (
    <Row key={id}>
      <CheckBox
        type="checkbox"
        htmlFor={id}
        name={label}
        id={id}
        checked={isChecked.includes(id)}
        onChange={handleChange}
      />
      <Label>{label}</Label>
    </Row>
  ));

  return (
    <MenuContainer>
      <Row>
        <CheckBox
          type="checkbox"
          id="selectAll"
          name="Select All"
          checked={selectAll}
          onChange={handleSelectAll}
        />
        <Label htmlFor="selectAll">Select All</Label>
      </Row>

      {optionsList}

      <Result
        handleChange={handleChange}
        results={results}
      />
    </MenuContainer>
  );
};
export default SelectMenu;
