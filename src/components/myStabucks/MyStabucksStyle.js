import styled from 'styled-components';

export const MyRewardLi = styled.li`
    .acd-in {
        background-image: url(./images/myStarbucks/reward_bg.jpeg);
        display: flex;
        div {
            height: 250px;
            &:first-child {
                position: relative;
                margin: auto;
                flex: 1;
                border-right: 1px solid #ddd;

                em {
                    display: block;
                    margin: auto;
                    padding: 40px;
                    strong {
                        position: absolute;
                        left: 49%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 50px;
                        font-weight: 800;
                    }
                    img {
                        width: 100%;
                    }
                }
            }
            &:last-child {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p {
                    text-align: center;
                    font-size: 24px;
                    line-height: 1.4;
                }
                span {
                    display: block;
                    width: 300px;
                    font-size: 16px;
                    text-align: center;
                    margin-top: 10px;
                }
            }
        }
    }
`;
export const MyCarddLi = styled.li`
    :root {
    }
    background-position: 0 200px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(./images/myStarbucks/card_wave_pattern.png);
    .acd-in {
        display: flex;
        box-sizing: border-box;
        .swiper {
            width: 100%;
            height: 300px;
            padding-top: 20px;
        }

        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: flex;
            justify-content: center;
            align-items: center;

            .no-card {
                em {
                    display: block;
                    margin: auto;
                    overflow: hidden;
                    width: 200px;
                    margin-bottom: 20px;
                    img {
                        width: 100%;
                        filter: grayscale(1);
                    }
                }
                p {
                    button {
                        margin-top: 20px;
                        background: #2c2a29;
                        color: #fff;
                        border: none;
                        padding: 10px 40px;
                    }
                }
            }
        }

        .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .swiper-pagination-fraction {
            width: auto;
            height: 20px;
            position: absolute;
            left: 40px;
            top: 40px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
            font-size: 14px;
            font-weight: 800;
            color: #000;
            z-index: 10;
        }
        .swiper-button-prev {
            position: absolute;
            left: 290px;
            top: 55px;
        }
        .swiper-button-next {
            position: absolute;
            left: 320px;
            top: 55px;
        }

        .cardSwiper {
            .card {
                flex: 1;
                em {
                    width: 100%;
                    img {
                        margin: auto;
                        width: 80%;
                        filter: drop-shadow(0 0 1px #ddd);
                    }
                }
            }
            .card-info {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 40px 40px 40px 0;
                strong {
                    font-size: 18px;
                    font-weight: 600;
                    i {
                        background: #444;
                        color: #fff;
                        border-radius: 100px;
                        padding: 6px;
                        font-size: 12px;
                        margin-left: 10px;
                        vertical-align: middle;
                    }
                }
                em {
                    margin: 20px 0;
                    b {
                        font-size: 30px;
                    }
                }
                button {
                    display: block;
                    background: #2c2a29;
                    color: #fff;
                    border: none;
                    padding: 10px 40px;
                }
                .save-form {
                    input {
                        line-height: 24px;
                        font-size: 16px;
                    }
                    i {
                        background: #006633;
                        color: #fff;
                        border-radius: 100px;
                        padding: 6px;
                        font-size: 16px;
                        font-weight: 800;
                        margin-left: 10px;
                        vertical-align: middle;
                    }
                }
                .save-charge {
                    display: flex;
                    input {
                        font-size: 16px;
                        width: 80px;
                        text-align: center;
                    }
                    button {
                        padding: 10px 20px;
                        background: #006633;
                    }
                }
            }
        }
        /* div {
            position: relative;
            &:first-child {
                
                p {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    span {
                        font-size: 16px;
                        i {
                            display: inline-block;
                            background: #eee;
                            border-radius: 50px;
                            margin-left: 4px;
                            padding: 4px;
                        }
                    }
                }

            }
            &:last-child {
               

                
            }
        } */
    }
`;
export const MyFrequencyLi = styled.li`
    .frequency {
        background: #eef1f5;
        padding: 60px;
        .stikers {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            span {
                width: 150px;
                height: 200px;
                position: relative;
                display: flex;
                align-items: end;
                justify-content: center;
                img {
                    width: 100%;
                }
                b {
                    position: absolute;
                    right: 10px;
                    bottom: 30px;
                    display: block;
                    font-size: 24px;
                    text-align: center;
                    background: #000;
                    padding: 0 20px;
                    color: #fff;
                    border-radius: 100px;
                    letter-spacing: 1px;
                }
                &:last-child {
                    &::after {
                        content: '17개 완성';
                        display: block;
                        position: absolute;
                        left: 20px;
                        bottom: -15px;
                        font-size: 20px;
                        font-weight: 600;
                        white-space: nowrap;
                    }
                }
            }
            i {
                font-size: 80px;
                color: #dcdcdc;
                cursor: text;
            }
        }
        .explan {
            i {
                margin-top: 20px;
                display: block;
                font-size: 60px;
                text-align: center;
                transition: 0.5s;
            }
            .event-explan {
                height: auto;
                p {
                    display: flex;
                    justify-content: space-between;
                    margin: 20px 0;
                    em {
                        font-size: 20px;
                        color: #006633;
                        font-weight: 500;
                    }
                }
                .gauge {
                    position: relative;
                    span {
                        &:first-child {
                            display: block;
                            width: 100%;
                            height: 6px;
                            background: #fff;
                        }
                        &:last-child {
                            display: block;
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: ${(props) => props.width || 0};
                            height: 6px;
                            background: #006633;
                        }
                    }
                }
                div {
                    background: #fff;
                    text-align: center;
                    padding: 40px 80px;
                    font-size: 20px;
                    line-height: 1.4;
                    word-break: keep-all;
                    b {
                        font-weight: 800;
                        color: #006633;
                    }
                }
            }
            &.off {
                overflow: hidden;
                i {
                    transform: rotate(180deg);
                }
                .event-explan {
                    height: 0;
                }
            }
        }

        &.black {
            background: #002b51;
            .stikers {
                span {
                    &:last-child {
                        &::after {
                            color: #fff;
                        }
                    }
                }
                i {
                    color: rgba(255, 255, 255, 0.3);
                }
            }
            .explan {
                i {
                    color: #fff;
                }
                .event-explan {
                    p {
                        em {
                            color: #fdeec0;
                        }
                    }
                    div {
                        color: #fff;
                        background: #001e38;
                        b {
                            color: #fdeec0;
                        }
                    }
                }
                .gauge {
                    span {
                        &:first-child {
                            background: rgba(255, 255, 255, 0.3);
                        }
                        &:last-child {
                            background: #fdeec0;
                        }
                    }
                }
            }
        }
    }
    .barcode {
        display: block;
        width: 80px;
        height: 70px;
        position: absolute;
        right: 0;
        top: 50px;
        font-size: 16px;
        font-weight: 800;
        background: #fff;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: auto;
        background-image: url(./images/myStarbucks/barcode_test.png);
        display: flex;
        justify-content: center;
        align-items: end;
        border: 1px solid #aaa;
        cursor: pointer;
    }
    .stiker-bg {
        width: 100%;
        position: relative;
        img {
            width: 100%;
        }
        .drink-stikers {
            width: 510px;
            height: 900px;
            margin: auto;
            position: absolute;
            left: 50%;
            top: 235px;
            transform: translatex(-50%);
            /* opacity: 0.8; */
            ul {
                display: flex;
                justify-content: start;
                align-items: start;
                flex-wrap: wrap;
                li {
                    width: 102px;
                    margin-bottom: 28px;
                    img {
                    }
                }
                &:first-child {
                    li {
                        &:nth-child(-n + 1) {
                            padding-left: 104px;
                        }
                        &:nth-child(-n + 3) {
                            &:nth-child(3) {
                                padding-right: 100px;
                            }
                        }
                    }
                }
                &:nth-child(2) {
                    position: absolute;
                    left: 0;
                    top: 150px;
                    li {
                        &:nth-child(-n + 11) {
                            &:nth-child(11) {
                                padding-left: 52px;
                            }
                        }
                        &:nth-child(11),
                        &:nth-child(12),
                        &:nth-child(13),
                        &:nth-child(14) {
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }
`;
export const BarcodeWrap = styled.div`
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    border-radius: 4px;
    outline: 1px solid black;
    padding-bottom: 40px;
    background: #fff;
    z-index: 10;
    p {
        &:first-child {
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 40px;
            background: #8c8279;
            color: #fff;
            i {
                line-height: 40px;
            }
        }
        &:nth-of-type(2) {
            color: #666;
            font-size: 14px;
            padding-bottom: 40px;
            border-bottom: 1px solid #ddd;
            span {
                color: #39a871;
                font-weight: 800;
            }
        }
    }
    strong {
        display: block;
        font-size: 16px;
        margin: 5px 0;
    }
    img {
        margin-top: 40px;
        width: 260px;
        height: 75px;
    }

    ul {
        text-align: left;
        padding: 0 20px;
        width: 100%;
        box-sizing: border-box;
        li {
            position: relative;
            font-size: 14px;
            line-height: 1.2;
            font-weight: 300;
            &:first-child {
                font-size: 20px;
                font-weight: 600;
                margin: 20px 0;
            }
            &:not(:first-child) {
                text-indent: 10px;
                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 6px;
                    width: 4px;
                    height: 4px;
                    border-radius: 10px;
                    background: #aaa;
                }
            }
            &:nth-of-type(2) {
                margin-bottom: 10px;
            }
        }
    }
`;
export const OverlayWrap = styled.tr`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9;
`;
export const MyMenuLi = styled.li`
    .acd-in {
        .tabs {
            display: flex;
            gap: 10px;
            justify-content: space-between;
            margin: 40px 0;
            li {
                border: 1px solid #aaa;
                border-radius: 4px;
                font-size: 20px;
                text-align: center;
                line-height: 40px;
                cursor: pointer;
                &.on {
                    background: #006633;
                    color: #fff;
                    border: none;
                }
            }
        }
        p {
            text-align: left;
            button {
                border: none;
                margin: 40px 0;
                padding: 8px 30px;
                background: #aaa;
                color: #fff;
                font-size: 14px;

                &:nth-of-type(2) {
                    margin-left: 10px;
                    background: #2c2a29;
                }
            }
        }
    }
`;
export const MyMenuListTable = styled.table`
    vertical-align: middle;
    text-align: center;
    width: 100%;
    font-size: 16px;
    .w1 {
        width: 5%;
    }
    .w2 {
        width: 10%;
    }
    .w3 {
        width: 30%;
    }
    .w4 {
        width: 40%;
    }
    .w5 {
    }
    tr {
    }
    thead {
        tr {
            font-weight: 600;
            border-top: 2px solid #000;
            border-bottom: 3px solid #000;
            line-height: 50px;
        }
    }
    tbody {
        tr {
            border-bottom: 1px solid #000;
        }
    }
`;
export const MyMenuListTbody = styled.tbody`
    tr {
        td {
            padding: 20px 0;
            &:first-child {
                p {
                    text-align: center;
                }
            }
            &:nth-of-type(3) {
                cursor: pointer;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding: 0 10px;
            }
            &:nth-of-type(4) {
                display: block;
                overflow: hidden;
                width: 320px;
                text-overflow: ellipsis;
                white-space: nowrap;
                span {
                    &:not(:first-child) {
                        margin-left: 5px;
                    }
                    &:not(:last-child)::after {
                        content: ' |';
                        color: #ddd;
                    }
                }
            }
        }
    }
`;

