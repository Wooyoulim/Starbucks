import styled from 'styled-components';

export const FooterWrap = styled.footer`
    width: 100%;
    height: 260px;
    background-color: #2c2a29;
    color: rgba(100, 100, 100, 0.9);
    font-size: 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: lighter;
    .company {
        width: 1520px;
        display: flex;
        justify-content: center;

        li {
            /* width: 100%; */
            margin-right: 30px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
    p {
        margin: 20px 0;
    }
`;
export const FootInfo = styled.ul`
    width: 1520px;
    display: flex;
    justify-content: center;
    margin: 50px 0;
    li {
        /* width: 100%; */
        margin-right: 40px;
        &:last-child {
            margin-right: 0;
        }
        &.on {
            font-weight: bold;
            color: #00b050;
        }
    }
`;
