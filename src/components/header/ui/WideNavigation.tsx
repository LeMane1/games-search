import {Box} from "@mui/material";
import NavLink from "@/components/header/ui/NavLink";
import {navLinks} from "@/components/header/lib/constants";
import AuthWrapper from "@/components/header/ui/AuthWrapper";
import {Suspense} from "react";
import SearchBar from "@/components/header/ui/SearchBar";

export default function WideNavigation() {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 2,
      flexGrow: 1,
      justifyContent: 'flex-end',
      // backgroundColor: 'white',
    }}>
      <SearchBar/>
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
      
      <Suspense>
        <AuthWrapper />
      </Suspense>
    </Box>
  )
}