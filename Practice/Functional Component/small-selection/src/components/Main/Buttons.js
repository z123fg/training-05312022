import React, { useEffect, useState } from "react";

function Buttons() {
  const [option, setOption] = useState([
    {
      id: 1,
      name: "Kosher",
      selected: false,
    },
    {
      id: 2,
      name: "No Celery (inc celeriac)",
      selected: false,
    },
    {
      id: 3,
      name: "No Egg",
      selected: false,
    },
  ]);

  const handleAll = () => {
    const all = option.every((item) => item.selected);
    const newOptions = option.map((item) => ({ ...item, selected: !all }));
    setOption(newOptions);
  };

  const handleCheck = (e) => {
    const { id } = e.target;
    const target = option.findIndex((item) => item.id == id);

    setOption((prev) => [
      ...prev.slice(0, target),
      { ...prev[target], selected: !prev[target].selected },
      ...prev.slice(target + 1),
    ]);
    //console.log("in", e.target.id, target);
  };

  const handleClear = () => {
    setOption((prev) => prev.map((item) => ({ ...item, selected: false })));
  };

  return (
    <form>
      <div className="top">
        <h3>
          Selected Value:{" "}
          {option
            .filter((item) => item.selected)
            .map((item) => item.name)
            .join(", ")}
        </h3>
      </div>

      <div>
        <div>
          <input
            type="checkbox"
            onChange={handleAll}
            checked={option.every((item) => item.selected)}
          ></input>
          <span>Select All</span>
        </div>

        {option.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              onChange={handleCheck}
              id={item.id}
              checked={item.selected}
            ></input>
            <span>{item.name}</span>
          </div>
        ))}

        <div>
          <button onClick={handleClear}>Clear All</button>
        </div>
      </div>
    </form>
  );
}
export default Buttons;
