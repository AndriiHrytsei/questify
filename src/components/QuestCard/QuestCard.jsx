import css from './QuestCard.module.css' 
import  DificultySelect  from '../Select/Select'
// import star from '../../icons/star.svg'

export default function QuestCard() {
  return (
    <div className={css.main}>
        <div className={css.levels}>
            <DificultySelect styles={{
                control: (baseStyles, state) => ({
                ...baseStyles,
                // borderColor: state.isFocused ? 'grey' : 'red',
                // height: state && '20px' 
                }),
            }}/>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                <path fill="#00d7ff" d="M809.463 273.883l-179.447-16.968c-11.315-1.029-21.090-8.227-25.712-19.025l-64.275-155.801c-10.282-25.709-46.797-25.709-57.079 0l-63.762 155.801c-4.113 10.798-14.397 17.996-25.71 19.025l-179.455 16.968c-26.738 2.571-37.536 35.994-17.482 53.99l135.234 118.778c8.741 7.713 12.341 19.026 9.77 30.337l-40.622 166.595c-6.171 26.228 22.11 47.816 45.763 33.941l149.632-87.934c9.77-5.655 21.597-5.655 31.367 0l149.634 87.934c23.654 13.875 51.935-7.201 45.759-33.941l-40.108-166.595c-2.569-11.311 1.029-22.624 9.77-30.337l135.233-118.778c19.54-17.997 8.229-51.419-18.511-53.99z"></path>
            </svg>
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
