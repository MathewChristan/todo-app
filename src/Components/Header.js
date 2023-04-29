import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { userDetails } = useSelector((state) => state.user);

  return (
    <div className="header-main bg-slate-600 shadow flex justify-between items-center px-28">
      <h1 className="text-slate-50 font-extrabold text-3xl mb-0">Todo App</h1>
      <div className="flex items-center">
        {userDetails?.picture && (
          <img
            alt="user profile"
            className="w-14 h-14 rounded-full object-cover"
            src={userDetails?.picture?.data?.url}
          />
        )}

        <div>
          <p className="capitalize text-slate-50 pl-4 mb-0">
            {userDetails.name}
          </p>
          <p className="text-slate-50 pl-4 text-sm lowercase">
            {userDetails.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
