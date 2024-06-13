import { useEffect, useState } from 'react';
import { BarcodeWrap } from './MyStabucksStyle.js';
import { onToggle } from '../../store/modules/myStarbucksSlice.js';
import { useDispatch } from 'react-redux';

const Barcode = () => {
    const dispatch = useDispatch();
    const [seconds, setSeconds] = useState(600); //10분
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((seconds) => seconds - 1);
        }, 1000);

        if (seconds <= 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [seconds]);
    return (
        <BarcodeWrap>
            <p>
                e-프리퀀시 바코드
                <i className="xi-close" onClick={() => dispatch(onToggle({ key: 'isBarcode' }))}></i>
            </p>
            <img src="./images/myStarbucks/barcode.png" alt="프리퀀시 바코드" />
            <strong>0000-0000-0000-0000</strong>
            <p>
                바코드 유효시간{' '}
                <span>
                    {Math.floor(seconds / 60)} : {seconds % 60}
                </span>
            </p>
            <ul>
                <li>바코드 캡처 화면 사용 시 유의사항</li>
                <li>e-프리퀀시 바코드 번호를 화면 저장하여 이용 시, 타인에게 유출되어 피해가 발생할 수 있으므로 사용에 유의하여 주십시오.</li>
                <li>e-프리퀀시 바코드 저장 화면의 유출로 인한 피해는 회원 본인에게 귀속됨을 양지하여 주십시오.</li>
            </ul>
        </BarcodeWrap>
    );
};

export default Barcode;
