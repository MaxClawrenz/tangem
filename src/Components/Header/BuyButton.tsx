import style from "../../App.module.css";

function BuyButton() {
  return (
    <button className={style.buyButton}>
      <span className={style.buyButtonText}>Shop now</span>
    </button>
  );
}

export default BuyButton;
