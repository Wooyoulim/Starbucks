import { NoticeDetailWrap } from './NoticeDetailStyle';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NoticeDetail = () => {
    const { noticeID } = useParams();
    const navigate = useNavigate();
    const { data } = useSelector((state) => state.noticeR);

    const select1 = data.find((item) => item.id === Number(noticeID));
    const { id, title, desc } = select1;
    return (
        <NoticeDetailWrap>
            <h2>공지사항</h2>
            <div className="detail">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

            <button onClick={() => navigate('/notice')}>목록으로</button>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;
