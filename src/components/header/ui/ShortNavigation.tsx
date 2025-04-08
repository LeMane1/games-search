import {Box} from "@mui/material";
import MenuButton from "@/components/header/ui/MenuButton";
import AuthWrapper from "@/components/header/ui/AuthWrapper";
import {Suspense} from "react";

export default function ShortNavigation() {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 1
    }}>
      <Suspense>
        <AuthWrapper isExpanded={false}/>
      </Suspense>
      <MenuButton/>
    </Box>
  )
}