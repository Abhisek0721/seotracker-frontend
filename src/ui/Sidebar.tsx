import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo-seotracker.png";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";


const Sidebar = () => {
  const { pathname } = useLocation();

  const active =
    " flex bg-gray-50 text-gray-800 items-center py-[1.2rem] px-[2.4rem] rounded-sm transition-all duration-200";
  const deactive =
    " flex items-center py-[1.2rem] px-[2.4rem] rounded-sm transition-all duration-200";

  const routes = [
    {
      id: 2,
      pathName: "Dashboard",
      path: "/", // mentor can create session and view his own upcoming sessions
      icon: <ClassOutlinedIcon fontSize="large" />,
    },
  ];


  return (
    <div className="bg-white border-r border-gray-100 row-span-full flex my-10 items-center flex-col gap-4 p-6">
      <div className="flex flex-col gap-2 justify-center items-center">
        <NavLink to="/">
          <img src={Logo} alt="" className="w-[120px] h-full" />
        </NavLink>
      </div>
      <div className="w-full">
        <ul className="flex flex-col my-10 gap-y-4">
          {routes?.map((path) => (
            <NavLink
              key={path.id}
              to={path.path}
              className={`${pathname === path.path ? active : deactive}`}
            >
              <li
                className={`flex gap-4 items-center justify-center text-[1.4rem] font-medium`}
              >
                <span
                  className={`text-4xl ${
                    pathname === path.path ? "text-[#4f46e5]" : "text-gray-400"
                  }`}
                >
                  {path.icon}
                </span>
                <span>{path.pathName}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
