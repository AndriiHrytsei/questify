// import React from 'react'
import css from "./AddQuestBtn.module.css";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/quests/operations";

export default function AddQuestBtn() {
  const dispatch = useDispatch();

  const click = () => {
    dispatch(
      addCard({
        title: "Title",
        difficulty: "Easy",
        category: "Stuff",
        date: "2020-12-31",
        time: "20:30",
        type: "Task",
      })
    );
  };

  return (
    <div className={css.container} onClick={click}>
      <button className={css.btn} type="submit">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 1024 1024"
        >
          <path
            className={css.svg_plus}
            fill="#fff"
            d="M74.244 463.384h389.112v-389.122c0-26.843 21.794-48.637 48.646-48.637 26.843 0 48.637 21.794 48.637 48.637v389.122h389.12c26.848 0 48.64 21.793 48.64 48.637 0 26.852-21.792 48.646-48.64 48.646h-389.12v389.113c0 26.854-21.794 48.646-48.637 48.646-26.852 0-48.646-21.792-48.646-48.646v-389.113h-389.112c-26.853 0-48.646-21.793-48.646-48.646 0-26.844 21.793-48.637 48.646-48.637z"
          ></path>
        </svg>
      </button>
    </div>
  );
}
