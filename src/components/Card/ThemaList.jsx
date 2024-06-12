import { Link } from "react-router-dom";
import { CardThemaItem } from "./cardStyle";

const ThemaList = ({ item }) => {
  const { imgurl, kor, id } = item;
  return (
    <CardThemaItem>
      <Link to={`/card/${imgurl.split("/")[5]}/${id}`}>
        <div className="img">
          <img src={imgurl} alt={kor} />
        </div>
      </Link>
      <p>{kor}</p>
    </CardThemaItem>
  );
};

export default ThemaList;
