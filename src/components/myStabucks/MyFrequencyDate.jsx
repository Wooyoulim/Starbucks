import { useEffect, useState } from 'react';

const MyFrequencyDate = () => {
    const [progress, setProgress] = useState(0);
    const [dDay, setDDay] = useState('');

    useEffect(() => {
        const startDate = new Date('2024-05-16');
        const endDate = new Date('2024-07-04');
        const today = new Date();

        const totalDuration = endDate - startDate;
        const elapsed = today - startDate;

        if (today >= startDate && today <= endDate) {
            const progressPercentage = (elapsed / totalDuration) * 100;
            setProgress(progressPercentage.toFixed(2)); // 소수점 두 자리까지
        } else {
            setProgress(0);
        }

        const diffTime = endDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 0) {
            setDDay(diffDays);
        } else if (diffDays === 0) {
            setDDay('D-Day');
        } else {
            setDDay(`D+${Math.abs(diffDays)}`);
        }
    }, []);

    return (
        <>
            <p>
                <em>이벤트 기간 : {'2024. 05. 16 ~ 2024. 07. 04'}</em>
                <em>D-{dDay}</em>
            </p>
            <p className="gauge">
                <span></span>
                <span style={{ width: progress + `%` }}></span>
            </p>
        </>
    );
};

export default MyFrequencyDate;
