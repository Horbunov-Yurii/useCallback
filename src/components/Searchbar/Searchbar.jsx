import { useState } from "react";
const Srearchbar = ({onSubmit}) => {
  const [query, setQuery] = useState("");

  const handleInput = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
      evt.preventDefault();
      


      if (query === "") {
        return
      }
      onSubmit(query)
      setQuery("")

  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          onChange={handleInput}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Srearchbar;
