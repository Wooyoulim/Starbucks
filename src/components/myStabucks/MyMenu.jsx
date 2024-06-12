// My메뉴 아코디언
import { MyMenuLi } from './MyStabucksStyle.js';
import MyMenuList from './MyMenuList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { myMenuChange, onToggle } from '../../store/modules/myStarbucksSlice.js';
import { useSelector } from 'react-redux';

// My메뉴 아코디언
const MyMenu = () => {
    const tabsArr = [
        { id: 1, cate: 1, tabName: '나만의 음료', isOn: true },
        { id: 2, cate: 2, tabName: '나만의 푸드', isOn: false },
        { id: 3, cate: 3, tabName: '나만의 상품', isOn: false },
    ];
    const [view, setView] = useState(tabsArr);
    const { isShow } = useSelector((state) => state.myStar);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(myMenuChange(1));
    }, [dispatch]);

    const changeData = (menu) => {
        dispatch(myMenuChange(menu));
    };

    const onView = (id) => {
        setView(view.map((tab) => (tab.id === id ? { ...tab, isOn: true } : { ...tab, isOn: false })));
        dispatch(myMenuChange(id));
    };

    return (
        <MyMenuLi className={isShow.isMenu === true ? 'on' : ''}>
            <strong className="acd-name">
                My 메뉴<i className="xi-angle-up" onClick={() => dispatch(onToggle({ key: 'isMenu' }))}></i>
            </strong>
            {/* <div className={`acd-in ` + `on`}> */}
            <div className="acd-in on">
                <ul className="tabs">
                    {view.map((tabs) => (
                        <li key={tabs.id} className={tabs.isOn ? 'on' : ''} onClick={() => onView(tabs.id)}>
                            {tabs.tabName}
                        </li>
                    ))}
                </ul>
                <MyMenuList />
            </div>
        </MyMenuLi>
    );
};

export default MyMenu;
