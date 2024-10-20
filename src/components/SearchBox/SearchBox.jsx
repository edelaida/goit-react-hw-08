import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.name);

  const onChangeFilter = (event) => {
    dispatch(selectNameFilter(event.target.value));
  };

  return (
    <div>
      <h2>Search users</h2>
      <input type="text" value={filters} onChange={onChangeFilter} />
    </div>
  );
};

export default SearchBox;
