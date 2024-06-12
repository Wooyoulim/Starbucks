import { useState } from "react";
import CardMain from "./CardMain";
import CardSort from "./CardSort";
import ThemaSort from "./ThemaSort";
import ThemaMain from "./ThemaMain";

const CardInner = () => {
  const [goThema, setGoThema] = useState(false);
  const [currentThema, setCurrentThema] = useState("birth");
  return (
    <>
      {goThema ? (
        <>
          <ThemaSort
            goThema={goThema}
            setGoThema={setGoThema}
            currentThema={currentThema}
            setCurrentThema={setCurrentThema}
          />
          <ThemaMain currentThema={currentThema} />
        </>
      ) : (
        <>
          <CardSort goThema={goThema} setGoThema={setGoThema} />
          <CardMain />
        </>
      )}
    </>
  );
};

export default CardInner;
