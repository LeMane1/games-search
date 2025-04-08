import {Box} from "@mui/material";
import MenuButton from "@/components/header/ui/MenuButton";
import AuthWrapper from "@/components/header/ui/AuthWrapper";

export default function ShortNavigation() {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 1
    }}>
      <AuthWrapper isExpanded={false}/>
      <MenuButton/>
    </Box>
  )
}