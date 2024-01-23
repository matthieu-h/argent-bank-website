import React from "react";
import SignInForm from "../components/SignInForm";
import Header from "../components/Header";
import { signIn } from "../routes";

const SignIn = () => {
  return (
    <div>
      <Header navlinkTo={signIn} connexion="Sign in" />
      <SignInForm />
    </div>
  );
};

export default SignIn;
