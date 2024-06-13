import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { join } from "../../store/modules/authSlice";

const JoinMemberInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    nickName: "",
    password: "",
    passwordchk: "",
    tel: "",
    birthday: {},
  });
  const { id, email, password, passwordchk, nickName, tel } = user;

  //생일
  const [birth, setBirth] = useState({});

  const birthdayInput = (e) => {
    const { value, name } = e.target;
    setBirth({ ...birth, [name]: value });
    setUser({ ...user, birthday: { ...birth, [name]: value } });
  };

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
  const [userName, setUserName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!nickName) {
      alert("이름을 입력해주세요");
    } else if (!tel) {
      alert("휴대폰 번호를 입력해주세요");
    } else if (!email) {
      alert("이메일 주소를 입력해주세요");
    } else {
      navigate("/joinclear");
    }

    setUserName(nickName);
    dispatch(join(user));

    setUser({
      id: "",
      email: "",
      nickName: "",
      password: "",
      passwordchk: "",
      tel: "",
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
            <input
              type="radio"
              id="choose"
              name="gender"
              value="남"
              onChange={changeInput}
            />
            <label htmlFor="choose">남</label>
            <input
              type="radio"
              id="choose1"
              name="gender"
              value="여"
              onChange={changeInput}
            />
            <label htmlFor="choose1">여</label>
          </div>
        </div>
        <div className="birth">
          <h5>
            생년월일<span>(필수)</span>
            <div id="birth-date">
              <select name="year" onChange={birthdayInput}>
                <option value="">년도</option>
                <option value="2000년">2000년</option>
                <option value="1999년">1999년</option>
                <option value="1998년">1998년</option>
                <option value="1997년">1997년</option>
                <option value="1996년">1996년</option>
                <option value="1995년">1995년</option>
                <option value="1994년">1994년</option>
                <option value="1993년">1993년</option>
                <option value="1992년">1992년</option>
                <option value="1991년">1991년</option>
              </select>
              <select name="month" onChange={birthdayInput}>
                <option value="">월</option>
                <option value="1월">1월</option>
                <option value="2월">2월</option>
                <option value="3월">3월</option>
                <option value="4월">4월</option>
                <option value="5월">5월</option>
                <option value="6월">6월</option>
                <option value="7월">7월</option>
                <option value="8월">8월</option>
                <option value="9월">9월</option>
                <option value="10월">10월</option>
                <option value="11월">11월</option>
                <option value="12월">12월</option>
              </select>
              <select name="day" onChange={birthdayInput}>
                <option value="">일</option>
                <option value="1일">1일</option>
                <option value="2일">2일</option>
                <option value="3일">3일</option>
                <option value="4일">4일</option>
                <option value="5일">5일</option>
                <option value="6일">6일</option>
                <option value="7일">7일</option>
                <option value="8일">8일</option>
                <option value="9일">9일</option>
                <option value="10일">10일</option>
                <option value="11일">11일</option>
                <option value="12일">12일</option>
                <option value="13일">13일</option>
                <option value="14일">14일</option>
                <option value="15일">15일</option>
                <option value="16일">16일</option>
                <option value="17일">17일</option>
                <option value="18일">18일</option>
                <option value="19일">19일</option>
                <option value="20일">20일</option>
                <option value="21일">21일</option>
                <option value="22일">22일</option>
                <option value="23일">23일</option>
                <option value="24일">24일</option>
                <option value="25일">25일</option>
                <option value="26일">26일</option>
                <option value="27일">27일</option>
                <option value="28일">28일</option>
                <option value="29일">29일</option>
                <option value="30일">30일</option>
                <option value="31일">31일</option>
              </select>
              <select name="solar/lunar" onChange={birthdayInput}>
                <option value="">양력/음력</option>
                <option value="양력">양력</option>
                <option value="음력">음력</option>
              </select>
            </div>
          </h5>
        </div>
        <div className="tel">
          <h5>
            휴대폰<span>(필수)</span>
          </h5>
          <input type="text" name="tel" value={tel} onChange={changeInput} />
          <input
            type="checkbox"
            name="snsAgree"
            id="agree1"
            onChange={changeInput}
          />
          <label htmlFor="agree1" className="chk sub">
            <FaCheck
              style={{
                color: "white",
                marginLeft: "-30px",
                marginRight: "10px",
                verticalAlign: "middle",
              }}
            />
            SNS를 통한 이벤트 및 신규 매장 정보 수신에 동의합니다. [선택]
          </label>
        </div>
        <div className="email">
          <h5>
            이메일<span>(필수)</span>
          </h5>
          <input
            type="text"
            name="email"
            value={email}
            onChange={changeInput}
          />
          <input
            type="checkbox"
            name="emailAgree"
            id="agree2"
            onChange={changeInput}
          />
          <label htmlFor="agree2" className="chk sub">
            <FaCheck
              style={{
                color: "white",
                marginLeft: "-30px",
                marginRight: "10px",
                verticalAlign: "middle",
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
