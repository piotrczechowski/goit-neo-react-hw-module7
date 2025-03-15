import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filterSlice";
import styles from "./SearchBox.module.css";
const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      className={styles.searchBoxInput}
      type="text"
      placeholder="Find contacts"
      value={filterValue}
      onChange={handleChange}
    />
  );
};

export default Filter;
