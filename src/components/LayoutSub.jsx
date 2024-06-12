import { Outlet } from "react-router-dom";
import SubVisual from "./SubVisual";

const LayoutSub = () => {
  return (
    <div className="wrap">
      <Header />
      <SubVisual />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutSub;
