import { useState } from 'react';
import NoticeItem from '../../components/notice/NoticeItem';
import { NoticeWrap } from './NoticeStyle';
import notice from '../../assets/api/notice';

const Notice = () => {
    const [data, setData] = useState(notice);
    return (
        <NoticeWrap>
            <h2>공지사항</h2>
            <table>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>제목</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <NoticeItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </NoticeWrap>
    );
};

export default Notice;
