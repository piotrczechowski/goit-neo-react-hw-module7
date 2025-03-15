import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
