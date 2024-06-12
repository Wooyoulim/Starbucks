const ThemaSortList = ({ data, setCurrentThema, currentThema }) => {
  const { imgurl, kor, engName } = data;
  return (
    <li
      onClick={() => setCurrentThema(engName)}
      className={currentThema === engName ? "on" : ""}
    >
      <p>
        <img src={imgurl} alt={kor} />
      </p>
    </li>
  );
};

export default ThemaSortList;
