import NavDrawer from "@/components/header/ui/NavDrawer";
import Navigation from "@/components/header/ui/Navigation";
import {Box, Stack} from "@mui/material";
import SearchBar from "@/components/header/ui/SearchBar";
import {MediaQueryContainer} from "@/components/media-query-container";

export default function Header(){
  return (
    <Box component='header'>
      <Stack direction='column' sx={{
        gap: 1
      }}>
        <Navigation/>
        <MediaQueryContainer breakPointValue={'md'} isLowerThanBreakpoint={true}>
          <SearchBar/>
        </MediaQueryContainer>
      </Stack>
      <NavDrawer/>
    </Box>
  )
}