'use client'

import {checkAuth, getUser} from "@/api/getUser";
import {User} from "@supabase/auth-js";
import LoginButton from "@/components/header/ui/LoginButton";
import UserLabel from "@/components/header/ui/UserLabel";
import {useEffect, useState} from "react";

interface IAuthWrapperProps {
  isExpanded?: boolean;
}

export default function AuthWrapper({isExpanded = true}: IAuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    (async function(){
      setIsAuthenticated(await checkAuth())
      setUser(await getUser())
    })()
  }, [])

  if (!(isAuthenticated && user)) {
    return <LoginButton/>
  }

  return (
    <UserLabel user={user} isExpanded={isExpanded}/>
  )
}