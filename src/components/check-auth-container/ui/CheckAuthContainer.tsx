'use client'

import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {checkAuth} from "@/api/getUser";

interface ICheckAuthContainerProps {
  children: React.ReactNode;
  shouldBeAuthenticated?: boolean;
}

export default function CheckAuthContainer({ children, shouldBeAuthenticated = true }: ICheckAuthContainerProps) {
  const router = useRouter()
  
  useEffect(() => {
    (async function(){
      const isAuthenticated = await checkAuth()
      if (isAuthenticated && shouldBeAuthenticated) {
        router.replace('/')
      }
    })()
  }, [router, shouldBeAuthenticated])
  
  return (
    <>
      {children}
    </>
  )
}