import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <h1 className={css.title}>Find contact by name</h1>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
