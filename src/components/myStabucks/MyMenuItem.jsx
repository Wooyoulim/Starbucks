import { useState } from 'react';
import { MyMenuListTbody, OverlayWrap } from './MyStabucksStyle.js';
import MyMenuDetail from './MyMenuDetail.jsx';
import { useDispatch } from 'react-redux';
import { handleDetail } from '../../store/modules/myStarbucksSlice.js';

const MyMenuItem = ({ menu, index, changeInput }) => {
    const { kor, option, date, isChk, cate } = menu;
    const dispatch = useDispatch();
    const keyMap = {
        size: '사이즈',
        shot: '샷 추가',
        syrup: '시럽',
        drizzle: '드리즐',
        whip: '휘핑 크림',
        warm: '워밍',
        nowarm: '워밍',
    };
    const [isDetail, setIsDetail] = useState(false);
    const [tab, setTab] = useState('');

    const onToggle = (kor) => {
        setIsDetail(!isDetail);
        setTab(kor);
        dispatch(handleDetail({ cate, kor }));
    };
    return (
        <>
            <MyMenuListTbody>
                {isDetail && (
                    <OverlayWrap>
                        <MyMenuDetail onToggle={onToggle} kor={kor} cate={cate} />
                    </OverlayWrap>
                )}
                <tr>
                    <td>
                        <p>
                            <input type="checkbox" checked={isChk} name={kor} onChange={changeInput} />
                            <label htmlFor="all"></label>
                        </p>
                    </td>
                    <td>{index}</td>
                    <td onClick={() => onToggle(kor)}>{kor}</td>
                    <td>
                        {cate === 1
                            ? Object.entries(option).map(([key, value]) => (
                                  <span key={key}>
                                      {keyMap[key]} : {value}
                                  </span>
                              ))
                            : cate === 2
                            ? Object.entries(option).map(([key, value]) => <span key={key}>{value}</span>)
                            : ''}
                    </td>
                    <td>{date}</td>
                </tr>
            </MyMenuListTbody>
        </>
    );
};

export default MyMenuItem;
