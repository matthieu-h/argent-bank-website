import React from "react";

import { useNavigate } from "react-router-dom";
import { userEdit } from "../routes";

const UserName = ({ firstName, lastName }) => {
  const navigate = useNavigate();
  const editName = (e) => {
    navigate(userEdit);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName} !
      </h1>
      <button className="edit-button" onClick={editName}>
        Edit Name
      </button>
    </div>
  );
};

export default UserName;
