import {SortSelect} from "./SortSelect";
import {Box, Button} from "@mui/material";

export default function SearchParametersBar(){
  return (
    <Box
      padding={3}
      borderRadius={2}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        height: "fit-content",
      }}
    >
      <SortSelect/>
      
      <Box mb={4}/>
      
      <Button fullWidth variant={'contained'}>
        Apply Filters
      </Button>
    </Box>
  )
}