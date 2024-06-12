import { useState } from "react";
import { ProductThemaForm } from "./ProductStyle";
import ProductThemaSort from "./ProductThemaSort";
import productThemaSort from "../../../assets/api/productThemaSort";

const ProductInput = ({
  setOnThema,
  setCurrentThema,
  currentThema,
  setShowNew,
  onThema,
}) => {
  const [showInput, setShowInput] = useState(true);
  const [buttonInput, setButtonInput] = useState(true);

  const changeButton = () => {
    setButtonInput(!buttonInput);
    setOnThema((onThema) => !onThema);
    setShowNew({
      new: false,
      season: false,
      theme: "",
    });
  };

  return (
    <ProductThemaForm>
      <div className="top">
        <h2>분류보기</h2>
        <p onClick={() => setShowInput(!showInput)}>
          <i className="xi-angle-up"></i>
        </p>
      </div>
      {showInput && (
        <>
          <div className="btn">
            <button className={onThema ? "" : "on"} onClick={changeButton}>
              카테고리
            </button>
            <button className={onThema ? "on" : ""} onClick={changeButton}>
              테마
            </button>
          </div>
          <ul className="themaSort">
            {productThemaSort.map((item) => (
              <ProductThemaSort
                key={item.id}
                item={item}
                setCurrentThema={setCurrentThema}
                currentThema={currentThema}
              />
            ))}
          </ul>
        </>
      )}
    </ProductThemaForm>
  );
};

export default ProductInput;
