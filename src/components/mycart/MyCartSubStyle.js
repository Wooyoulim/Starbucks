import styled from "styled-components";

export const MyCartEmptyDiv = styled.div`
  h3 {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    height: 400px;
    line-height: 400px;
  }
`;

export const MyCartListWrap = styled.div`
  width: 1520px;
  margin-top: 40px;
  .cartList {
    margin-top: 40px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 200px;
      border-bottom: 1px solid #2c2a29;
      &:nth-of-type(1) {
        border-top: 1px solid #2c2a29;
      }
      p {
        margin-left: 50px;
      }
      .name {
        width: 300px;
      }
      .allPrice {
        width: 150px;
        text-align: center;
      }
      img {
        transform: scale(0.4);
      }
    }
  }
  button {
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #9e9e9e;
    width: 150px;
    height: 40px;
    &:hover {
      background-color: #006633;
      color: #fff;
    }
  }
  .total {
    margin-top: 50px;
    p {
      margin-right: 50px;
      font-weight: 700;
      font-size: 18px;
      span {
        margin-left: 10px;
      }
    }
    display: flex;
    justify-content: end;
    align-items: center;
    button {
      margin-right: 30px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  input[type="checkbox"] {
    display: none;
  }
  label {
    cursor: pointer;
    padding-left: 21px;
    background-repeat: no-repeat;
    background-position: 0 35%;
    background-image: url("../../public/images/drink/ck_icon.jpg");
  }
  input[type="checkbox"]:checked + label {
    cursor: pointer;
    padding-left: 21px;
    background-repeat: no-repeat;
    background-position: 0 35%;
    background-image: url("../../public/images/drink/ck_icon_on.jpg");
  }
`;
