import { useEffect, useState } from 'react';
import { LoginWrap } from './LoginStyle';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { keepID, login, signUpDate, keepChk, removeKeep } from '../../store/modules/authSlice';

const Login = () => {
    const { authed, keepData, isChk } = useSelector((state) => state.authR);

    const [user, setUser] = useState({
        email: isChk ? keepData : '',
        password: '',
    });
    const { email, password } = user;
    const [keep, setKeep] = useState(isChk);

    const changeKeep = (e) => {
        const { checked } = e.target;
        setKeep(checked);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const chageInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) return;
        dispatch(login(user));
        {
            keep ? dispatch(keepID(user)) : dispatch(removeKeep(user));
        }
        dispatch(keepChk(keep));
    };

        useEffect(() => {
        authed ? navigate('/') : navigate('/login');
    }, [authed]);

    return (
        <LoginWrap>
            {/* {loginChk} */}
            <h3>로그인</h3>
            <img src="./images/login/bgLogo.png" alt="스타벅스 로고" />
            <form onSubmit={onSubmit} className="loginForm">
                <p className="greeting">
                    <span>Welcome!</span> 스타벅스 코리아에 오신 것을 환영합니다.
                </p>

                <input
                    type="text"
                    placeholder="이메일을 입력해주세요"
                    name="email"
                    value={email}
                    onChange={chageInput}
                />

                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    name="password"
                    value={password}
                    onChange={chageInput}
                />
                <div className="idKeep">
                    <input
                        type="checkbox"
                        name="keep"
                        id="keep"
                        checked={keep}
                        onChange={changeKeep}
                    />

                    <label htmlFor="keep">
                        <FaCheck
                            style={{
                                color: 'white',
                                marginLeft: '-30px',
                                marginRight: '10px',
                                verticalAlign: 'middle',
                            }}
                        />
                        아이디저장
                    </label>
                </div>

                <p>
                    <button type="submit">로그인</button>
                </p>
            </form>
            <p className="attention">
                * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이 있으므로, 정기적인
                비밀번호 변경을 해주시길 바랍니다.
            </p>
            <p className="attention">
                * 스타벅스 코리아의 공식 홈페이지는 Internet Explorer 9.0 이상, Chrome, Firefox,
                Safari 브라우저에 최적화 되어있습니다.
            </p>
        </LoginWrap>
    );
};

export default Login;
