import {SortSelect} from "./SortSelect";
import {Box, Typography} from "@mui/material";
import ApplyButton from "@/components/search-parameters-bar/ui/ApplyButton";
import PlatformsSelect from "@/components/search-parameters-bar/ui/PlatformsSelect";
import ResetButton from "@/components/search-parameters-bar/ui/ResetButton";
import {getParentPlatforms} from "@/components/search-parameters-bar/lib/getParentPlatforms";

interface ISearchParametersBarProps {
  width?: number | string;
  backgroundColor?: string;
}

export default async function SearchParametersBar(
  {
    width = 250,
    backgroundColor = "rgba(0, 0, 0, 0.1)",
  }: ISearchParametersBarProps) {
  
  const parentPlatforms = await getParentPlatforms()
  
  return (
    <Box
      padding={3}
      borderRadius={2}
      sx={{
        backgroundColor: backgroundColor,
        height: "fit-content",
        width: width,
        minWidth: width
      }}
    >
      <Typography variant="h5" component="h5" fontWeight="semibold">
        Filters
      </Typography>
      
      <SortSelect/>
      
      <Box mb={2}/>
      
      {
        parentPlatforms ?
          <PlatformsSelect parentPlatformsList={parentPlatforms}/>
          :
          <Typography component="h6" variant="subtitle1" color="textSecondary">
            {`Can't get platforms`}
          </Typography>
      }
      
      <Box mb={4}/>
      
      <ApplyButton/>
      
      <Box mb={2}/>
      
      <ResetButton/>
    </Box>
  )
}