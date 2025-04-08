import CheckAuthContainer from "@/components/check-auth-container";
import RegisterForm from "@/app/auth/register/RegisterForm";
import AuthWrapper from "@/app/auth/auth-wrapper/AuthWrapper";

export default function RegisterPage() {
  return (
    <CheckAuthContainer>
      <AuthWrapper
        title="Welcome!"
        subtitle='Sign up to continue to your account'
        actionExtraText='Already have an account?'
        actionText='Sign in'
        link={'/auth/login'}
      >
        <RegisterForm/>
      </AuthWrapper>
    </CheckAuthContainer>
  )
}