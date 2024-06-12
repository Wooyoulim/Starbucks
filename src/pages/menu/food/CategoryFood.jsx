import React from "react";
import Bread from "./Bread";
import Cake from "./Cake";
import Sandwich from "./Sandwich";
import Soup from "./Soup";
import Fruit from "./Fruit";
import Snack from "./Snack";
import Icecream from "./Icecream";
const CategoryFood = ({ showNew }) => {
  return (
    <>
      <Bread showNew={showNew} />
      <Cake showNew={showNew} />
      <Sandwich showNew={showNew} />
      <Soup showNew={showNew} />
      <Fruit showNew={showNew} />
      <Snack showNew={showNew} />
      <Icecream showNew={showNew} />
    </>
  );
};

export default CategoryFood;
