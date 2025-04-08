import {Box} from "@mui/material";
import {MediaQueryContainer} from "@/components/media-query-container";
import MenuButton from "@/components/header/ui/MenuButton";
import AuthWrapper from "@/components/header/ui/AuthWrapper";

export default function ShortNavigation() {
  return (
    <MediaQueryContainer breakPointValue={'md'} isLowerThanBreakpoint={true}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 1
      }}>
        <AuthWrapper isExpanded={false}/>
        <MenuButton/>
      </Box>
    </MediaQueryContainer>
  )
}