import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.text);

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <h2>Search users</h2>
      <input type="text" value={filters} onChange={onChangeFilter} />
    </div>
  );
}

// export default SearchBox;
