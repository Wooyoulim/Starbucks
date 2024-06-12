import { useState } from "react";
import { FoodForm } from "./FoodStyle";

const FoodInput = ({
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
    <FoodForm>
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
                      bread: false,
                      cake: false,
                      sandwich: false,
                      soup: false,
                      fruit: false,
                      snack: false,
                      icecream: false,
                      [e.target.name]: e.target.checked,
                    });
                  }}
                />
                <label htmlFor="chk">전체 상품보기</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="bread"
                  id="chk1"
                  value="bread"
                  checked={isCheckCategory.bread}
                  onChange={(e) => {
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    });
                  }}
                />
                <label htmlFor="chk1">브레드</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk2"
                  name="cake"
                  checked={isCheckCategory.cake}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk2">케이크</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk3"
                  name="sandwich"
                  checked={isCheckCategory.sandwich}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk3">샌드위치&샐러드</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk4"
                  name="soup"
                  checked={isCheckCategory.soup}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk4">따뜻한 푸드</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk5"
                  name="fruit"
                  checked={isCheckCategory.fruit}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk5">과일 & 요거트</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk6"
                  name="snack"
                  checked={isCheckCategory.snack}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk6">스낵 & 미니 디저트</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  id="chk7"
                  name="icecream"
                  checked={isCheckCategory.icecream}
                  onChange={(e) =>
                    setIsCheckCategory({
                      ...isCheckCategory,
                      [e.target.name]: e.target.checked,
                      all: false,
                    })
                  }
                />
                <label htmlFor="chk7">아이스크림</label>
              </p>
            </div>
          </div>
        </>
      )}
    </FoodForm>
  );
};

export default FoodInput;
