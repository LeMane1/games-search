import {Box, Button} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import UserLabel from "@/components/header/ui/UserLabel";
import {checkAuth} from "@/api/getUser";

export default async function Header(){
  
  const isAuthenticated = await checkAuth()
  
  return (
    <header>
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link href="/">
          <Image src={'/icons/icon_logo.svg'} alt='Logo' width={140} height={50} />
        </Link>
        
        {isAuthenticated ?
          <UserLabel/>
          :
          <Button variant={'contained'} component='a' href={'/login'}>Login</Button>
        }
      </Box>
    </header>
  )
}