import {Box} from "@mui/material";
import NavLink from "@/components/header/ui/NavLink";
import {MediaQueryContainer} from "@/components/media-query-container";
import {navLinks} from "@/components/header/lib/constants";
import AuthWrapper from "@/components/header/ui/AuthWrapper";

export default function WideNavigation() {
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
            gap: 2,
            paddingInlineStart: 0,
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
        
        <AuthWrapper />
      </Box>
    </MediaQueryContainer>
  )
}