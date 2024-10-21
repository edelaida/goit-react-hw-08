import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import s from "../ContactForm/ContactForm.module.css";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.name);

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={s.phoneblok}>
      <h2 className={s.cont}>Search users</h2>
      <input
        className={s.ifield}
        type="text"
        value={filters}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default SearchBox;
