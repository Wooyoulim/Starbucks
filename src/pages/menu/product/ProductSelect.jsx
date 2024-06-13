import { useState } from "react";
import { SelectBox } from "./ProductStyle";
import DropDown from "./DropDown";

const ProductSelect = ({ showNew, setShowNew }) => {
  const [showOptions, SetShowOptions] = useState(false);

  return (
    <SelectBox>
      <div>
        <label>상세분류</label>
        <button onClick={() => SetShowOptions(!showOptions)}>
          <i className="xi-angle-down-min"></i>
        </button>
      </div>

      <ul>
        {showOptions && <DropDown showNew={showNew} setShowNew={setShowNew} />}
      </ul>
    </SelectBox>
  );
};

export default ProductSelect;
