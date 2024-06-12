import { useState } from "react";
import DrinkMain from "./DrinkMain";
import DrinkSort from "./DrinkSort";
import ThemaSort from "./ThemaSort";
import ThemaMain from "./ThemaMain";

const DrinkInner = () => {
  const [goThema, setGoThema] = useState(false);
  return (
    <>
      {goThema ? (
        <>
          <ThemaSort goThema={goThema} setGoThema={setGoThema} />
          <ThemaMain />
        </>
      ) : (
        <>
          <DrinkSort goThema={goThema} setGoThema={setGoThema} />
          <DrinkMain />
        </>
      )}
    </>
  );
};

export default DrinkInner;
