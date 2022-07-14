import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 7rem;
`;

const Message = styled.h2`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.25rem;
  color: #1da1f2;
`;

const SelectedList = styled.ul`
  list-style-position: inside;
  padding-bottom: 0.5rem;
  list-style-type: square;
`;

const Result = ({ results, handleChange }) => {
  const [userOptions, setUserOptions] = useState([])

  useEffect(() => {
    setUserOptions(results)
  }, [handleChange])

  console.log(results);

  return (
    <>
      <Container>
        <Message>Order Summary</Message>

        <SelectedList>
          {userOptions.map((item, i) => (
              <li key={i}>
                <span>{item}</span>
              </li>
          ))}
        </SelectedList>
      </Container>
    </>
  );
};
export default Result;
