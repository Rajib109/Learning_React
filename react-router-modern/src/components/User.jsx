import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-slate-500 text-white p-4 rounded-lg shadow-md flex justify-center items-center h-20">
      User : {userid}
    </div>
  );
};

export default User;
