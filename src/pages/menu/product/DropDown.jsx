const DropDown = ({ showNew, setShowNew }) => {
    return (
        <>
            <li>
                <input
                    type="checkbox"
                    name="new"
                    id="select"
                    onChange={(e) => {
                        setShowNew({
                            ...showNew,
                            [e.target.name]: e.target.checked,
                        });
                    }}
                />
                <label htmlFor="select">
                    <img src="./images/food/mark01.png" />
                    신규출시된메뉴
                </label>
            </li>
            <li>
                <input
                    type="checkbox"
                    name="limited"
                    id="select2"
                    onChange={(e) => {
                        console.log(e.target.checked);
                        setShowNew({
                            ...showNew,
                            [e.target.name]: e.target.checked,
                        });
                    }}
                />
                <label htmlFor="select2">
                    <img src="./images/food/mark02.png" />
                    한정기간출시되는메뉴
                </label>
            </li>
        </>
    );
};

export default DropDown;
