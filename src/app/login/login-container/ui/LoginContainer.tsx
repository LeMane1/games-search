'use client';

import LoginForm from "@/app/login/login-container/ui/LoginForm";
import RegisterForm from "@/app/login/login-container/ui/RegisterForm";
import LoginWrapper from "@/app/login/login-wrapper";
import {useAppSelector} from "@/lib/hooks";
import {RootState} from "@/lib/store";

export default function LoginContainer() {
  const isLoginStateSelected: boolean= useAppSelector((state: RootState) => state.mainReducer.isLoginStateSelected)
  
  return (
    <>
      {isLoginStateSelected ?
        <LoginWrapper
          title="Welcome back"
          subtitle='Sign in to continue to your account'
          actionExtraText='New to our platform?'
          actionText='Create an account'
        >
          <LoginForm/>
        </LoginWrapper>
        :
        <LoginWrapper
          title="Welcome!"
          subtitle='Sign up to continue to your account'
          actionExtraText='Already have an account?'
          actionText='Sign in'
        >
          <RegisterForm/>
        </LoginWrapper>
      }
    </>
  );
}