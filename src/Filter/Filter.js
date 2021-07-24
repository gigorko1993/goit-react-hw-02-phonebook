const Filter = ({ onChange, value }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input name="filter" type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
