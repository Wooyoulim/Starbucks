import styled from 'styled-components';

export const NoticeWrap = styled.div`
    width: 1520px;

    margin: 100px auto;
    h2 {
        font-size: 40px;
        font-weight: bold;
    }
    table {
        margin: 50px 0;
        width: 1520px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        .num {
            width: 100px;
        }
        .title {
            width: auto;
        }
        .date {
            width: 200px;
        }
        th {
            line-height: 60px;
            border-top: 2px solid #000;
            border-bottom: 2px solid #000;
        }
        td {
            line-height: 80px;
            font-size: 16px;
            font-weight: lighter;
            cursor: pointer;
            &:nth-child(2) {
                text-align: left;
                text-indent: 100px;
            }
        }
    }
`;

export const NoticeItem = styled.div``;
