import {SortSelect} from "./SortSelect";
import {Box} from "@mui/material";
import ApplyButton from "@/components/search-parameters-bar/ui/ApplyButton";
import PlatformsSelect from "@/components/search-parameters-bar/ui/PlatformsSelect";
import ResetButton from "@/components/search-parameters-bar/ui/ResetButton";
import {getData} from "@/api/getData";
import {IGamePlatformsResponse} from "@/api/types";

interface ISearchParametersBarProps {
  width?: number;
}

export default async function SearchParametersBar({width = 250}: ISearchParametersBarProps) {
  const parentPlatformsResponse = await getData<IGamePlatformsResponse>({
    url: '/platforms/lists/parents'
  })
  
  return (
    <Box
      padding={3}
      borderRadius={2}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        height: "fit-content",
        width: width,
        minWidth: width
      }}
    >
      <SortSelect/>
      
      <Box mb={2}/>
      
      <PlatformsSelect parentPlatformsList={parentPlatformsResponse.results}/>
      
      <Box mb={4}/>
      
      <ApplyButton/>
      
      <Box mb={2}/>
      
      <ResetButton/>
    </Box>
  )
}