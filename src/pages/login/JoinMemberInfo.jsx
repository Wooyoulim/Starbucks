import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { join } from '../../store/modules/authSlice';

const JoinMemberInfo = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: '',
        nickName: '',
        password: '',
        passwordchk: '',
        tel: '',
    });
    const { id, email, password, passwordchk, nickName, tel } = user;
    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    //성별 체크
    /*   const [male, setMale] = useState(true);
    const [female, setFemale] = useState(false);
    const genderClick = (e) => {
        setMale(!male);
        setFemale(!female);
    }; */
    //
    const [userName, setUserName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!nickName) {
            alert('이름을 입력해주세요');
        } else if (!tel) {
            alert('휴대폰 번호를 입력해주세요');
        } else if (!email) {
            alert('이메일 주소를 입력해주세요');
        } else {
            navigate('/joinclear');
        }

        setUserName(nickName);
        dispatch(join(user));

        setUser({
            id: '',
            email: '',
            nickName: '',
            password: '',
            passwordchk: '',
            tel: '',
        });
    };

    return (
        <>
            <p className="formTitle">회원 정보를 입력해주세요</p>
            <form className="memberInfo" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="이메일 또는 아이디"
                    name="email"
                    value={email}
                    onChange={changeInput}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    name="password"
                    value={password}
                    onChange={changeInput}
                />
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    name="passwordchk"
                    value={passwordchk}
                    onChange={changeInput}
                />
                <div className="name">
                    <h5>
                        이름<span>(필수)</span>
                    </h5>
                    <div className="gender">
                        <input
                            className="word"
                            name="nickName"
                            value={nickName}
                            onChange={changeInput}
                            type="text"
                        />
                        <input type="radio" id="choose" name="choose" />
                        <label htmlFor="choose">남</label>
                        <input type="radio" id="choose1" name="choose" />
                        <label htmlFor="choose1">여</label>
                    </div>
                </div>
                <div className="birth">
                    <h5>
                        생년월일<span>(필수)</span>
                        <div id="birth-date">
                            <select>
                                <option>2000년</option>
                                <option>1999년</option>
                                <option>1998년</option>
                                <option>1997년</option>
                                <option>1996년</option>
                                <option>1995년</option>
                                <option>1994년</option>
                                <option>1993년</option>
                                <option>1992년</option>
                                <option>1991년</option>
                            </select>
                            <select>
                                <option>1월</option>
                                <option>2월</option>
                                <option>3월</option>
                                <option>4월</option>
                                <option>5월</option>
                                <option>6월</option>
                                <option>7월</option>
                                <option>8월</option>
                                <option>9월</option>
                                <option>10월</option>
                                <option>11월</option>
                                <option>12월</option>
                            </select>
                            <select>
                                <option>1일</option>
                                <option>2일</option>
                                <option>3일</option>
                                <option>4일</option>
                                <option>5일</option>
                                <option>6일</option>
                                <option>7일</option>
                                <option>8일</option>
                                <option>9일</option>
                                <option>10일</option>
                                <option>11일</option>
                                <option>12일</option>
                                <option>13일</option>
                                <option>14일</option>
                                <option>15일</option>
                                <option>16일</option>
                                <option>17일</option>
                                <option>18일</option>
                                <option>19일</option>
                                <option>20일</option>
                                <option>21일</option>
                                <option>22일</option>
                                <option>23일</option>
                                <option>24일</option>
                                <option>25일</option>
                                <option>26일</option>
                                <option>27일</option>
                                <option>28일</option>
                                <option>29일</option>
                                <option>30일</option>
                                <option>31일</option>
                            </select>
                            <select>
                                <option>양력</option>
                                <option>음력</option>
                            </select>
                        </div>
                    </h5>
                </div>
                <div className="tel">
                    <h5>
                        휴대폰<span>(필수)</span>
                    </h5>
                    <input type="text" name="tel" value={tel} onChange={changeInput} />
                    <input type="checkbox" name="agree1" id="agree1" />
                    <label htmlFor="agree1" className="chk sub">
                        <FaCheck
                            style={{
                                color: 'white',
                                marginLeft: '-30px',
                                marginRight: '10px',
                                verticalAlign: 'middle',
                            }}
                        />
                        SNS를 통한 이벤트 및 신규 매장 정보 수신에 동의합니다. [선택]
                    </label>
                </div>
                <div className="email">
                    <h5>
                        이메일<span>(필수)</span>
                    </h5>
                    <input type="text" name="email" value={email} onChange={changeInput} />
                    <input type="checkbox" name="agree2" id="agree2" />
                    <label htmlFor="agree2" className="chk sub">
                        <FaCheck
                            style={{
                                color: 'white',
                                marginLeft: '-30px',
                                marginRight: '10px',
                                verticalAlign: 'middle',
                            }}
                        />
                        이메일을 통한 이벤트 및 신규 매장 정보 수신에 동의합니다. [선택]
                    </label>
                </div>
                <p>
                    <button className="join" onClick={() => dispatch(join(user))}>
                        가입하기
                    </button>
                </p>
            </form>
        </>
    );
};

export default JoinMemberInfo;
