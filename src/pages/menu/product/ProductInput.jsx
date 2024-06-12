import { useState } from "react";
import { ProductForm } from "./ProductStyle";

const ProductInput = ({
  setIsCheckCategory,
  isCheckCategory,
  setOnThema,
  onThema,
}) => {
  const [showInput, setShowInput] = useState(true);

  const onClickBtn = () => {
    setOnThema(!onThema);
    setShowNew({
      new: false,
      season: false,
      theme: "",
    });
  };

  return (
    <ProductForm>
      <div className="top">
        <h2>분류보기</h2>
        <p onClick={() => setShowInput(!showInput)}>
          <i className="xi-angle-up"></i>
        </p>
      </div>

      {showInput && (
        <>
          <div className="btn">
            <button onClick={onClickBtn} className={onThema ? "" : "on"}>
              카테고리
            </button>
            <button onClick={onClickBtn} className={onThema ? "on" : ""}>
              테마
            </button>
          </div>
          <div>
            <div className="checkbox">
              <p>
                <input
                  type="checkbox"
                  id="chk"
                  name="all"
                  value="all"
                  checked={isCheckCategory.all}
                  onChange={(e) => {
                    setIsCheckCategory({
                      mug: false,
                      accessory: false,
                      flask: false,
                      glass: false,
                      plastic: false,
                      setproduct: false,
                      stainless: false,
                      tea: false,
                      [e.target.name]: e.target.checked,
                    });
                  }}
                />
                <label htmlFor="chk">전체 상품보기</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="mug"
                  id="chk1"
                  checked={isCheckCategory.mug}
                  onChange={(e) => {
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    });
                  }}
                />
                <label htmlFor="chk1">머그</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk2"
                  name="glass"
                  checked={isCheckCategory.glass}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk2">글라스</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk3"
                  name="plastic"
                  checked={isCheckCategory.plastic}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk3">플라스틱 텀블러</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk4"
                  name="stainless"
                  checked={isCheckCategory.stainless}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk4">스테인리스 텀블러</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk5"
                  name="flask"
                  checked={isCheckCategory.flask}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk5">보온병</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk6"
                  name="accessory"
                  checked={isCheckCategory.accessory}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk6">액세서리</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk7"
                  name="setproduct"
                  checked={isCheckCategory.setproduct}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk7">선물세트</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk8"
                  name="tea"
                  checked={isCheckCategory.tea}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk8">패키지 티</label>
              </p>
            </div>
          </div>
        </>
      )}
    </ProductForm>
  );
};

export default ProductInput;
