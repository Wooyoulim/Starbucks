import { Link } from "react-router-dom";

const FoodThemeItem = ({ item }) => {
  const { imgurl, title, kor, id } = item;
  return (
    <Link to={`/food/${imgurl.split("/")[4]}/${id}`}>
      <li>
        <div className="lidiv">
          <img src={imgurl} alt={title} />
        </div>

        <span>{kor}</span>
      </li>
    </Link>
  );
};

export default FoodThemeItem;
