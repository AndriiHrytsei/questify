import css from './QuestCard.module.css' 
import  DificultySelect  from '../Select/Select'

export default function QuestCard() {
  return (
    <div className={css.main}>
        <div className={css.levels}>
            <DificultySelect/>
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
