// import React from 'react'
import css from "./AddQuestBtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../redux/quests/operations";
import { setIsCreating } from "../../redux/auth/authSlice";
import { selectIsCreating } from "../../redux/auth/selectors";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function AddQuestBtn({ questState }) {
  const [cardState, setCardState] = useState(true);
  const dispatch = useDispatch();
  const isCreating = useSelector(selectIsCreating);

  useEffect(() => {
    questState(cardState);
  }, [cardState, questState]);

  const getCurrentDate = () => {
    const date = new Date();

    const dateYMD = `${date.getFullYear()}-${
      date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth()}`
    }-${date.getDate() > 9 ? date.getDate() + 1 : `0${date.getDate()}`}`;

    return dateYMD;
  };

  const getCurrentTime = () => {
    const time = new Date();

    const currentTime = `${
      time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`
    }:${time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`}`;

    return currentTime;
  };

  const click = () => {
    setCardState(false);
    dispatch(
      addCard({
        title: "Title",
        difficulty: "Easy",
        category: "Stuff",
        date: getCurrentDate(),
        time: getCurrentTime(),
        type: "Task",
      })
    );
    dispatch(setIsCreating());
  };

  return (
    <>
      <button
        className={css.btn}
        onClick={click}
        type="button"
        disabled={isCreating}
      >
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
    </>
  );
}

AddQuestBtn.propTypes = {
  questState: PropTypes.func.isRequired,
};
