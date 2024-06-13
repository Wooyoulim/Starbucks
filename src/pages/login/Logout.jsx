import { useDispatch } from 'react-redux';
import { LogoutWrap } from './LoginStyle';
import { logout } from '../../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Logout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <LogoutWrap>
            <h3>안녕히 가세요</h3>
            <img src="./images/login/logout.png" alt="안녕히 가세요" />

            <p>
                <button onClick={() => Logout()}>로그아웃 하기</button>
            </p>
        </LogoutWrap>
    );
};

export default Logout;
