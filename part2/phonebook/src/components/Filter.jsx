const Filter = ({ search, handleSearchChange }) => {
  return (
    <div>
      filter shown with{" "}
      <input type="search" value={search} onChange={handleSearchChange} />
    </div>
  );
};
export default Filter;
