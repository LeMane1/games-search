import {Box} from "@mui/material";
import NavLink from "@/components/header/ui/NavLink";
import UserLabel from "@/components/header/ui/UserLabel";
import {MediaQueryContainer} from "@/components/media-query-container";
import {checkAuth, getUser} from "@/api/getUser";
import {User} from "@supabase/auth-js";
import LoginButton from "@/components/header/ui/LoginButton";
import {navLinks} from "@/components/header/lib/constants";

export default async function WideNavigation() {
  const isAuthenticated = await checkAuth()
  const user: User | null = await getUser()
  
  return (
    <MediaQueryContainer breakPointValue={'md'}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 2
      }}>
        <Box
          component='ul'
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            listStyleType: 'none',
            gap: 2
          }}
        >
          {
            navLinks.map(navLink => (
              <NavLink
                key={navLink.linkUrl}
                url={navLink.linkUrl}
                name={navLink.linkName}
              />
              ))
          }
        </Box>
        
        {isAuthenticated && user ?
          <UserLabel user={user}/>
          :
          <LoginButton/>
        }
      </Box>
    </MediaQueryContainer>
  )
}