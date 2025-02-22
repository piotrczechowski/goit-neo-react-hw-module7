import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

function SearchBox({ filter, onChange }) {
  return (
    <div className={styles.searchBoxContainer}>
      <label htmlFor="search" className={styles.searchBoxLabel}>
        Find contact by name:
      </label>

      <input
        id="search"
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Search by name"
        className={styles.searchBoxInput}
      />
    </div>
  );
}

export default SearchBox;

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
