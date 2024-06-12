import { FooterWrap, FootInfo } from './FooterStyle';

const Footer = () => {
    return (
        <FooterWrap>
            <FootInfo>
                <li className="on">개인정보처리방침</li>
                <li>홈페이지 이용약관</li>
                <li className="on">위치정보 이용약관</li>
                <li>스타벅스 카드 이용약관</li>
                <li>신세계 유니버스 클럽 이용약관</li>
                <li>비회원 이용약관</li>
            </FootInfo>
            <ul className="company">
                <li>사업자등록번호 : 201-81-21515</li>
                <li>주식회사 에스씨케이컴퍼니 대표이사 : 손정현</li>
                <li>TEL : 1522-3232</li>
                <li>개인정보 보호책임자 : 이찬우</li>
            </ul>

            <p>ⓒ 2024 Starbucks Coffee Company. All Rights Reserved.</p>
        </FooterWrap>
    );
};

export default Footer;
