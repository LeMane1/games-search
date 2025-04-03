import NavDrawer from "@/components/header/ui/NavDrawer";
import Navigation from "@/components/header/ui/Navigation";
import {Box} from "@mui/material";

export default function Header(){
  return (
    <Box component='header'>
      <Navigation/>
      <NavDrawer/>
    </Box>
  )
}