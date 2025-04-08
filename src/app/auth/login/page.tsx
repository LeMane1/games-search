import CheckAuthContainer from "@/components/check-auth-container";
import LoginForm from "@/app/auth/login/LoginForm";
import AuthWrapper from "@/app/auth/auth-wrapper/AuthWrapper";

export default function LoginPage() {
  return (
    <CheckAuthContainer>
      <AuthWrapper
        title="Welcome back"
        subtitle='Sign in to continue to your account'
        actionExtraText='New to our platform?'
        actionText='Create an account'
        link={'/auth/register'}
      >
        <LoginForm/>
      </AuthWrapper>
    </CheckAuthContainer>
  )
}