import { useEffect, useRef, useState } from 'react';
import { CustomContent } from './drinkMenuStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addMymenus } from '../../store/modules/myStarbucksSlice';
import { signUpDate } from '../../store/modules/authSlice';
const DetailCustom = ({ cgData, setCustomOn }) => {
    const { user, currentDate  } = useSelector((state) => state.authR);
    const dispatch = useDispatch();
    const { id, imgurl, kor } = cgData;
    const idRef = useRef(user.myMenus ? user.myMenus.length + 1 : 0);
    const [shotNum, setShotNum] = useState(1);
    const [syrupNum, setSyrupNum] = useState(1);
    const [size, setSize] = useState('Tall');
    const [drizzle, setDrizzle] = useState('선택 안 함');
    const [whip, setWhip] = useState('추가');
    const shotMinus = (e) => {
        e.preventDefault();
        if (shotNum === 0) return;
        setShotNum(shotNum - 1);
    };
    const syrupMinus = (e) => {
        e.preventDefault();
        if (syrupNum === 0) return;
        setSyrupNum(shotNum - 1);
    };
    useEffect(() => {
        dispatch(signUpDate());
    }, []);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addMymenus({
                id: idRef.current++,
                drinkNo: id,
                kor: kor,
                imgurl: imgurl,
                cate: 1,
                option: {
                    size: size,
                    shot: shotNum,
                    syrup: syrupNum,
                    drizzle: drizzle,
                    whip: whip,
                },
               date: currentDate,
                isChk: false,
            })
        );
        setCustomOn(false);
    };
    return (
        <CustomContent onSubmit={onSubmit}>
            <div className="content">
                <div className="left">
                    <img src={imgurl} alt={kor} />
                </div>
                <div className="right">
                    <div className="size">
                        <span>사이즈</span>
                        <select
                            name="size"
                            id="size"
                            onChange={(e) => {
                                setSize(e.target.value);
                            }}
                        >
                            <option value="Tall">Tall / 355ml(12oz)</option>
                            <option value="Grande">Grande / 473ml(16oz)</option>
                            <option value="Venti">Venti / 591ml(20oz)</option>
                            <option value="Trenta">Trenta / 887ml(30oz)</option>
                        </select>
                    </div>
                    <div className="shot">
                        <span>에스프레소 샷</span>
                        <button onClick={shotMinus}>-</button>
                        <b>{shotNum}</b>
                        <button
                            onClick={(e) => {
                                e.preventDefault() & setShotNum(shotNum + 1);
                            }}
                        >
                            +
                        </button>
                    </div>
                    <div className="syrup">
                        <span>시럽</span>
                        <button onClick={syrupMinus}>-</button>
                        <b>{syrupNum}</b>
                        <button
                            onClick={(e) => {
                                e.preventDefault() & setSyrupNum(syrupNum + 1);
                            }}
                        >
                            +
                        </button>
                    </div>
                    <div className="drizzle">
                        <span>드리즐</span>
                        <select
                            name="drizzle"
                            id="drizzle"
                            onChange={(e) => {
                                setDrizzle(e.target.value);
                            }}
                        >
                            <option value="선택안함">선택안함</option>
                            <option value="초코 드리즐 추가">초코 드리즐 추가</option>
                            <option value="카라멜 드리즐 추가">카라멜 드리즐 추가</option>
                        </select>
                    </div>
                    <div className="whipping">
                        <span>휘핑</span>
                        <input
                            type="radio"
                            defaultChecked
                            name="radioWhipping"
                            id="addWhipping"
                            onChange={() => {
                                setWhip('추가');
                            }}
                        />
                        <label htmlFor="addWhipping">추가</label>
                        <input
                            type="radio"
                            name="radioWhipping"
                            id="NotWhippiing"
                            onChange={() => {
                                setWhip('제거');
                            }}
                        />
                        <label htmlFor="NotWhippiing">제거</label>
                    </div>
                </div>
            </div>
            <p className="customBtn">
                <button className="customSave" type="submit">
                    등록
                </button>
                <button
                    className="customCancel"
                    onClick={() => {
                        setCustomOn(false);
                    }}
                >
                    취소
                </button>
            </p>
        </CustomContent>
    );
};
export default DetailCustom;
