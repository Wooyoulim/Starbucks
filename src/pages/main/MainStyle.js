import styled from 'styled-components';

export const MainWrap = styled.main`
    width: 100%;
    position: relative;

    .inner {
        width: 1520px;
        img.subimg {
            width: 1920px;
            opacity: 0.5;
            position: absolute;
            left: 50%;
            height: 1800px;
            transform: translateX(-50%);
        }
    }
`;
