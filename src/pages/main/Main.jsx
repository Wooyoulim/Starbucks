import MainVisual from '../../components/Main/MainVisual';
import Maincon1 from '../../components/Main/Maincon1';
import Maincon2 from '../../components/Main/Maincon2';
import Maincon3 from '../../components/Main/Maincon3';
import Maincon4 from '../../components/Main/Maincon4';
import Maincon5 from '../../components/Main/Maincon5';
import Maincon6 from '../../components/Main/Maincon6';
import { MainWrap } from './MainStyle';

const Main = () => {
    return (
        <MainWrap>
            <MainVisual />
            <Maincon1 />
            <Maincon2 />
            <Maincon3 />
            <div className="inner">
                <img className="subimg" src="./images/main/bg.png" alt="" />
            </div>

            <Maincon4 />
            <Maincon5 />
            <Maincon6 />
        </MainWrap>
    );
};

export default Main;
