import styled from 'styled-components';
import { FaCircleCheck } from 'react-icons/fa6';
export const LoginBefore = styled.div`
 margin: 200px auto;
    width: 1520px;
    display: flex;
    justify-content: center;
    img {
        width: 250px;
    }

    .please {
        margin-left: 40px;
        h3 {
            font-size: 40px;
            font-weight: bold;
            span {
                color: #006633;
            }
        }
        p {
            margin: 20px 0;
        }
        button {
            width: 90px;
            height: 40px;
            border-radius: 5px;
            font-size: 14px;
            font-weight: bold;
            color: #fff;
            border: none;
            margin-right: 10px;
            &:first-child {
                background-color: #666;
            }
            &:last-child {
                background-color: #222;
            }
        }
    }
`;

export const LoginWrap = styled.div`
    padding: 100px 0;
    width: 100%;
    position: relative;
    img {
        position: absolute;
        z-index: -1;
        bottom: -100px;
        right: 200px;
        width: 700px;
    }

    h3 {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        margin: 20px 0;
    }
    .loginForm {
        background: #fff;
        margin: 0 auto;
        width: 570px;
        border: 1px solid #999;
        display: flex;
        flex-direction: column;
        align-items: center;

        input[type='text'] {
            margin-top: 20px;
            width: 500px;
            line-height: 40px;
        }
        input[type='password'] {
            margin-top: 20px;
            width: 500px;
            line-height: 40px;
        }
        .idKeep {
            margin-top: 30px;
            margin-left: -380px;
            input[type='checkbox'] {
                position: absolute;
                left: -99999px;
                overflow: hidden;
                &:checked + label::before {
                    content: '';
                    display: inline-block;
                    background: #0fa958;
                    color: #fff;
                    text-align: center;
                    line-height: 20px;
                }
            }
            label {
                font-size: 16px;
                vertical-align: super;
                &::before {
                    content: '';
                    display: inline-block;
                    cursor: pointer;
                    width: 25px;
                    height: 25px;
                    color: #fff;
                    border-radius: 50%;
                    background-color: #999;
                    vertical-align: middle;
                    margin-right: 10px;
                }
            }
        }

        .greeting {
            width: 100%;
            line-height: 70px;
            text-align: center;

            border-bottom: 1px solid #999;
            span {
                font-weight: bold;
                color: #006633;
            }
        }
        button {
            width: 500px;
            line-height: 60px;
            color: #fff;
            background-color: #006633;
            font-size: 20px;
            margin: 30px 0;
            border: none;
        }
    }
    .attention {
        width: 570px;
        margin: 20px auto;
        font-size: 14px;
        color: #006633;
        word-break: keep-all;
    }
`;

export const LogoutWrap = styled.div`
    padding: 100px 0;
    width: 100%;

    h3 {
        margin-bottom: 30px;
        font-size: 40px;
        font-weight: bold;
        text-align: center;
    }
    img {
        display: block;
        margin: 100px auto;
    }
    button {
        width: 500px;
        height: 60px;
        background: #fff;
        font-size: 20px;
        display: block;
        margin: 50px auto 0 auto;
    }
`;

