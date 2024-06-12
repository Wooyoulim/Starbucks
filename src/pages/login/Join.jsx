import { useEffect, useState } from 'react';
import agreement from './../../assets/api/agreement';
import JoinMemberInfo from './JoinMemberInfo';
import { JoinWrap, LoginBefore } from './LoginStyle';
import { FaCheck } from 'react-icons/fa';

const Join = () => {
    const [allCheck, setAllCheck] = useState(false);
    const [allagree, setAllagree] = useState();
    const [agree, setAgree] = useState(agreement);

    const changeCheck = (e) => {
        const { checked, name } = e.target;
        if (name === 'keepAll') {
            setAgree(
                agree.map((item) => {
                    return {
                        ...item,
                        isChk: checked,
                    };
                })
            );
            setAllCheck(e.target.checked ? true : false);
        } else {
            setAgree(
                agree.map((item) => (item.name === name ? { ...item, isChk: checked } : item))
            );
            setAllagree(agree.filter((item) => item.isChk !== true).length === 2 ? true : false);

            setAllCheck(allagree ? true : false);
        }
    };

    return (
        <JoinWrap>
            <h3>회원가입</h3>
            <img src="./images/login/join.png" alt="로그인 안내" />
            <p className="formTitle">회원가입 약관동의 및 본인인증단계입니다.</p>
            <form className="agreement">
                <div className="allAgree">
                    <input
                        type="checkbox"
                        name="keepAll"
                        id="keepAll"
                        checked={agree.filter((item) => item.isChk !== true).length < 1}
                        onChange={changeCheck}
                    />
                    <label htmlFor="keepAll" className="chk">
                        <FaCheck
                            style={{
                                fontSize: '16px',
                                color: 'white',
                                marginLeft: '-30px',
                                marginRight: '10px',
                                verticalAlign: 'middle',
                            }}
                        />
                        전체동의
                    </label>
                </div>

                {agree.map((agr) => (
                    <div className="agree">
                        <div className="chk">
                            <input
                                type="checkbox"
                                name={agr.name}
                                id={agr.name}
                                checked={agr.isChk}
                                onChange={changeCheck}
                            />
                            <label htmlFor={agr.name} className="chk">
                                <FaCheck
                                    style={{
                                        fontSize: '16px',
                                        color: 'white',
                                        marginLeft: '-30px',
                                        marginRight: '10px',
                                        verticalAlign: 'middle',
                                    }}
                                />
                                {agr.title} <span>(필수)</span>
                            </label>
                        </div>
                        <div className="rule">
                            <h4> {agr.title}</h4>
                            <p>{agr.sub}</p>
                            <strong> {agr.rule}</strong>
                            <em> {agr.ruleTxt}</em>
                            <span>{agr.desc}</span>
                        </div>
                    </div>
                ))}
            </form>

            {allCheck && <JoinMemberInfo />}
        </JoinWrap>
    );
};

export default Join;
