import React from "react";

const Avatar = ({ userPhoto }) => {
  return (
    <div className="avatar avatar-online">
      <div className="w-16 sm:w-20  rounded-full">
        <img className="" src={userPhoto} />
      </div>
    </div>
  );
};

export default Avatar;
