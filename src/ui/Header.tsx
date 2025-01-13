import profile from "../assets/svg/profile.svg";
import logout from "../assets/svg/logout.svg";
import { useAppSelecter } from "../redux/Hooks/store";
import { useDispatch } from "react-redux";
import { removeUserInfo } from "../redux/feature/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const userData = useAppSelecter((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUserInfo());
    navigate('/login');
  }

  return (
    <div className="bg-white py-[1.5rem] px-[4.8rem] border-b border-gray-100 flex items-center justify-end gap-6">
      <div className="flex gap-6">
        <h1 className="capitalize">{userData?.full_name}</h1>
        <img
          className="w-[2.2rem] h-[2.2rem] cursor-pointer"
          src={profile}
          alt=""
        />
        <img
          className="w-[2.2rem] h-[2.2rem] cursor-pointer"
          src={logout}
          alt=""
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Header;
