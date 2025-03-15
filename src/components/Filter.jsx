import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Filter contacts"
      value={filterValue}
      onChange={handleChange}
    />
  );
};

export default Filter;
