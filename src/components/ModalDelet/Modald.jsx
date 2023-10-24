import { useDispatch } from "react-redux";
import { deleteCard } from "../../redux/quests/operations";
import { unsetIsCreating } from "../../redux/auth/authSlice";
import css from "./Modald.module.css";

export default function Modald({card,onCancelClick}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCard(card._id));
    dispatch(unsetIsCreating());
  };
  return (
    <div className={css.hovers}>
    <div className={css.bacroundTitle}>
        <h3 className={css.text}>Delete This Quest?</h3>
        <ul className={css.listButtons}>
            <li>
            <button className={css.buttonCancele} type="button" onClick={onCancelClick}>
                CANCEL
            </button>
            </li>
            <li>
            <button type="button" onClick={handleDelete} className={css.buttonDelete}>
                DELETE
            </button>
            </li>
        </ul>
    </div>
    </div>
  );
}
