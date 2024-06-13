import styled from 'styled-components';

export const NoticeDetailWrap = styled.div`
    width: 1520px;
    padding: 100px 0;
    margin: 50px auto;
    position: relative;
    height: auto;

    h2 {
        font-size: 40px;
        font-weight: bold;
    }
    .detail {
        width: 100%;
        display: block;
        margin-top: 50px;
        h3 {
            font-weight: bold;
            margin: 50px 0;
            font-size: 20px;
            line-height: 60px;
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
        }
        p {
            white-space: pre-wrap;
        }
    }
    button {
        width: 150px;
        height: 60px;
        border: 1px solid #999;
        font-size: 16px;
        position: absolute;
        left: 0;
        bottom: 0px;
    }
`;
