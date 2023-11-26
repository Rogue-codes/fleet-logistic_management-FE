import {
  Car,
  Discover,
  Element3,
  KeySquare,
  LogoutCurve,
  Messenger,
  NoteText,
  Setting2,
  ShieldSecurity,
} from "iconsax-react";
import { navItems } from "../../utils";
import { useState } from "react";
import { logo } from "../../assets";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/AuthSlice";

export default function SideNav() {
  const [selected, setSelected] = useState<number>(0);

  const handleSelected = (selected: number) => {
    setSelected(selected);
  };

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div className="w-[15%] h-screen fixed left-0 top-0 bg-purple-1">
      <div className="w-full flex justify-center gap-3 items-end">
        <div className="h-20 py-1">
          <img src={logo} className="h-full" alt="" />
        </div>
      </div>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`${
            index === selected ? "bg-[rgba(222,222,222,0.25)]" : ""
          } transition-all flex cursor-pointer justify-start items-center gap-3 py-5 px-3 text-white`}
          onClick={() => handleSelected(index)}
        >
          {index === 0 ? (
            <Element3 size="20" variant={index === selected ? "Bold" : "Outline"} color="#FFf" />
          ) : index === 1 ? (
            <Discover size="20" variant={index === selected ? "Bold" : "Outline"} color="#FFf" />
          ) : index === 2 ? (
            <Messenger size="20" variant={index === selected ? "Bold" : "Outline"} color="#FFf" />
          ) : index === 3 ? (
            <Car size="20" variant={index === selected ? "Bold" : "Outline"} color="#FFf" />
          ) : index === 4 ? (
            <ShieldSecurity size="20" variant={index === selected ? "Bold" : "Outline"} color="#FFf" />
          ) : index === 5 ? (
            <KeySquare size="20" variant={index === selected ? "Bold" : "Outline"} color="#FFf" />
          ) : index === 6 ? (
            <NoteText size="20" variant={index === selected ? "Bold" : "Outline"} color="#FFf" />
          ) : (
            <Setting2 size="20" variant={index === selected ? "Bold" : "Outline"} color="#FFf" />
          )}
          <p
            className={`${
              index === selected ? "font-semibold" : "font-light"
            }`}
          >
            {item.label}
          </p>
          
        </div>
      ))}
      <div className="flex cursor-pointer justify-start items-center gap-3 py-5 px-3 text-white" onClick={handleLogout}><LogoutCurve/> <p>Logout</p></div>
      <div
        className={`${
          selected === 0
            ? "top-[11.2%]"
            : selected === 1
            ? "top-[20%]"
            : selected === 2
            ? "top-[29%]"
            : selected === 3
            ? "top-[38%]"
            : selected === 4
            ? "top-[47%]"
            : selected === 5
            ? "top-[56%]"
            : selected === 6
            ? "top-[65%]"
            : "top-[73.8%]"
        } transition-all w-1 h-16 absolute top-0 left-0 border-2 border-white`}
      ></div>
    </div>
  );
}
