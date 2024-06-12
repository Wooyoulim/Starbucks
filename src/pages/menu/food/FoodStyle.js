import styled from "styled-components";
import img from "../../../../public/images/subvisual/foodsubvisual.jpg";

export const SubVisualWrap = styled.div`
  height: 405px;
  background-image: url(${img});
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

export const FoodWrap = styled.div`
  .inner {
    padding-bottom: 130px;
    .foodmenu {
      position: relative;
      display: flex;
    }
    .select {
      position: absolute;
      right: 0;
      top: 40px;
      z-index: 10;
    }
    .food {
    }
  }
`;
export const FoodForm = styled.div`
  border: 1px solid #999;
  border-radius: 10px;
  width: 1520px;
  position: relative;

  .top {
    display: flex;
    align-items: center;
    margin: 18px 30px;
    justify-content: space-between;

    h2 {
      font-size: 16px;
      font-weight: 700;
    }
    p {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #efefef;
      text-align: center;
      line-height: 45px;
      i {
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
  .btn {
    margin: 25px 30px;
    margin-bottom: 20px;
    font-size: 14px;
    border-top: 1px solid #999;
    width: 1458px;
    padding-top: 30px;

    button {
      width: 200px;
      height: 35px;
      border-radius: 3px;
      border: none;
      color: #222;
      margin-right: 30px;
      &.on {
        background: #006633;
        color: #fff;
        margin-right: 30px;
      }
    }
  }
  .themaSort {
    display: flex;
    padding: 20px;
    li {
      width: 335px;
      height: 90px;
      &:nth-of-type(1) {
        margin-bottom: 20px;
      }
      &.on {
        outline: 2px solid #006633;
      }
    }
  }

  .checkbox {
    margin: 0 30px;
    display: flex;
    margin-bottom: 30px;

    p {
      margin-right: 30px;
      display: flex;
      align-items: center;
      position: relative;

      input[type="checkbox"] {
        display: none;
      }
      label {
        position: relative;
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
    }
  }
`;

export const SelectBox = styled.div`
  width: 200px;
  padding: 8px;
  border-radius: 5px;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid #dcdcdc;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
      font-size: 14px;
      margin-left: 4px;
      text-align: center;
    }
    button {
      background: none;
      border: none;

      i {
        font-size: 18px;
      }
    }
  }

  ul {
    list-style: none;
    width: 100%;
    overflow: hidden;
    padding: 0;
    border-radius: 8px;

    li {
      input[type="checkbox"] {
        display: none;
      }
      label {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding-left: 21px;
        background-repeat: no-repeat;
        background-position: 0.4%;
        background-image: url("../../public/images/drink/ck_icon.jpg");
        user-select: none;
      }
      input[type="checkbox"]:checked + label {
        cursor: pointer;
        padding-left: 21px;
        background-repeat: no-repeat;
        background-position: 0.4%;
        background-image: url("../../public/images/drink/ck_icon_on.jpg");
      }

      img {
        width: 30px;
        height: 30px;
        margin-right: 5px;
      }
      display: flex;
      align-items: center;
      font-size: 13px;
      padding: 10px 8px;
      border-bottom: 1px solid #dcdcdc;

      &:first-child {
        margin-top: 10px;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

export const FoodMenu = styled.div`
  padding-top: 8%;

  h2 {
    font-size: 16px;
    font-weight: 700;
    background: #f4f4f2;
    width: 1510px;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    margin-bottom: 50px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 1520px;
    align-content: center;
    overflow: hidden;

    li {
      text-align: center;
      margin-right: 20px;
      margin-bottom: 20px;
      cursor: pointer;

      .img {
        overflow: hidden;
        width: 280px;
        height: 280px;
        margin-bottom: 10px;
        img {
          width: 280px;
          height: 280px;

          transition: 1s;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
`;

export const Detail = styled.div`
  padding-top: 50px;
  .main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 100px;

    .mainimg {
      width: 600px;
      height: 600px;
      margin-right: 140px;
    }
    .text {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 30px;
        font-weight: 700;
      }
      .engname {
        font-size: 14px;
        padding-bottom: 40px;
        width: 768px;
        border-bottom: 2px solid #000;
        margin-bottom: 40px;
      }
      .desc {
        width: 560px;
        font-size: 16px;
        margin-bottom: 55px;
      }
      .btn {
        display: flex;
        button {
          width: 768px;
          height: 40px;
          background: none;
          border-radius: 5px;
          border: 1px solid #9e9e9e;
        }
      }
    }
  }

  .recommend {
    background: #f6f5ef;
    width: 1510px;
    height: 431px;
    margin: auto;
    padding: 25px;
    .title {
      display: flex;
      align-items: center;
      width: 1465px;
      border-bottom: 3px solid #000;

      img {
        /* width: 100px;
        height: 100px; */
      }
      h3 {
        font-size: 24px;
        font-weight: 700;
      }
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1465px;
      margin-top: 45px;
      li {
        margin-right: 55px;
        &:last-child {
          margin-right: 0px;
        }
        img {
          width: 240px;
          height: 250px;
        }
      }
    }
  }
  .lastbtn {
    padding: 80px 0;
    text-align: center;
    button {
      width: 372px;
      height: 40px;
      background: none;
      border-radius: 5px;
      border: 1px solid #9e9e9e;
    }
  }
`;
export const FoodChoice = styled.form`
  margin: auto;
  margin-bottom: 100px;
  position: relative;
  .left {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 173px;

    .myselect {
      background: #f4f4f2;
      width: 1130px;
      height: 150px;
      display: flex;
      align-items: center;
      line-height: 90px;

      h3 {
        padding-left: 50px;
        font-weight: 700;
        margin-right: 30px;
      }
      select {
        width: 175px;
        height: 40px;
        border: 1px solid #dddddd;
        border-radius: 5px;
      }
    }
  }

  .btnwrap {
    position: absolute;
    right: 100px;
    top: 270px;

    button {
      width: 77px;
      height: 40px;
      border-radius: 3px;
      color: #fff;
      border: none;
      font-weight: 700;
      &:first-child {
        background: #006633;
        margin-right: 10px;
      }
      &:last-child {
        background: #000;
      }
    }
  }
`;
export const FoodSortList = styled.li`
  margin-right: 20px;
`;

export const FoodListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1700px;
  margin-top: 50px;
  li {
    margin-right: 40px;
    margin-bottom: 10px;
    text-align: center;
    .lidiv {
      overflow: hidden;
      width: 270px;
      height: 270px;
      margin-bottom: 10px;

      img {
        width: 270px;
        height: 270px;
        transition: 1s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
