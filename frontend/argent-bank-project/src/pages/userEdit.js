import React from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { unSetToken } from "../slice";
import Account from "../components/Account";
import UserNameEdit from "../components/UserNameEdit";
import { home } from "../routes";

const UserEdit = () => {
  const dispatch = useDispatch();
  const logout = (e) => {
    dispatch(unSetToken());
  };
  console.log();
  return (
    <div>
      <Header navlinkTo={home} connexion="Sign out" onclick={logout} />
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
