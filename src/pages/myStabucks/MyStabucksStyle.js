import styled from 'styled-components';

export const MyStabucksWrap = styled.main`
    width: 100%;
    .inner {
        width: 800px;
        padding: 40px 0 300px 0;
        margin: auto;
        > ul {
            border-bottom: 0.5px solid #ddd;
        }
        button,
        i {
            cursor: pointer;
        }
        button {
            border-radius: 4px;
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
        h2 {
            color: #ddd;
        }
    }
    ul {
        width: 100%;

        li {
            width: 100%;
            .acd-name {
                font-size: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: 600;
                padding: 20px 0;
                border-top: 2px solid #000;
                i {
                    font-weight: 800;
                    vertical-align: middle;
                    transition: 0.5s;
                }
            }
            .acd-in {
                height: 0px;
                overflow: hidden;
            }
            &.on {
                .acd-name {
                    > i {
                        transform: rotate(180deg);
                    }
                }
                .acd-in {
                    border-top: 0.5px solid #ddd;
                    height: auto;
                }
            }
        }
    }
`;
