import { useState } from 'react';
import { ThemeUl } from './ProductStyle';

const Productheme = ({ showNew, setShowNew }) => {
    const [content, setContent] = useState();
    const handleClickButton = (e) => {
        setShowNew({
            ...showNew,
            season: true,
            theme: e.currentTarget.value,
        });
        console.log(e.currentTarget.value);
    };
    return (
        <ThemeUl>
            <button name="summer" value="summer" onClick={(e) => handleClickButton(e)}>
                <img src="./images/product/producttheme01.jpg" alt="테마이미지1" />
            </button>
            <button name="city" value="city" onClick={(e) => handleClickButton(e)}>
                <img src="./images/product/producttheme02.jpg" alt="테마이미지2" />
            </button>
            <button name="reserve" value="reserve" onClick={(e) => handleClickButton(e)}>
                <img src="./images/product/producttheme03.png" alt="테마이미지3" />
            </button>
            <button name="online" value="online" onClick={(e) => handleClickButton(e)}>
                <img src="./images/product/producttheme04.jpg" alt="테마이미지4" />
            </button>
            <button name="offline" value="offline" onClick={(e) => handleClickButton(e)}>
                <img src="./images/product/producttheme05.jpg" alt="테마이미지5" />
            </button>
        </ThemeUl>
    );
};

export default Productheme;
