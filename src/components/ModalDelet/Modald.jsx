import { useDispatch } from "react-redux";
import { deleteCard } from "../../redux/quests/operations";
import { unsetIsCreating } from "../../redux/auth/authSlice";
export default function Modald({card}) {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteCard(card._id));
        dispatch(unsetIsCreating());
      };
  return (
    <>
        <div>
            <h3>Delete this Quest?</h3>
            <ul>
                <li>
                    <button type="button">CANCEL</button>
                </li>
                <li>
                    <button type='button' onClick={handleDelete}>DELETE</button>
                </li>
            </ul>
        </div>
    </>
    )
}
