import {SortSelect} from "./SortSelect";
import {Box, Button} from "@mui/material";
import ApplyButton from "@/components/search-parameters-bar/ui/ApplyButton";
import PlatformsSelect from "@/components/search-parameters-bar/ui/PlatformsSelect";

export default function SearchParametersBar(){
  return (
    <Box
      padding={3}
      borderRadius={2}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        height: "fit-content",
        width: 250,
        minWidth: 250
      }}
    >
      <SortSelect/>
      
      <Box mb={2}/>
      
      <PlatformsSelect/>
      
      <Box mb={4}/>
      
      <ApplyButton/>
      
      <Box mb={2}/>
      
      <Button
        variant={'outlined'}
        color={'secondary'}
        fullWidth
      >
        Reset filters
      </Button>
    </Box>
  )
}