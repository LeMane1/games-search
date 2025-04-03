import {Box} from "@mui/material";
import UserLabel from "@/components/header/ui/UserLabel";
import {MediaQueryContainer} from "@/components/media-query-container";
import {checkAuth, getUser} from "@/api/getUser";
import {User} from "@supabase/auth-js";
import LoginButton from "@/components/header/ui/LoginButton";
import MenuButton from "@/components/header/ui/MenuButton";

export default async function ShortNavigation() {
  const isAuthenticated = await checkAuth()
  const user: User | null = await getUser()
  
  return (
    <MediaQueryContainer breakPointValue={'md'} isLowerThanBreakpoint={false}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 1
      }}>
        {isAuthenticated && user ?
          <UserLabel user={user} isExpanded={false}/>
          :
          <LoginButton/>
        }
        
        <MenuButton/>
      </Box>
    </MediaQueryContainer>
  )
}