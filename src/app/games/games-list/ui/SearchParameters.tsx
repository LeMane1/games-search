import SearchParametersBar from "@/components/search-parameters-bar";
import {MediaQueryContainer} from "@/components/media-query-container";
import SearchParametersDrawer, {SearchParametersDrawerButton} from "@/components/search-parameters-drawer";

export default function SearchParameters() {
  return (
    <>
      <MediaQueryContainer breakPointValue={'md'}>
        <SearchParametersBar/>
      </MediaQueryContainer>
      
      <MediaQueryContainer breakPointValue={'md'} isLowerThanBreakpoint={true}>
        <SearchParametersDrawerButton/>
      </MediaQueryContainer>
      
      <SearchParametersDrawer>
        <SearchParametersBar width={'100%'} backgroundColor={'transparent'}/>
      </SearchParametersDrawer>
    </>
  )
}