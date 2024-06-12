import { useDispatch, useSelector } from 'react-redux';
import MyMenuItem from './MyMenuItem';
import { MyMenuListTable } from './MyStabucksStyle.js';
import { useEffect, useState } from 'react';
import { myMenuDel } from '../../store/modules/myStarbucksSlice.js';

// My메뉴 리스트 목록
const MyMenuList = () => {
    const { user, tabMenus } = useSelector((state) => state.myStar);

    const dispatch = useDispatch();
    const [chkData, setChkData] = useState(tabMenus);
    const allChecked = chkData.length > 0 && chkData.every((chk) => chk.isChk); // 전체가 이미 체크되어 있는지 확인

    useEffect(() => {
        setChkData(tabMenus);
    }, [user, tabMenus]);

    const changeInput = (e) => {
        const { checked, name } = e.target;
        if (name === 'all') {
            setChkData(chkData.map((chk) => ({ ...chk, isChk: !allChecked }))); // 전체의 상태를 반전
        } else {
            setChkData(chkData.map((chk) => (chk.kor === name ? { ...chk, isChk: checked } : chk)));
        }
    };

    const allCheck = () => {
        setChkData(chkData.map((chk) => ({ ...chk, isChk: !allChecked }))); // 전체의 상태를 반전
    };
    const menuFind = () => {
        const chkFind = chkData.filter((chk) => chk.isChk === true);
        dispatch(myMenuDel(chkFind));
    };

    return (
        <>
            <MyMenuListTable>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                    <col className="w4" />
                    <col className="w5" />
                </colgroup>
                <thead>
                    <tr>
                        <td>
                            <input type="checkbox" name="all" onChange={changeInput} checked={chkData.length > 0 && chkData.filter((chk) => chk.isChk !== true).length < 1} />
                        </td>
                        <td>NO</td>
                        <td>음료명</td>
                        <td>옵션</td>
                        <td>등록일</td>
                    </tr>
                </thead>
                {chkData.length > 0 ? (
                    chkData.map((menu, index) => <MyMenuItem key={menu.id} index={index + 1} menu={menu} changeInput={changeInput} />)
                ) : (
                    <tbody>
                        <tr>
                            <td style={{ lineHeight: '66px', borderBottom: '1px solid #aaa' }} colSpan={5}>
                                데이터가 없습니다.
                            </td>
                        </tr>
                    </tbody>
                )}
            </MyMenuListTable>
            <p>
                <button onClick={allCheck}>전체선택</button>
                <button onClick={() => menuFind(chkData)}>선택삭제</button>
            </p>
        </>
    );
};

export default MyMenuList;
