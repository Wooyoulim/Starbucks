import styled from 'styled-components';

export const Visual = styled.section`
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    background-image: url(./images/main/VisualBg.jpg);
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .imgArea {
        display: flex;
        img {
            transform: scale(0.9);
            margin-right: -30px;
        }
    }
    .imgText {
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
            width: 130px;
            height: 40px;
            border: 1px solid #000;
            border-radius: 10px;
            background: none;
            margin: 30px 0;
            &:hover {
                color: #fff;
                background: #1b3c35;
            }
        }
    }
`;

export const Maincon1Wrap = styled.div`
    width: 100%;
    background: #007042;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        margin: 0 auto;
        text-align: center;
        display: flex;
        line-height: 100px;
        height: 100px;
        width: 1520px;
        color: #fff;
        font-size: 20px;
        font-weight: bold;

        span {
            font-weight: lighter;
        }
        i {
            font-size: 40px;
            line-height: 100px;
            margin-left: 600px;
        }
    }
`;

export const Maincon2Wrap = styled.div`
    width: 1520px;
    padding: 50px;
    margin: 0 auto;

    .con2Wrap {
        h3 {
            text-align: center;
            margin: 20px 0;
            font-size: 40px;
            font-weight: bold;
        }

        .swiper {
            width: 1520px;
        }
        .swiper-slide {
            height: 300px;
            line-height: 300px;
            text-align: center;
            img {
                width: 500px;
            }
        }
    }
`;
export const Maincon3Wrap = styled.div`
    width: 100%;
    height: 350px;
    background-color: #2c2a29;
    .Member {
        width: 1520px;
        margin: 0px auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: #fff;
        .reward-icon.star {
            width: 130px;
            height: 130px;
            position: relative;
            .level {
                top: 70%;
                left: 75%;
                transform: translate(-50%, -50%);
                position: absolute;
                font-size: 40px;
            }
        }
        .reward-text {
            /* margin-top: 30px; */
            h4 {
                margin-top: 3ch;
                font-size: 40px;
                font-weight: lighter;
            }
            // 볼드체 공용
            .txt-bold {
                font-weight: 600;
                &.gold {
                    color: #bd9b60;
                }
                &.green {
                    color: #006633;
                }
                &.gray {
                    color: gray;
                }
            }
            /* span {
                font-weight: bold;
                &.color {
                    color: #007042;
                }
            } */
            p {
                margin-top: 10px;
                font-size: 20px;
            }
            .btn {
                float: right;
                button {
                    cursor: pointer;
                    font-size: 16 px;
                    width: 140px;
                    line-height: 50px;
                    border: 1px solid #fff;
                    border-radius: 10px;
                    background: none;
                    color: #fff;
                    margin-top: 50px;
                    margin-left: 20px;
                    &.on {
                        background: #1b3c35;
                        border: 1px solid #1b3c35;
                    }
                }
            }
        }
    }
`;

export const Maincon4Wrap = styled.div`
    width: 100%;
    .inner {
        width: 1520px;
        height: 600px;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        .bgPic {
            img {
                &:first-child {
                    width: 400px;
                }
                &:last-child {
                    width: 400px;
                    position: absolute;
                    top: 30%;
                    transform: translateY(-50%);
                    left: -100px;
                }
            }
        }
        .explain {
            h4 {
                font-size: 40px;
                font-weight: bold;
            }
            p {
                margin: 20px 0;
            }
            .more {
                button {
                    width: 200px;
                    height: 50px;
                    background: #2c2a29;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
`;

export const Maincon5Wrap = styled.div`
    width: 100%;
    .inner {
        width: 1520px;
        height: 600px;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: relative;

        .explain {
            h4 {
                font-size: 40px;
                font-weight: bold;
            }
            p {
                margin: 20px 0;
                span {
                    color: red;
                }
            }
            .more {
                button {
                    width: 200px;
                    height: 50px;
                    background: #2c2a29;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
        .bgPic {
            img {
                width: 700px;
            }
        }
    }
`;

export const Maincon6Wrap = styled.div`
    width: 100%;

    .inner {
        width: 1520px;
        height: 600px;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: relative;

        .explain {
            h4 {
                font-size: 40px;
                font-weight: bold;
            }
            p {
                margin: 20px 0;
                span {
                    color: red;
                }
            }
            .more {
                button {
                    width: 200px;
                    height: 50px;
                    background: #2c2a29;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
        .bgPic {
            img {
                width: 700px;
            }
        }
    }
`;
