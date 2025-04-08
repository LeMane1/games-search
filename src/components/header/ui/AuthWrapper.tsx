'use client'

import {checkAuth, getUser} from "@/api/getUser";
import {User} from "@supabase/auth-js";
import LoginButton from "@/components/header/ui/LoginButton";
import UserLabel from "@/components/header/ui/UserLabel";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";

interface IAuthWrapperProps {
  isExpanded?: boolean;
}

export default function AuthWrapper({isExpanded = true}: IAuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    (async function(){
      try{
        setIsLoading(true);
        setIsAuthenticated(await checkAuth())
        setUser(await getUser())
      }catch(e){
        console.error("Can't check auth user", e);
      }finally{
        setIsLoading(false);
      }
    })()
  }, [])

  return (
    <>
      {
        !isLoading && (isAuthenticated && user ?
          <UserLabel user={user} isExpanded={isExpanded}/>
          :
          <LoginButton/>
        )
      }
      
      {
        isLoading && <CircularProgress color={'secondary'}/>
      }
    </>
  )
}