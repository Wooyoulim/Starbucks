import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './components/Layout';
import FoodForm from './pages/menu/food/FoodForm';
import FoodDetail from './pages/menu/food/FoodDetail';
import ProductForm from './pages/menu/product/ProductForm';
import ProductDetail from './pages/menu/product/ProductDetail';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Logout from './pages/login/Logout';
import Join from './pages/login/Join';
import JoinClear from './pages/login/JoinClear';
import DrinkMenu from './pages/drinkMenu/DrinkMenu';
import DrinkMenuDetail from './components/DrinkMenu/DrinkMenuDetail';
import Notice from './pages/notice/Notice';
import LayoutSub from './components/LayoutSub';
import MyStabucks from './pages/myStabucks/MyStabucks';
import BeforeLogin from './pages/login/BeforeLogin';
import NoticeDetail from './components/notice/NoticeDetail';
import ScrollToTop from './components/ScrollToTop';
import MyCart from './pages/mycart/MyCart';
import { useDispatch } from 'react-redux';
import { setUser } from './store/modules/myStarbucksSlice';
import { useEffect, useState } from 'react';
import Card from './pages/card/Card';
import CardDetail from './components/Card/CardDetail';
function App() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const localUserData = localStorage.getItem('user');
        if (localUserData) {
            dispatch(setUser(JSON.parse(localUserData))); // 사용자 정보 스토어에 설정
        }
        setLoading(false);
    }, [dispatch]);
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <Router>
                <ScrollToTop />
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/joinclear" element={<JoinClear />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/notice">
                            <Route index element={<Notice />} />
                            <Route path="/notice/:noticeID" element={<NoticeDetail />} />
                        </Route>
                        <Route path="/logout" element={<Logout />} />
                        <Route element={<LayoutSub />}></Route>
                        <Route path="/MyStabucks" element={<MyStabucks />} />
                        <Route path="/before" element={<BeforeLogin />} />
                        <Route path="/drinkMenu">
                            <Route index element={<DrinkMenu />} />
                            <Route path=":category/:drinkID" element={<DrinkMenuDetail />} />
                        </Route>
                        <Route>
                            <Route path="/food" element={<FoodForm />} />
                            <Route path="/food/:category/:foodID" element={<FoodDetail />} />
                        </Route>
                        <Route>
                            <Route path="/product" element={<ProductForm />} />
                            <Route
                                path="/product/:category/:productID"
                                element={<ProductDetail />}
                            />
                        </Route>
                        <Route path="/card">
                            <Route index element={<Card />} />
                            <Route path=":engName/:cardID" element={<CardDetail />} />
                        </Route>
                        <Route>
                            <Route path="/myCart" element={<MyCart />} />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </>
    );
}
export default App;
