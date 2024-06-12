import { Link } from "react-router-dom";

const productThemaItem = ({ data }) => {
  const { imgurl, title, kor, id } = data;
  return (
    <Link to={`/product/${imgurl.split("/")[4]}/${id}`}>
      <li>
        <div className="lidiv">
          <img src={imgurl} alt={title} />
        </div>
        <span>{kor}</span>
      </li>
    </Link>
  );
};

export default productThemaItem;
