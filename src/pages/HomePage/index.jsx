import { useEffect } from "react";
import SideBar from "../../components/SideBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import mainRoutes from "../../shared/navigation";

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    !isLoggedIn && navigate(mainRoutes.mainRoutes.login);
  }, [isLoggedIn, navigate]);

  return <SideBar />;
};

export default HomePage;
