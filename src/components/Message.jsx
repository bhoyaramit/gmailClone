import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";
import { motion } from "framer-motion";

const Message = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ scale: 1.02, boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.98 }}
      onClick={openMail}
      className="flex items-center justify-between border-b border-gray-300 px-5 py-4 text-sm bg-white cursor-pointer transition-all rounded-lg"
    >
      {/* Icons */}
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-semibold">{email?.to}</h1>
        </div>
      </div>

      {/* Email Content */}
      <div className="flex-1 ml-4">
        <motion.p
          className="text-gray-700 truncate inline-block max-w-full"
          whileHover={{ x: 5 }} // Small nudge effect on hover
        >
          {email?.message || "No message available"}
        </motion.p>
      </div>

      {/* Timestamp */}
      <div className="flex-none text-gray-500 text-sm">
        <p>
          {email?.createdAt?.seconds
            ? new Date(email.createdAt.seconds * 1000).toUTCString()
            : "Unknown date"}
        </p>
      </div>
    </motion.div>
  );
};

export default Message;
