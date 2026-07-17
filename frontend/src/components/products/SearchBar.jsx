import { FiSearch } from 'react-icons/fi'

function SearchBar({ value, onChange }) {
  return (
    <label className="searchbar-wrap" htmlFor="product-search">
      <FiSearch size={18} />
      <input
        id="product-search"
        type="text"
        placeholder="Search products or categories"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

export default SearchBar
