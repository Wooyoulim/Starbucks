import { useSelector } from 'react-redux';
import Con3Reward from './Con3Reward';
import Con3RewardNon from './Con3RewardNon';
import { Maincon3Wrap } from './MainConStyles';

const Maincon3 = () => {
    const { authed } = useSelector((state) => state.authR);
    return <Maincon3Wrap>{authed === false ? <Con3RewardNon /> : <Con3Reward />}</Maincon3Wrap>;
};

export default Maincon3;
