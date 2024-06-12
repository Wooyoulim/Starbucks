import { useSelector } from "react-redux";
import ThemaList from "./ThemaList";
import { CardThemaList } from "./cardStyle";

const ThemaMain = ({ currentThema }) => {
  const { cardThemaData } = useSelector((state) => state.card);
  const currentThemaData = cardThemaData.find(
    (item) => item.thema === currentThema
  );
  return (
    <CardThemaList>
      {currentThemaData.data.map((item) => (
        <ThemaList key={item.index} item={item} />
      ))}
    </CardThemaList>
  );
};

export default ThemaMain;