export const MyMenuDetailTd = styled.td`
    width: 680px;
    height: 500px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    background-image: url(./images/myStarbucks/menu_bg.jpeg);
    &.detail-popup {
        padding: 60px;
    }
    i {
        position: absolute;
        right: 0;
        top: 0;
        text-align: right;
        color: #fff;
        font-size: 30px;
        margin: 20px 20px 0 0;
        transition: transform 1.3s ease;

        &:hover {
            transform: rotate(180deg);
        }
    }
    strong {
        display: block;
        font-size: 20px;
        font-weight: 600;
        color: #006633;
        line-height: 1;
    }
    > span {
        font-size: 24px;
        font-weight: 600;
    }
    .options {
        display: flex;
        gap: 40px;
        margin-top: 40px;
        justify-content: start;
        align-items: start;
        > em {
            width: 270px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: 8px solid #fff;
            img {
                width: 100%;
            }
        }
        ul {
            width: 290px;
            display: flex;
            flex-direction: column;
            border-top: 1px solid #000;
            li {
                display: flex;
                font-size: 14px;
                gap: 40px;
                padding: 20px 0;
                &:nth-of-type(1) {
                    border-bottom: 1px solid #aaa;
                }
                &:nth-of-type(2) {
                    span {
                    }
                }
                &:last-child {
                    border-top: 1px solid #000;
                    display: block;
                    text-align: right;
                    padding-top: 10px;
                    button {
                        display: inline-block;
                        background: #666;
                        border: none;
                        color: #fff;
                        padding: 8px 15px;
                        font-size: 12px;
                    }
                }
                b {
                    display: block;
                    flex: 1;
                    border: 1px solid #000;
                    width: 70px;
                    border: none;
                    font-weight: 600;
                }
                span {
                    flex: 2;
                    width: 200px;
                    font-size: 14px;
                    text-align: left;
                    overflow: hidden;
                    line-height: 1.6;

                    em {
                        display: block;
                        line-height: 1.6;
                        &::after {
                            /* content: ', '; */
                        }
                    }
                }
            }
        }
    }
`;
