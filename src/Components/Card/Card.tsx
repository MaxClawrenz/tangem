import style from "../../App.module.css";
import CloseButton from "../../Icons/CloseButton";
import { ICardProps } from "../../interfaces/ICardProps";

function Card(props: ICardProps) {
  return (
    <div className={style.card}>
      <div className={style.cardRightZone}>
        <div onClick={props.onClick} className={style.cardClose}>
          <CloseButton />
        </div>
        <div className={style.textBlock}>
          <div className={style.cardTitle}>Black Friday</div>
          <div className={style.cardDiscount}>10%OFF</div>
          <div className={style.cardCode}>
            Use code <span className={style.boldYellowText}>10FRIDAY</span> at
            checkout
          </div>
          <div className={style.cardButton}>
            Shop now{" "}
            <span className={style.cardButtonDesktop}>through Monday</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
