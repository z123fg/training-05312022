function SelectionIndicator(props) {
  const selections = props.data.reduce((prev, curr) => {
    if (curr.selected) {
      if (prev.length === 0) {
        return curr.name;
      }
      return `${prev}, ${curr.name}`
    }
    return prev;
  }, '');
  return (
    <div className="selection-indicator">{selections.length > 0 ? `Selected value: ${selections}` : 'No values selected'}</div>
  );
}

export default SelectionIndicator;