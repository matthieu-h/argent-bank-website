import React from "react";

const Account = ({ title, amount, amountDescription }) => {
  return (
    <div>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">${amount}</p>
          <p className="account-amount-description">{amountDescription}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  );
};

export default Account;
