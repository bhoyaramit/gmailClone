import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import {
  MdOutlineDrafts,
  MdOutlineKeyboard,
  MdOutlineKeyboardArrowDown,
  MdOutlineWatchLater,
} from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const Sidebar = () => {
  const SideBarArr = [
    {
      icon: <LuPencil size={"24px"} />,
      text: "Inbox",
    },
    {
      icon: <IoMdStar size={"24px"} />,
      text: "Starred",
    },
    {
      icon: <MdOutlineWatchLater size={"24px"} />,
      text: "Snoozed",
    },
    {
      icon: <TbSend2 size={"24px"} />,
      text: "Sent",
    },
    {
      icon: <MdOutlineDrafts size={"24px"} />,
      text: "Draft",
    },
    {
      icon: <MdOutlineKeyboardArrowDown size={"24px"} />,
      text: "More",
    },
  ];

  // const [open, setOpen] = useState(false); // local state variable //
const dispatch = useDispatch();
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button
          onClick={() => dispatch( setOpen(true))}
          className="flex items-center gap-2 p-4 rounded-2xl hover:shadow bg-[#C2E7FF]"
        >
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {SideBarArr.map((elem, ind) => {
          return (
            <div
              key={ind}
              className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2"
            >
              {elem.icon}
              <p>{elem.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
