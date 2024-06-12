import React from "react";
import Mug from "./Mug";
import Glass from "./Glass";
import Plastic from "./Plastic";
import Stainless from "./Stainless";
import Flask from "./Flask";
import Accessory from "./Accessory";
import Tea from "./Tea";

const CategoryProduct = ({ showNew }) => {
  return (
    <>
      <Mug showNew={showNew} />
      <Glass showNew={showNew} />
      <Plastic showNew={showNew} />
      <Stainless showNew={showNew} />
      <Flask showNew={showNew} />
      <Accessory showNew={showNew} />
      <Tea showNew={showNew} />
    </>
  );
};

export default CategoryProduct;
