import Styles from './GameNotFound.module.css';

export const GameNotFound = () => {
  return (
    <div className={Styles["not-found"]}>
      <h2 className={Styles["not-found__text"]}>Такой игры не существует :(</h2>
      <img className={Styles["not-found__image"]} src="https://sun9-36.userapi.com/impg/72a3PUZALbbH3iJYhTgwNNCq-s240lYP6yE9SQ/3A-HSlEeoPw.jpg?size=1252x838&quality=96&sign=eb0e66330ddf4da47785a1f50017cf9c&c_uniq_tag=Cm_6FCtEjbRplPjmpu07AyxZpYbqeneqCROQs6nsI14&type=album"/>
    </div>
  )
};