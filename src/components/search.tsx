import { ChangeEventHandler, FormEventHandler, useState } from 'react';

type SearchProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

const Search = ({ onChange, onSubmit }: SearchProps) => {
  const [value, setValue] = useState('');

  if (!onChange) onChange = (e) => setValue(e.target.value);
  if (!onSubmit) onSubmit = (e) => e.preventDefault();

  return (
    <form onSubmit={onSubmit} className="m-4">
      <label className="block font-semibold text-primary-900" htmlFor="search">
        Search
      </label>
      <div className="flex">
        <input
          type="search"
          id="search"
          className="w-full"
          placeholder="Search…"
          value={value}
          onChange={onChange}
        />
        <button type="submit" className="border-l-0">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
