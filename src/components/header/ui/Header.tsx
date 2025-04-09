import NavDrawer from "@/components/header/ui/NavDrawer";
import Navigation from "@/components/header/ui/Navigation";
import {Box, Container, Stack} from "@mui/material";
import SearchBar from "@/components/header/ui/SearchBar";
import {MediaQueryContainer} from "@/components/media-query-container";

export default function Header(){
  return (
    <Box
      component='header'
      padding={0.5}
      sx={{
        backgroundColor: 'rgba(23, 23, 23, 0.4)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction='column'
          justifyContent='center'
          sx={{
            gap: 1
        }}>
          <Navigation/>
          <MediaQueryContainer breakPointValue={'md'} isLowerThanBreakpoint={true}>
            <>
              <SearchBar/>
              <Box height={8}/>
            </>
          </MediaQueryContainer>
        </Stack>
        <NavDrawer/>
      </Container>
    </Box>
  )
}