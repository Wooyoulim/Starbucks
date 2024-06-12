import { Link } from "react-router-dom";
import { HeaderWarp } from "./HeaderStyle";
import NavBar from "./NavBar";
import styled from "styled-components";

const Hwrap = styled.div`
  width: 100%;
  height: 120px;
`;
const Header = () => {
  return (
    <Hwrap>
      <HeaderWarp>
        <div className="inner">
          <h1>
            <Link to={"/"}>
              <img src="../images/logo.png" alt="스타벅스 로고" />
            </Link>
          </h1>
          <NavBar />
        </div>
      </HeaderWarp>
    </Hwrap>
  );
};

export default Header;
