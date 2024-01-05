import HeaderIcon from "../../Icons/HeaderIcon";
import Point from "../../Icons/Point";
import style from "../../App.module.css";
import BuyButton from "./BuyButton";
import CloseButton from "../../Icons/CloseButton";
import Arrow from "../../Icons/Arrow";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.leftZone}>
        <HeaderIcon />
      </div>
      <div className={style.middleZone}>
        <div>
          <span className={style.boldWhiteText}>Black Friday</span>
          <span className={`${style.whiteText} ${style.desktopText}`}>
            , 24-27 Nov
          </span>
        </div>
        <Point />
        <span className={style.comma}>,</span>
        <span className={style.boldYellowText}>10%OFF</span>
        <Point />
        <span className={`${style.whiteText} ${style.whiteText2}`}>
          Use code <span className={style.boldYellowText}>10FRIDAY</span>{" "}
          <span className={style.desktopText}>at checkout</span>
        </span>
        <Arrow />
      </div>
      <div className={style.rightZone}>
        <BuyButton />
        <CloseButton />
      </div>
    </div>
  );
}

export default Header;
