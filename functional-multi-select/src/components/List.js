import { useEffect, useState } from "react";

function List(props) {
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  useEffect(() => {
    setSelectAllChecked(props.data.every(elem => elem.selected));
  }, [props.data]);
  
  const handleSelectAll = (e) => {
    const newData = props.data.map((elem) => {
      return {
        ...elem,
        selected: e.target.checked
      };
    });
    props.setData(newData);
  }

  const handleToggle = (id) => {
    const newData = props.data.map((elem) => {
      if (elem.id === id) {
        const copy = { ...elem };
        copy['selected'] = !elem.selected;
        return copy;
      }
      return elem;
    });
    props.setData(newData);
  }

  return (
    <div className="list">
      <div key="value-select-all" className="list__item">
        <label class="list__item-container">Select All
          <input
            type="checkbox"
            checked={selectAllChecked}
            onChange={handleSelectAll}
          />
          <span class="checkmark"></span>
        </label>
      </div>
      {props.data.map((elem) => {
        return (
          <div key={elem.id} className="list__item">
            <label class="list__item-container">{elem.name}
              <input
                type="checkbox"
                checked={elem.selected}
                onChange={() => handleToggle(elem.id)}
              />
              <span class="checkmark"></span>
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default List;