import {Fab} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import SearchParametersBar from "@/components/search-parameters-bar";
import {MediaQueryContainer} from "@/components/media-query-container";

export default function SearchParameters() {
  return (
    <>
      <MediaQueryContainer breakPointValue={'md'}>
        <SearchParametersBar/>
      </MediaQueryContainer>
      
      <MediaQueryContainer breakPointValue={'md'} isLowerThanBreakpoint={true}>
        <Fab color="primary" aria-label="add" sx={{
          position: 'fixed',
          right: 20,
          bottom: 20,
        }}>
          <TuneIcon />
        </Fab>
      </MediaQueryContainer>
    </>
  )
}