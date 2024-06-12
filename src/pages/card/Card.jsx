import { CartWrap } from "./card";
import CardSubVisual from "../../components/CardSubVisual";
import CardInner from "../../components/Card/CardInner";

const Card = () => {
  return (
    <CartWrap>
      <CardSubVisual />
      <div className="inner">
        <CardInner />
      </div>
    </CartWrap>
  );
};

export default Card;
