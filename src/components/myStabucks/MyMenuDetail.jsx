// My메뉴 상품별 상세 팝업
import { useSelector } from 'react-redux';
import { MyMenuDetailTd } from './MyStabucksStyle.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleDetail } from '../../store/modules/myStarbucksSlice.js';
import { useEffect } from 'react';

const MyMenuDetail = ({ onToggle, kor, cate }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { detail, prevDetail, detailLoading } = useSelector((state) => state.myStar);

    const { tabMenus } = useSelector((state) => state.myStar);
    const matchTab = tabMenus.find((menu) => menu.kor === kor);

    const { date, imgurl, option } = matchTab;
    const keyMap = {
        size: '사이즈',
        shot: '샷 추가',
        syrup: '시럽',
        drizzle: '드리즐',
        whip: '휘핑 크림',
        warm: '데우기',
        nowarm: '데우지 않기',
    };

    const onDetail = () => {
        if (detail && !detailLoading) {
            console.log(detail, detailLoading);
            navigate(detail);
        }
    };

    return (
        <MyMenuDetailTd className="detail-popup">
            <i onClick={() => onToggle('')} className="xi-close"></i>
            <strong>MY FAVORITE {cate === 1 ? 'DRINK' : cate === 2 ? 'FOOD' : 'GOODS'}</strong>
            <span>{kor}</span>
            <div className="options">
                <em>
                    <img src={imgurl} alt="" />
                </em>
                <ul>
                    <li>
                        <b>기본 {cate === 1 ? '음료' : cate === 2 ? '푸드' : '상품'}</b>
                        <span>{kor}</span>
                    </li>
                    <li>
                        <b>{cate === 1 ? '퍼스널' : cate === 2 ? '워밍' : ''} 옵션</b>
                        <span>
                            {cate === 1
                                ? Object.entries(option).map(([key, value]) => (
                                      <em key={key}>
                                          {keyMap[key]} : {value}
                                      </em>
                                  ))
                                : cate === 2
                                ? Object.entries(option).map(([key, value]) => <em key={key}>{value}</em>)
                                : ''}
                        </span>
                    </li>
                    <li>
                        <button onClick={onDetail}>{cate === 1 ? '음료' : cate === 2 ? '푸드' : '상품'} 정보</button>
                    </li>
                </ul>
            </div>
        </MyMenuDetailTd>
    );
};

export default MyMenuDetail;
