import styled from "styled-components";

export const CartWrap = styled.div`
  .inner {
    width: 1520px;
    margin: auto;
    position: relative;
    box-sizing: border-box;
  }
`;

export const SubVisualWrap = styled.div`
  height: 405px;
  background-image: url("../../public/images/cards/cardVisual.jpeg");
  background-repeat: no-repeat;
  background-position: 0, 0;
  background-size: cover;
  text-align: center;
  margin-bottom: 5%;

  h2 {
    padding-top: 7%;
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    text-shadow: 2px 2px 2px gray;
  }
`;
