function ClearAllControl(props) {
  const handleClearAll = () => {
    const newData = props.data.map((elem) => {
      return {
        ...elem,
        selected: false
      }
    });
    props.setData(newData);
  }
  
  return (
    <div className="clear-all">
      <button
        className="btn btn--clear"
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </div>
  );
}

export default ClearAllControl;