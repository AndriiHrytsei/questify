import css from './QuestCard.module.css' 

export default function QuestCard() {
  return (
    <div className={css.main}>
        <div className={css.levels}>
            <select name="levels" id="levels">
                <option value="easy">Easy</option>
                <option value="normal">Normal</option>
                <option value="hard">Hard</option>
            </select>
            <div>&#9733;</div>
        </div>
        <div className={css.task}>
            <ul className={css.list_task}>
                <li><p className={css.text_task}>here must be text</p></li>
                <li><p className={css.text_time}>here must be time</p></li>
            </ul>
        </div>
        <div className={css.group}>
            <div className={css.text_group}>WORK</div>
        </div>
    </div>
  )
}
