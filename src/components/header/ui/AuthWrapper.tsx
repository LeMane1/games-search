import {checkAuth, getUser} from "@/api/getUser";
import {User} from "@supabase/auth-js";
import LoginButton from "@/components/header/ui/LoginButton";
import UserLabel from "@/components/header/ui/UserLabel";

interface IAuthWrapperProps {
  isExpanded?: boolean;
}

export default async function AuthWrapper({isExpanded = true}: IAuthWrapperProps) {
  const isAuthenticated = await checkAuth()
  const user: User | null = await getUser()

  return (
    <>
      {
        isAuthenticated && user ?
          <UserLabel user={user} isExpanded={isExpanded}/>
          :
          <LoginButton/>
        
      }
    </>
  )
}