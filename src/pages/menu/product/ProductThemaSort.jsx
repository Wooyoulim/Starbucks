const ProductThemaSort = ({ item, setCurrentThema, currentThema }) => {
  const { thema, imgurl } = item;
  return (
    <li
      onClick={(e) => {
        setCurrentThema(thema);
      }}
      className={currentThema === thema ? "on" : ""}
    >
      <p>
        <img src={imgurl} alt={thema} />
      </p>
    </li>
  );
};

export default ProductThemaSort;
