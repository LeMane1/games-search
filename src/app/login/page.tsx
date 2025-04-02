import LoginContainer from "@/app/login/login-container";
import {checkAuth} from "@/api/getUser";
import {redirect} from "next/navigation";

export default async function LoginPage() {
  const isAuthenticated = await checkAuth()
  if (isAuthenticated){
    redirect('/')
  }
  
  return (
    <main style={{width: '100%'}}>
      <LoginContainer/>
    </main>
  )
}