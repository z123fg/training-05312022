import React, { useState, useEffect } from "react";
import { original } from "../original";

const Solution = () => {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);

  useEffect(() => {
    //console.log(original);
    const columnSet = new Set();

    original.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        columnSet.add(key);
      });
    });

    setColumn(Array.from(columnSet));
    setData(original);
  }, []);

  useEffect(() => {
    const regionObj = {};

    data.forEach((obj) => {});
  });
  return <div>S</div>;
};

export default Solution;
