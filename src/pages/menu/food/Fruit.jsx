import { FoodMenu } from "./FoodStyle";
import data from "../../../assets/api/foodData";
import { Link } from "react-router-dom";

const Fruit = ({ showNew }) => {
  return (
    <FoodMenu>
      <div className="inner">
        <h2>과일&요거트</h2>
        <ul>
          {showNew.new === true
            ? data.map((item) => {
                if (item?.category === "fruit") {
                  return item?.data?.map((item2) => {
                    if (item2.icon === "new") {
                      return (
                        <Link to={`${item.category}/${item2.id}`}>
                          <li key={item2.id}>
                            <div className="img">
                              <img src={item2.imgurl}></img>
                            </div>
                            <p>{item2.kor}</p>
                          </li>
                        </Link>
                      );
                    }
                  });
                }
              })
            : data?.map((item) => {
                if (item?.category === "fruit") {
                  return item?.data?.map((item2) => {
                    return (
                      <Link to={`${item.category}/${item2.id}`}>
                        <li key={item2.id}>
                          <div className="img">
                            <img src={item2.imgurl}></img>
                          </div>
                          <p>{item2.kor}</p>
                        </li>
                      </Link>
                    );
                  });
                }
              })}
        </ul>
      </div>
    </FoodMenu>
  );
};

export default Fruit;