export const JoinWrap = styled.div`
    /* 스크롤바 가로 사이즈 */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* 스크롤바 막대기 */
    ::-webkit-scrollbar-thumb {
        width: 5px;
        border-radius: 20px;
        background-color: #555;
    }

    /* 스크롤바 백그라운드 */
    ::-webkit-scrollbar-track {
        margin: 15px;

        width: 2px;
        background: -webkit-linear-gradient(
            180deg,
            #ddd,
            #ddd,
            #ddd,
            #ddd,
            #999,
            #999,
            #999,
            #ddd,
            #ddd,
            #ddd,
            #ddd
        );
    }

    width: 1000px;
    padding: 100px 0;
    margin: 0 auto;
    h3 {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
    img {
        display: block;
        margin: 0 auto;
    }
    .formTitle {
        text-align: center;
        margin: 50px auto;
    }
    form {
        display: block;
        width: 100%;
        border: 1px solid #999;

        &.agreement {
            div {
                width: 600px;
                margin: 15px auto;
                display: flex;
                flex-direction: column;

                &.rule {
                    border: 1px solid #999;
                    background-color: #ddd;
                    width: 500px;
                    height: 200px;
                    overflow-x: hidden;
                    padding: 20px;
                }
            }
        }
        label.chk {
            text-indent: 35px;
            width: 500px;
            font-size: 20px;
            font-weight: bold;
            margin-top: 20px;
            vertical-align: super;
            &.sub {
                font-size: 16px;
            }
            &::before {
                content: '\e929';
                font-family: xeicon !important;
                display: inline-block;
                cursor: pointer;
                width: 25px;
                height: 25px;
                color: #fff;
                border-radius: 50%;
                background-color: #999;
                vertical-align: middle;
                margin-right: 10px;
            }
            span {
                font-size: 20px;
                font-weight: bold;
                color: #006633;
            }
        }
        input[type='checkbox'] {
            position: absolute;
            left: -99999px;
            overflow: hidden;
            &:checked + label.chk::before {
                content: '\e929';
                font-family: xeicon !important;
                width: 25px;
                height: 25px;
                display: inline-block;
                background: #0fa958;
                color: #fff;
                text-align: center;
                line-height: 20px;
            }
        }

        h4 {
            font-size: 20px;
            font-weight: bold;
        }
        p {
            font-size: 16px;
        }
        strong {
            margin: 10px 0;
            display: block;
            font-size: 20px;
            font-weight: bold;
        }
        em {
            font-weight: bold;
            display: block;
            font-size: 16px;
        }
        span {
            font-size: 14px;
            font-weight: lighter;
        }
    }
    .memberInfo {
        div {
            width: 600px;
            margin: 20px auto;
        }

        input[type='text'],
        input[type='password'] {
            display: block;
            width: 600px;
            height: 60px;
            margin: 20px auto;
            text-indent: 20px;
        }
        input[type='radio'] {
            display: none;
            & + label {
                display: inline-block;
                cursor: pointer;
                width: 60px;
                height: 60px;
                border: 1px solid #999;
                line-height: 60px;
                text-align: center;
                background-color: #fff;
                color: #333;
                margin-left: 15px;
            }
            &:checked + label {
                background-color: #999;
                color: #fff;
            }
        }
        h5 {
            margin-top: 30px;
            font-size: 20px;
            font-weight: bold;
            span {
                font-size: 20px;
                font-weight: bold;
                color: #006633;
            }
        }
        label {
            font-size: 16px;
        }
        button.join {
            display: block;
            width: 600px;
            line-height: 60px;
            color: #fff;
            background-color: #006633;
            font-size: 20px;
            margin: 50px auto;
            border: none;
        }
        .name {
            .gender {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60px;
                input.word[type='text'] {
                    width: 450px;
                    height: 60px;
                }
                p {
                    margin-left: 10px;
                    width: 140px;
                    display: flex;
                    justify-content: space-between;

                    button {
                        width: 60px;
                        height: 60px;
                        border: 1px solid #999;
                        background-color: #fff;
                        vertical-align: middle;
                        color: #999;
                        &.on {
                            background-color: #999;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
    .birth {
        #birth-date {
            display: flex;
            justify-content: space-between;
            select {
                width: 130px;
                height: 60px;
                margin-bottom: 20px;
            }
        }
    }
`;

export const JoinUs = styled.div`
    padding: 100px 0;
    width: 100%;

    h3 {
        font-size: 40px;
        font-weight: bold;
        text-align: center;
    }
    img {
        display: block;
        margin: 100px auto;
    }
    button {
        width: 500px;
        height: 60px;
        background: #fff;
        font-size: 20px;
        display: block;
        margin: 0 auto;
    }
`;
