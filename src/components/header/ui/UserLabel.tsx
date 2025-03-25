import {getCurrentUserData} from "@/api/getUser";
import {Avatar, Stack, SvgIcon, Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default async function UserLabel(){
  const user = await getCurrentUserData()
  
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      padding={1}
      borderRadius={1}
      sx={{
        '&:hover': {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(8px)",
          transition: 'transform 0.2s',
          cursor: 'pointer',
        }
      }}
    >
      <Avatar
        sx={{
          bgcolor: 'primary.main',
          width: 30,
          height: 30,
          color: "white",
      }}
        src="/broken-image.jpg"
      />
      
      <Typography variant="subtitle1" component="h6" fontWeight={'bold'}>
        {user?.username}
      </Typography>
      
      <SvgIcon sx={{
        width: 20,
        height: 20,
      }}>
        <ArrowForwardIosIcon/>
      </SvgIcon>
    </Stack>
  )
}