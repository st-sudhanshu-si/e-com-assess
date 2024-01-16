const Filter = () => {
  const filterOne = ["All", "Cotton", "Cotton", "Cotton", "Cotton"];
  const filterTwo = ["All", "Mint Green", "Blue", "Red", "Cotton"];
  return (
    <div className="filter-container col-lg-2 col-md-12 col-sm-12 col-xs-12">
      <span className="filter-title">Filter</span>
      <div className="filter-one">
        <ul className="filter-list-one">
          <span>Materials</span>
          {filterOne.map((item, index) => (
            <li key={index} className="item-list">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-two">
        <ul className="filter-list-two">
          <span>Color</span>
          {filterTwo.map((item, index) => (
            <li key={index} className="item-list">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
