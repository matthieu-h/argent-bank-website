import React from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { unSetToken } from "../slice";
import Account from "../components/Account";
import UserNameEdit from "../components/UserNameEdit";
import { home } from "../routes";
import { useSelector } from "react-redux";

const UserEdit = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName.userName);
  const logout = (e) => {
    dispatch(unSetToken());
  };

  return (
    <div>
      <Header
        navlinkTo={home}
        connexion="Sign out"
        onclick={logout}
        userName={userName}
        logoUser="fa fa-user-circle"
        logoSign="fa fa-sign-out"
      />
      <div className="main bg-dark">
        <div className="edit-user">
          <UserNameEdit />
        </div>

        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="2,082.79"
          amountDescription="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="10,928.42"
          amountDescription="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="184.30"
          amountDescription="Current Balance"
        />
      </div>
    </div>
  );
};

export default UserEdit;
