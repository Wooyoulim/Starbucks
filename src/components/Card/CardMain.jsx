import CardList from "./CardList";
import { useSelector } from "react-redux";

const CardMain = () => {
  const { cardSort } = useSelector((state) => state.card);
  return (
    <div>
      <>
        {cardSort.map((data) => (
          <CardList key={data.id} data={data} />
        ))}
      </>
    </div>
  );
};

export default CardMain;
